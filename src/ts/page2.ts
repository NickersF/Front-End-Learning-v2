declare var PAGE_2: Boolean;

export default class Page2 {

    private static _instance: Page2;
    testString: string = "";

    static getInstance() {
        if (!this._instance) {
            this._instance = new Page2();
        }

        return this._instance;
    }

    setup() {
        console.log("Page 2 loaded.");
        console.log(this);
    }
}

jQuery(() => {
    try {
        if (PAGE_2) {
            Page2.getInstance().setup();
        }
    } catch (error) {

    }
});