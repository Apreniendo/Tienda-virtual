import Layout from "./Layout";
import "./css/styles.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Tienda from "./pages/Tienda";
import Login from "./pages/Login";
import Contactanos from "./pages/Contactanos";
import Carrito from "./pages/Carrito";
import Link from "./components/Link";

const rutasPrincipales = [
  { path: "/", componente: Home, label: "Inicio" },
  { path: "/tienda", componente: Tienda, label: "Tienda" },
  { path: "/carrito", componente: Carrito, label: "Carrito" },
  { path: "/contactanos", componente: Contactanos, label: "Contactanos" },
];

const rustasSecundarias = [{ path: "/login", componente: Login }];

export default function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [rutaActual, setRutaActual] = useState("/");

  function handleUrlChange() {
    setRutaActual(window.location.pathname);
  }

  useEffect(() => {
    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  });

  const ruta = rutasPrincipales.find((ruta) => ruta.path === rutaActual);

  function onLogin() {
    setUser(localStorage.getItem("user"));
    setRutaActual("/");
  }

  function onLogout() {
    setUser(null);
    localStorage.clear();
    setRutaActual("/");
  }

  if (!user) {
    return (
      <main className="container" id="login-page">
        <Login onLogin={onLogin} />
      </main>
    );
  }

  return (
    <Layout
      onLogout={onLogout}
      rutasPrincipales={
        <ul id="links">
          {rutasPrincipales.map((ruta) => (
            <li className={ruta.path === rutaActual && "active"}>
              <Link to={ruta.path} setRutaActual={setRutaActual}>
                {ruta.label}
              </Link>
            </li>
          ))}
        </ul>
      }
    >
      <ruta.componente />
    </Layout>
  );
}
