const BASE = "http://localhost/apps/tienda/api/";

export default async function callAPI(link, data, method = 'POST') {
  const response = await fetch(`http://localhost/apps/tienda/api/${link}`, {
    method: method,
    body: JSON.stringify(data),
  });
  return response.json();
}
