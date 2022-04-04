import { styleGuideSetup } from "./styleguide";
import { EchoSlider, ScrollEventExample } from "./overflow_position";
import { SelectInputFn } from "./selectinput";
import { User } from "./user";
import { dragstart_handler } from "./draganddrop_basic";
import { initDragDrop } from "./draganddrop_basic";

styleGuideSetup();
EchoSlider();
ScrollEventExample();
SelectInputFn();

let aUser = new User();

aUser.userName = "loler20102";
aUser.email = "name@domain.com";
//aUser.addElement("userRoot");

// drag and drop learning