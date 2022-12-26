declare var PAGE_2: Boolean;

export default class Page2 {

    private static _instance: Page2;

    static getInstance() {
        if (!this._instance) {
            this._instance = new Page2();
        }

        return this._instance;
    }

    testFn() {
        console.log("Page 2 controller loaded.");
        console.log(document.URL);
    }
}

jQuery(() => {
    try {
        if (PAGE_2) {
            Page2.getInstance().testFn();
        }
    } catch (error) {

    }
});