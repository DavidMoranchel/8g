const URL_BASE = "https://reactsessions-ac545.firebaseio.com/";

const getUsers = async () => {
  const response = await fetch(`${URL_BASE}users.json`);
  const data = await response.json();
  return data;
};

const getUser = async (key) => {
  const response = await fetch(`${URL_BASE}users/${key}.json`);
  const data = await response.json();
  return data;
};

export { getUsers, getUser };
