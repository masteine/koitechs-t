type GitHubUser = {
  id: number;
  name: string;
  public_repos: number;
  created_at: string;
};

type Repository = {
  id: number;
  name: string;
  language: string;
  owner: GitHubUser;
  updated_at: string;
  full_name: string;
  html_url: string;
  pushed_at: string;
  private: boolean;
};

export type { Repository, GitHubUser };
