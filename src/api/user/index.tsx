const getUserData = async (username: string | undefined = "") => {
  const urlParamsComplete = username ? `/${username}` : "";

  try {
    const userResponse = await fetch(
      `https://api.github.com/users${urlParamsComplete}`
    );
    return userResponse.json();
  } catch (error) {
    throw new Error("User not found");
  }
};

const getUserRepos = async (repos_url: string) => {
  try {
    const reposResponse = await fetch(repos_url);
    return reposResponse.json();
  } catch (error) {
    throw new Error("Repos not found");
  }
};

export { getUserData, getUserRepos };
