export default function Link({ to, children, setRutaActual }) {
  function handleClick(e) {
    e.preventDefault();
    window.history.pushState(null, "", to);
    setRutaActual(to)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
