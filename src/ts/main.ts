import { EchoSlider, ScrollEventExample } from "./layout/overflow_position";
import { debugTest } from "./debug_test";

EchoSlider();
ScrollEventExample();

$("#DebugTest_Btn").on("click", () => {
    let debugResult = debugTest(2, 3);
    console.log(debugResult);
});