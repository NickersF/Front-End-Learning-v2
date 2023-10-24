import "./dragdrop.exports";
import "./zindex.exports";
import "./radialmenu.exports";
import "./animejs_test.exports";

let currentPage = window.location.pathname;

console.log(currentPage);

if (currentPage.includes("animation")) {
    console.log("animation page active");
}