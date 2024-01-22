import Layout from "./Layout";
import "../css/styles.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Tienda from "./pages/Tienda";

const rutas = [
  { path: "/", componente: Home },
  { path: "/tienda", componente: Tienda }
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
