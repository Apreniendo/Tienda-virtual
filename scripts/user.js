async function login(username, password) {
  console.log({ username, password });

  const data = await callAPI("", { username, password });
  console.log({ data });
}

function saveUser(username) {
  localStorage.setItem("user", username);
}

function getUser() {
  return localStorage.getItem("user");
}
