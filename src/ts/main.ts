import { debugTest } from "./debug_test";

$("#DebugTest_Btn").on("click", () => {
    let debugResult = debugTest(2, 3);
    console.log(debugResult);
});

console.log(document.URL);