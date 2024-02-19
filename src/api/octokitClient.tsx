import { Octokit } from "@octokit/rest";

const octokitClient = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
  userAgent: "skylight v1"
});

export { octokitClient };
