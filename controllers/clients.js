import { clients } from '../database/apis.js';

async function getClients () {
    try {
        clients.forEach (client => {
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.stauts == 1 ? 'activo' : 'inactivo'}</td>
            `;
            document.querySelector("#clientsTable tbody").appendChild(row);
        })
    } catch (error) {
        console.log(error)
    }
}

getClients()