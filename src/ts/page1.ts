declare var PAGE_1: Boolean;

export default class Page1 {

    private static _instance: Page1;

    static getInstance() {
        if (!this._instance) {
            this._instance = new Page1();
        }

        return this._instance;
    }

    testFn() {
        console.log("Page 1 controller loaded.");
        console.log(document.URL);
    }
}

jQuery(() => {
    try {
        if (PAGE_1) {
            Page1.getInstance().testFn();
        }
    } catch (error) {

    }
});