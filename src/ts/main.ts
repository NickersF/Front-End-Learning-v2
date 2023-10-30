import { IndexController } from ".";

let currentPage = window.location.pathname;

if (currentPage.includes("index")) {
    console.log(currentPage);
}