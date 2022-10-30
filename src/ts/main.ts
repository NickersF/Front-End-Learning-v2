import { EchoSlider, ScrollEventExample } from "./layout/overflow_position";
import { SelectInputFn } from "./form_and_input/selectinput";
import { debugTest } from "./debug_test";

EchoSlider();
ScrollEventExample();
SelectInputFn();


$("#DebugTest_Btn").on("click", () => {
    let debugResult = debugTest(2, 3);
    console.log(debugResult);
});