import { styleGuideSetup } from "./styleguide";
import { EchoSlider, ScrollEventExample } from "./overflow_position";
import { moduleTestFunc } from "./function";
import { ConversationEditor } from "./conversation_editor/conversation_editor";

styleGuideSetup();
EchoSlider();
ScrollEventExample();
moduleTestFunc();

let conversationEditorInstance = new ConversationEditor();
conversationEditorInstance.main();