import { styleGuideSetup } from "./styleguide";
import { EchoSlider, ScrollEventExample } from "./layout/overflow_position";
import { SelectInputFn } from "./form_and_input/selectinput";
import { User } from "./ts_learning/user";

styleGuideSetup();
EchoSlider();
ScrollEventExample();
SelectInputFn();

let aUser = new User();

aUser.userName = "loler20102";
aUser.email = "name@domain.com";
//aUser.addElement("userRoot");

// drag and drop learning