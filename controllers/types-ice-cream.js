import { typesIceCreams } from "../database/apis.js";

async function getTypes() {
  try {
    typesIceCreams.forEach((type) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${type.id}</td>
            <td>${type.name}</td>
            <td>${type.price}</td>
            <td>${type.status == 1 ? "activo" : "inactivo"}
            `;
      document.querySelector("#typesIceCreamTable tbody").appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}

getTypes();
