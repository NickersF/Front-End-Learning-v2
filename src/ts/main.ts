import { EchoSlider, ScrollEventExample } from "./layout/overflow_position";
import { SelectInputFn } from "./form_and_input/selectinput";
import * as fs from "fs";

EchoSlider();
ScrollEventExample();
SelectInputFn();

const dir = "./";

fs.readdir(dir, (err, files) => {
    if (err) {
        throw err;
    }

    files.forEach(file => {
        console.log(file);
    });
});