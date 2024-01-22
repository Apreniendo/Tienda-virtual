import { useState } from "react";
import Link from "./components/Link";

export default function Layout({ children, rutasPrincipales, onLogout }) {
  const [user, setUser] = useState(localStorage.getItem('user'))
  return (
    <>
      <header>
        <h1>Electrotienda</h1>
        <nav>
          {rutasPrincipales}
          <div className="dropdown">
            <button className="dropbtn">
              <span id="user">{user}</span>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link
                to="/"
                id="user-desconectarse"
                setRutaActual={() => {
                  onLogout();
                }}
              >
                Desconectarse
              </Link>
            </div>
          </div>
          <div className="menu-icon" id="menu-icon">
            &#9776;
          </div>
        </nav>
      </header>
      <main className="container">{children}</main>
      <footer>
        <p>Derechos de autor &copy; 2024 Electrotienda</p>
      </footer>
    </>
  );
}
