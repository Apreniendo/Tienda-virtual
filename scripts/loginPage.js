document.querySelector("#login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const usuario = {
    username: username,
    password: password,
  };

  try {
    const response = await callAPI("./login.php", usuario);
    if (response.ok) {
      localStorage.setItem("user", response.result);
      document.location.href = "../index.html";
    } else {
      alert(response.result);
    }
  } catch (error) {
    alert("backend no conectado, logueando como usuario de prueba");
    localStorage.setItem("user", "TEST");
    document.location.href = "../index.html";
  }
});

document.getElementById('signup-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;
  const passwordConfirm = document.getElementById('newPasswordConfirm').value;
  const datos = {
    username, password, passwordConfirm
  }

  if (password !== passwordConfirm) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  try {
    const response = await callAPI('signup.php', datos)

    if (!response.ok) {
      alert('Error al crear la cuenta')
    } {
      alert('Cuenta creada por favor inicie sesión')
      window.location.href = '../index.html';
    }
  } catch (error) {
    alert('Error al crear la cuenta: ' + error.message);
  }
});