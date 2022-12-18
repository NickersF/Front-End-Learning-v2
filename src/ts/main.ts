import { EchoSlider, ScrollEventExample } from "./layout/overflow_position";
import { debugTest } from "./debug_test";
import Todo from "./todo/todo";

EchoSlider();
ScrollEventExample();

let todo = new Todo();

todo.testTodo();

$("#DebugTest_Btn").on("click", () => {
    let debugResult = debugTest(2, 3);
    console.log(debugResult);
});

console.log(document.URL);