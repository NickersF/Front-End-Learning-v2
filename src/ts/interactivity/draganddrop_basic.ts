// export function dragstart_handler(ev) {
//     // Add different types of drag data
//     ev.dataTransfer.setData("text/plain", ev.target.innerText);
//     ev.dataTransfer.setData("text/html", ev.target.outerHTML);
//     ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);
// }

// export function initDragDrop() {
//     window.addEventListener("DOMContentLoaded", () => {
//         const element = document.getElementById("p1");
//         element.addEventListener("dragstart", dragstart_handler);
//     });
// }

// export function dragover_handler(ev) {
//     ev.preventDefault();
//     ev.dataTransfer.dropEffect = "move";
// }

// export function drop_handler(ev) {
//     ev.preventDefault();
//     // Get the id of the target and add the moved element to the target's DOM
//     const data = ev.dataTransfer.getData("text/plain");
//     ev.target.appendChild(document.getElementById(data));
// }