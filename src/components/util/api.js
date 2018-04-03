const id = "0411e12b010f75a6c751";
const secret = "8e1123577ee45b8e1f24df68d24f71f286f12224"; // load this from an environment variable
const numberOfRepo = 15; // nice work extracting this magic number into a constant
const sortType = "created:asc";
const profileParams = `?client_id=${id}&client_secret=${secret}`;
const repoParams = `?per_page=${numberOfRepo}&sort=${sortType}&client_id=${id}&client_secret=${secret}`;

export const getProfile = async term => {
  try {
    const profileResponse = await fetch(
      `https://api.github.com/users/${term}${profileParams}`
    );
    const profile = profileResponse.json(); // json() is not an async function
    return profile;
  } catch (error) {
    throw(new Error('Error receiving profile'));
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
    throw(new Error('Error receiving repos'));
  }
};

export const getUserData = async term => {
  try {
    const [profile, repos] = await Promise.all([getProfile(term), getRepos(term)]);
    return {
      profile,
      repos
    };
  } catch (error) {
    throw(new Error('Error receiving UserData'));
  }
};
