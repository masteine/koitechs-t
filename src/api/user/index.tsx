import { octokitClient } from "../octokitClient";

const getUserData = async (username: string | undefined = "") => {
  try {
    const response = await octokitClient.request(`GET /users/${username}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getUserRepos = async (owner: string) => {
  try {
    const response = await octokitClient.request(`GET /users/${owner}/repos`);

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getRepository = async (owner: string, repo: string) => {
  try {
    const response = await octokitClient.request(
      `GET /repos/${owner}/${repo}`,
      {
        owner,
        repo
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getRepositoryLanguages = async (owner: string, repo: string) => {
  try {
    const response = await octokitClient.request(
      `GET /repos/${owner}/${repo}/languages`,
      {
        owner,
        repo
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { getUserData, getUserRepos, getRepository, getRepositoryLanguages };
