import { IndexController } from ".";

let currentPage = window.location.pathname;

console.log(currentPage);

if (currentPage.includes("index")) {
    let indexController = new IndexController();
    indexController.testMe();
}