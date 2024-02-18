import { Repository } from "../api/user/types";

export function calculateLanguagesStatistic(repos: any[]) {
  let languagesStats: { [key: string]: number } = {};
  repos.forEach((repo: Repository) => {
    if (repo.language && !languagesStats[repo.language]) {
      languagesStats[repo.language] = 1;
    } else if (repo.language) {
      languagesStats[repo.language]++;
    }
  });

  return Object.keys(languagesStats).map((key) => ({
    name: key,
    value: languagesStats[key]
  }));
}
