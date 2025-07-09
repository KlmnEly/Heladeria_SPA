import { navigateTo, renderRoute } from "./router";

document.addEventListener('click', e => {
    if (e.target.matches('a') && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});


document.addEventListener("DOMContentLoaded", renderRoute());
window.addEventListener("popstate", renderRoute);