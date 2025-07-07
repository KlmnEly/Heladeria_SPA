import { roles } from '../database/apis.js';

async function getRoles() {
  try {
    roles.forEach(role => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${role.id}</td>
            <td>${role.name}</td>
            <td>${role.status == 1 ? "activo" : "inactivo"}
            `;
      document.querySelector("#rolesTable tbody").appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}

getRoles();