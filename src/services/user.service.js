function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function getToken() {
  const user = getUser();
  return `Bearer ${user?.token}`;
}

function clearUser() {
  localStorage.removeItem("user");
}

module.exports = {
  saveUser,
  getUser,
  getToken,
  clearUser,
};
