declare var AJAX_TEXT: Boolean;

export default class AjaxTest {

    private static _instance: AjaxTest;
    testString: string = "";

    static getInstance() {
        if (!this._instance) {
            this._instance = new AjaxTest();
        }

        return this._instance;
    }

    setup() {
        
        console.log(this);

        this.getTextFileContents();
    }

    getTextFileContents() {

    }
}

jQuery(() => {
    try {
        if (AJAX_TEXT) {
            AjaxTest.getInstance().setup();
        }
    } catch (error) {

    }
});