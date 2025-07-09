import { getRoles } from "../app/http/controllers/roles.js";
import { getUsers } from '../app/http/controllers/users.js';
import { getClients } from "../app/http/controllers/clients.js";
import { getFlavors } from "../app/http/controllers/flavors.js";
import { getToppings } from "../app/http/controllers/toppings.js";
import { getTypesIceCream } from "../app/http/controllers/types-ice-cream.js";
import { getInvoices } from "../app/http/controllers/sales-invoices.js";
import { getInvoiceDetails } from "../app/http/controllers/invoice-details.js";

const routes = {
  "/": "/src/views/home.html",
  "/roles": "/src/views/roles/index.html",
  "/users": "/src/views/users/index.html",
  "/clients": "/src/views/clients/index.html",
  "/flavors": "/src/views/flavors/index.html",
  "/toppings": "/src/views/toppings/index.html",
  "/types-ice-cream": "/src/views/types-ice-cream/index.html",
  "/invoices": "/src/views/sales-invoices/index.html",
  "/invoice-details": "/src/views/invoice-details/index.html",
};

export async function renderRoute() {
  const user = JSON.parse(localStorage.getItem("user"));
  const path = location.pathname;
  const app = document.getElementById("app");
  const isAuth = localStorage.getItem("isAuth");

  const file = routes[path];

  if (!file) {
    console.warn("Pagina no encontrada: ", path);
    app.innerHTML = '<h1 class="text-center text-danger">404 - Pagina no encontrada</h1>'
    return;
  }

  try {
    const res = await fetch(file);
    const html = await res.text();
    let currentRoute = ''
    app.innerHTML = html;

    switch (file) {
      case "/src/views/clients/index.html":
        currentRoute = "/src/views/clients/index.html";
        getClients();
        break;
      case "/src/views/roles/index.html":
        currentRoute = "/src/views/roles/index.html";
        getRoles();
        break;
      case "/src/views/users/index.html":
        currentRoute = "/src/views/users/index.html";
        getUsers();
        break;
      case "/src/views/flavors/index.html":
        currentRoute = "/src/views/flavors/index.html";
        getFlavors();
        break;
      case "/src/views/toppings/index.html":
        currentRoute = "/src/views/toppings/index.html";
        getToppings();
        break;
      case "/src/views/types-ice-cream/index.html":
        currentRoute = "/src/views/types-ice-cream/index.html";
        getTypesIceCream();
        break;
      case "/src/views/sales-invoices/index.html":
        currentRoute = "/src/views/sales-invoices/index.html";
        getInvoices();
        break;
      case "/src/views/invoice-details/index.html":
        currentRoute = "/src/views/invoice-details/index.html";
          getInvoiceDetails();
          break;
        }
  } catch (error) {
    console.log("algo salió mal ", error);
  }
}

export function navigateTo(url) {
  history.pushState(null, null, url); 
  renderRoute();
}



// switch (file) {
//   case "/src/views/roles/index.html":
//     currentRoute = "/roles";
//     getRoles();
//     break;
//   case "/src/views/users/index.html":
//     currentRoute = "/users";
//     getUsers();
//     break;
//   case "/src/views/clients/index.html":
//     currentRoute = "/clients";
//     getClients();
//     break;
//   case "/src/views/flavors/index.html":
//     currentRoute = "/flavors";
//     getFlavors();
//     break;
//   case "/src/views/toppings/index.html":
//     currentRoute = "/toppings";
//     getToppings();
//     break;
//   case "/src/views/types-ice-cream/index.html":
//     currentRoute = "/types-ice-cream";
//     getTypesIceCream();
//     break;
//   case "/src/views/sales-invoices/index.html":
//     currentRoute = "/invoices";
//     getInvoices();
//     break;
//   case "/src/views/invoice-details/index.html":
//     currentRoute = "/invoice-details";
//     getInvoiceDetails();
//     break;
// }