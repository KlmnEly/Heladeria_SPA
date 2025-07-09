import { toppings } from '../../../database/apis.js';

export async function getToppings() {
  try {
    toppings.forEach((topping) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${topping.id}</td>
            <td>${topping.name}</td>
            <td>${topping.price}</td>
            <td>${topping.status == 1 ? "activo" : "inactivo"}
            `;
      document.querySelector("#toppingsTable tbody").appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}
