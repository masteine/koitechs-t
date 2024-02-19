import { useEffect, useState } from "react";
import { GitHubUser, Repository } from "../../api/user/types";
import {
  getUserData,
  getUserRepos,
  getRepositoryLanguages
} from "../../api/user";

type UserGenerateResume = {
  username: string | undefined;
};

export function useGenerateResume({ username }: UserGenerateResume) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [languages, setLanguages] = useState<Record<string, number>[]>([]);
  const [error, setError] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(true);

  const generateResume = async (username: string) => {
    try {
      const repos: any = await getUserRepos(username);
      if (repos.length === 0) {
        throw new Error("No repositories found for this user.");
      }
      const languagePromises = repos.map((repo: any) =>
        getRepositoryLanguages(username, repo.name)
      );
      const languagesArray = await Promise.all(languagePromises);
      setLanguages(languagesArray);
      setRepos(repos);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const getUser = async (username: string) => {
    try {
      const userResponse = await getUserData(username);
      setUser(userResponse);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!username) return;
    generateResume(username);
    getUser(username);
  }, [username]);

  return {
    repos,
    user,
    languages,
    error,
    isGenerating
  };
}
