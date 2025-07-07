import { invoiceDetails, flavors, toppings, typesIceCreams } from '../database/apis.js';

async function getInvoiceDetails () {
    try {
        invoiceDetails.forEach (detail => {
            const row = document.createElement('tr');
            const flavorsData = flavors.find(e => e.id == detail.flavor_id);
            const toppingData = toppings.find(e => e.id == detail.topping_id);
            const typeIceCreamData = typesIceCreams.find(e => e.id == detail.type_ice_cream_id);

            row.innerHTML = `
            <td>${detail.id}</td>
            <td>${detail.sales_invoice_id}</td>
            <td>${flavorsData.name}</td>
            <td>${toppingData.name}</td>
            <td>${typeIceCreamData.name}</td>
            <td>${detail.quantity}</td>
            <td>${detail.price_unit}</td>
            <td>${detail.total}</td>
            <td>${detail.status == 1 ? "activo" : "inactivo"}</td>
            `;

            document.querySelector("#invoiceDetailsTable tbody").appendChild(row);

        })
    } catch (error) {
        console.error('Error al capturar detalles de la factura:', error);
        return [];
    }
}

getInvoiceDetails()