import Layout from "./Layout";
import "../css/styles.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Tienda from "./pages/Tienda";
import Login from "./pages/Login";
import Contactanos from "./pages/Contactanos";
import Carrito from "./pages/Carrito";

const rutas = [
  { path: "/", componente: Home },
  { path: "/tienda", componente: Tienda },
  { path: "/carrito", componente: Carrito },
  { path: "/contactanos", componente: Contactanos },
  { path: "/login", componente: Login },
];

export default function App() {
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

  const ruta = rutas.find((ruta) => ruta.path === rutaActual);

  return (
    <Layout setRutaActual={setRutaActual} >
      <ruta.componente />
    </Layout>
  );
}
