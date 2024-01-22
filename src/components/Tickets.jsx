import { useEffect, useState } from "react";
import callAPI from "../../scripts/api";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function getTickets() {
      const response = await callAPI("get_tickets.php", {
        username: localStorage.getItem("user"),
      });

      if (response.ok) {
        setTickets(response.tickets);
      }
    }

    getTickets();
  }, []);

  return (
    <>
      <h3>Tickets</h3>
      <table>
        <tr>
          <th>id</th>
          <th>Asunto</th>
          <th>Mensaje</th>
          <th>Estado</th>
        </tr>
        {tickets.map((t) => (
          <tr>
            <td>{t.id}</td>
            <td>{t.asunto}</td>
            <td>{t.mensaje}</td>
            <td>{t.estado}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
