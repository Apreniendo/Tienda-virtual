const username = localStorage.getItem('user');

if (username) {
} else {
  window.location.href = "../pages/login.html";
}
