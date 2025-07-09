import { invoices, clients, users } from '../../../database/apis.js';

export async function getInvoices() {
  try {
    invoices.forEach((invoice) => {
      const row = document.createElement("tr");
      const clientData = clients.find(
        (client) => client.id == invoice.client_id
      );
      const userData = users.find((user) => user.id == invoice.user_id);
      row.innerHTML = `
                <td>${invoice.id}</td>
                <td>${clientData.name}</td>
                <td>${invoice.date}</td>
                <td>${invoice.total}</td>
                <td>${userData.name}</td>
                <td>${invoice.status == 1 ? "activo" : "inactivo"}</td>
            `;
      document.querySelector("#invoicesTable tbody").appendChild(row);
    });
  } catch (error) {
    console.error("Error al capturar facturas:", error);
    return [];
  }
}
