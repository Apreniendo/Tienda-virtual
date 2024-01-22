import Link from "./components/Link";

export default function Layout({ children, setRutaActual }) {
  return (
    <>
      <header>
        <h1>Electrotienda</h1>
        <nav>
          <ul id="links">
            <li class="">
              <Link to={"/"} setRutaActual={setRutaActual}>Inicio</Link>
            </li>
            <li>
              <Link to={"/tienda"} setRutaActual={setRutaActual}>
                Tienda
              </Link>
            </li>
            <li>
              <Link to={"/carrito"} setRutaActual={setRutaActual}>
                Carrito
              </Link>
            </li>
            <li>
              <Link to={"/contactanos"} setRutaActual={setRutaActual}>
                Contactanos
              </Link>
            </li>
          </ul>
          <div className="dropdown">
            <button className="dropbtn">
              <span id="user"></span>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#" id="user-desconectarse">
                Desconectarse
              </a>
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
