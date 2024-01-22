document.querySelector("#menu-icon").addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  var x = document.querySelector("#links") ?? document.createElement("div");
  x.classList.toggle("toggle");
}

const user = localStorage.getItem("user");

if (user) {
  document.querySelector("#user").textContent = user;
}

document.querySelector('#user-desconectarse').addEventListener('click', () => { 
  localStorage.clear()
  location.reload()
})