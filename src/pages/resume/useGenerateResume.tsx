import { useEffect, useState } from "react";
import { user as userMock, repos as reposMock } from "./mock";
import { GitHubUser, Repository } from "../../api/user/types";
// import { getUserData, getUserRepos } from "../../api/users";
import { calculateLanguagesStatistic } from "../../utils/calculateLanguagesStatistic";

type UserGenerateResume = {
  username: string | undefined;
};

export function useGenerateResume({ username }: UserGenerateResume) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [languages, setLanguages] = useState<{ name: string; value: number }[]>(
    []
  );
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const generateResume = async (username: string) => {
    try {
      setIsGenerating(true);
      // const userResponse = await getUserData(username);
      // const reposResponse = await getUserRepos(userResponse.repos_url);
      const userResponse = userMock;
      const reposResponse = reposMock;
      setUser(userResponse);
      setRepos(reposResponse);

      const languages = calculateLanguagesStatistic(reposResponse);

      setLanguages(languages);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (!username) return;
    generateResume(username);
  }, [username]);

  return {
    repos,
    user,
    languages,
    isGenerating,
    error
  };
}
