import { useEffect, useState } from "react";
import callAPI from "../../scripts/api";
import { bool } from "prop-types";

export default function Contactanos() {
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (mostrarMensaje === true) {
      console.log('show')
      timeoutId = setTimeout(() => {
        console.log('hide')
        setMostrarMensaje(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [mostrarMensaje]);

  async function handleSubmit(e) {
    e.preventDefault();
    const username = localStorage.getItem("user");
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("message").value;
    const datos = {
      username,
      asunto,
      mensaje,
    };

    try {
      const response = await callAPI("crear_ticket.php", datos);
      console.log({response})
      if (response.ok) {
        setMensaje(response.mensaje);
        setMostrarMensaje(true);
      } else {
        setError(response.error);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <h2>Contactanos</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label for="asunto">Asunto:</label>
          <input type="text" id="asunto" name="asunto" required />
        </div>
        <div>
          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="">{mostrarMensaje && <p className="mensaje">{mensaje}</p>}</div>
      <div className=""><p className="error">{error}</p></div>
    </>
  );
}
