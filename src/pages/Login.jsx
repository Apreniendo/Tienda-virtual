import { useState } from "react";
import callAPI from "../../scripts/api";

export default function Login({ onLogin }) {
  const [estaLogueando, setEstaLogueando] = useState(true);

  function alternarVista() {
    setEstaLogueando(!estaLogueando);
  }

  if (estaLogueando) {
    async function handleSubmit(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const usuario = {
        username: username,
        password: password,
      };

      try {
        const response = await callAPI("./login.php", usuario);
        if (response.ok) {
          console.log({ response });
          localStorage.setItem("user", response.result);
          onLogin();
        } else {
          alert(response.result);
        }
      } catch (error) {
        alert("backend no conectado, logueando como usuario de prueba");
        localStorage.setItem("user", "TEST");
        onLogin();
      }
    }

    return (
      <div id="loginForm">
        <h2>Inicia Sesión</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          no tienes una cuenta?{" "}
          <button onClick={() => alternarVista()}>Crea Una</button>
        </p>
        <p>
          Si no hay backend configurado todavía puede acceder a la pagina como
          un usuario de prueba
        </p>
      </div>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("newUsername").value;
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
    const passwordConfirm = document.getElementById("newPasswordConfirm").value;
    const datos = {
      username,
      password,
      passwordConfirm,
      email
    };

    if (password !== passwordConfirm) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await callAPI("signup.php", datos);
      console.log({ response });

      if (!response.ok) {
        alert("Error al crear la cuenta");
      } else {
        alert("Cuenta creada por favor inicie sesión");
        setEstaLogueando(true);
      }
    } catch (error) {
      alert("Error al crear la cuenta: " + error.message);
    }
  }

  return (
    <div id="signupForm">
      <h2>Crea tu cuenta</h2>
      <form id="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newUsername">Username</label>
          <input type="text" id="newUsername" name="newUsername" required />
        </div>
        <div>
          <label htmlFor="newEmail">Email</label>
          <input type="email" id="newEmail" name="newEmail" required />
        </div>
        <div>
          <label htmlFor="newPassword">Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            minLength={8}
            maxLength={12}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">Confirm Password</label>
          <input
            type="password"
            id="newPasswordConfirm"
            name="newPasswordConfirm"
            minLength={8}
            maxLength={12}
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <ul>
          <li>
            The password must contain at least one lowercase letter, one
            uppercase letter, one digit, and one special character from the set
            !@#$%^&*_=+-
          </li>
          <li>
            The total length of the password must be between 8 and 12
            characters.
          </li>
        </ul>
      </form>
      <p>
        Ya tienes una cuenta?{" "}
        <button onClick={() => alternarVista()}>Inicia sesión</button>
      </p>
    </div>
  );
}
