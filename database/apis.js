import axios from "axios";

const apiUrlRoles = "http://localhost:8000/roles";
const apiUrlUsers = "http://localhost:8000/users";
const apiUrlFlavors = "http://localhost:8000/flavors";
const apiUrlToppings = "http://localhost:8000/toppings";
const appiUrlTypesIceCreams = "http://localhost:8000/types_ice_creams";
const apiUrlClients = "http://localhost:8000/clients";
const apiUrlInvoices = "http://localhost:8000/sales_invoices";
const apiUrlInvoiceDetails = "http://localhost:8000/sales_invoice_details";

// const responseRoles = await fetch(apiUrlRoles);
// export const roles = await responseRoles.json();

// const responseUsers = await fetch(apiUrlUsers);
// export const users = await responseUsers.json();

// const responseFlavors = await fetch(apiUrlFlavors);
// export const flavors = await responseFlavors.json();

// const responseToppings = await fetch(apiUrlToppings);
// export const toppings = await responseToppings.json();

// const responseTypesIceCreams = await fetch(appiUrlTypesIceCreams);
// export const typesIceCreams = await responseTypesIceCreams.json();

// const responseClients = await fetch(apiUrlClients);
// export const clients = await responseClients.json();

// const responseInvoices = await fetch(apiUrlInvoices);
// export const invoices = await responseInvoices.json();

// const responseInvoiceDetails = await fetch(apiUrlInvoiceDetails);
// export const invoiceDetails = await responseInvoiceDetails.json();

// const params = {
//     status: 1
// };

const responseRoles = await axios.get(apiUrlRoles);
export const roles = responseRoles.data;

const responseUsers = await axios.get(apiUrlUsers);
export const users = responseUsers.data;

const responseFlavors = await axios.get(apiUrlFlavors);
export const flavors = responseFlavors.data;

const responseToppings = await axios.get(apiUrlToppings);
export const toppings = responseToppings.data;

const responseTypesIceCreams = await axios.get(appiUrlTypesIceCreams);
export const typesIceCreams = responseTypesIceCreams.data;

const responseClients = await axios.get(apiUrlClients);
export const clients = responseClients.data;

const responseInvoices = await axios.get(apiUrlInvoices);
export const invoices = responseInvoices.data;

const responseInvoiceDetails = await axios.get(apiUrlInvoiceDetails);
export const invoiceDetails = responseInvoiceDetails.data;
