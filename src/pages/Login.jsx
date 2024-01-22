import { useState } from "react";

export default function Login() {
  const [estaLogueando, setEstaLogueando] = useState(true);

  function alternarVista() {
    setEstaLogueando(!estaLogueando);
  }

  if (estaLogueando) {
    function handleSubmit(event) {
      event.preventDefault();
      // Aquí puedes agregar la lógica para procesar el inicio de sesión
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
          <button
            onClick={() =>
              alternarVista()
            }
          >
            Crea Una
          </button>
        </p>
        <p>
          Si no hay backend configurado todavía puede acceder a la pagina como
          un usuario de prueba
        </p>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para procesar el registro
  }

  return (
    <div id="signupForm" >
      <h2>Crea tu cuenta</h2>
      <form id="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newUsername">Username</label>
          <input type="text" id="newUsername" name="newUsername" required />
        </div>
        <div>
          <label htmlFor="newPassword">Password</label>
          <input type="password" id="newPassword" name="newPassword" required />
        </div>
        <div>
          <label htmlFor="newPassword">Confirm Password</label>
          <input
            type="password"
            id="newPasswordConfirm"
            name="newPasswordConfirm"
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <p>
        Ya tienes una cuenta?{" "}
        <button
          onClick={() =>
            alternarVista()
          }
        >
          Inicia sesión
        </button>
      </p>
    </div>
  );
}
