const id = "0411e12b010f75a6c751";
const secret = "8e1123577ee45b8e1f24df68d24f71f286f12224";
const numberOfRepo = 15;
const sortType = "created:asc";
const profileParams = `?client_id=${id}&client_secret=${secret}`;
const repoParams = `?per_page=${numberOfRepo}
&sort=${sortType}
&client_id=${id}&client_secret=${secret}`;

export const getProfile = async term => {
  try {
    const profileResponse = await fetch(
      `https://api.github.com/users/${term}${profileParams}`
    );
    const profile = await profileResponse.json();
    return profile;
  } catch (error) {
    throw error;
  }
};

export const getRepos = async term => {
  try {
    const repoResponse = await fetch(
      `https://api.github.com/users/${term}/repos${repoParams}`
    );

    const repos = await repoResponse.json();
    return repos;
  } catch (error) {
    throw error;
  }
};

export const getUserData = async term => {
  try {
    const profileResult = await Promise.all([getProfile(term), getRepos(term)]);
    const [profile, repos] = profileResult;
    return {
      profile,
      repos
    };
  } catch (error) {
    throw error;
  }
};
