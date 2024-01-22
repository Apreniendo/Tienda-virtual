export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Electrotienda</h1>
        <nav>
          <ul id="links">
            <li class="active">
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="./pages/tienda.html">Tienda</a>
            </li>
            <li>
              <a href="./pages/carrito.html">Carrito</a>
            </li>
            <li>
              <a href="./pages/contactanos.html">Contactanos</a>
            </li>
          </ul>
          <div class="dropdown">
            <button class="dropbtn">
              <span id="user"></span>
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#" id="user-desconectarse">
                Desconectarse
              </a>
            </div>
          </div>
          <div class="menu-icon" id="menu-icon">
            &#9776;
          </div>
        </nav>
      </header>
      <main class="container">{children}</main>
      <footer>
        <p>Derechos de autor &copy; 2024 Electrotienda</p>
      </footer>
    </>
  );
}
