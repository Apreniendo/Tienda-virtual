export default function Contactanos() {
  return (
    <>
      <h2>Contactanos</h2>
      <form id="contact-form">
        <div>
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
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
    </>
  );
}
