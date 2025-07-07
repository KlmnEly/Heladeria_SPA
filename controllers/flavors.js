import { flavors } from '../database/apis.js';

async function getFlavors () {
    try {
        flavors.forEach (flavor => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${flavor.id}</td>
            <td>${flavor.name}</td>
            <td>${flavor.price}</td>
            <td>${flavor.status == 1 ? 'activo' : 'inactivo'}
            `;
            document.querySelector('#flavorsTable tbody').appendChild(row);
        })
    } catch (error) {
        console.log(error)
    }
}

getFlavors();