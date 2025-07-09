import { users, roles } from '../../../database/apis.js';

export async function getUsers() {
  try {
    users.forEach((user) => {
      const roleData = roles.find((e) => e.id == user.role_id);
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${roleData.name}</td>
            <td>${user.status == 1 ? "activo" : "inactivo"}</td>
            `;
      document.querySelector("#usersTable tbody").appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}
