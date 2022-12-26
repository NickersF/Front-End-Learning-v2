declare var PAGE_1: Boolean;

export default class Page1 {

    private static _instance: Page1;

    static getInstance() {
        if (!this._instance) {
            this._instance = new Page1();
        }

        return this._instance;
    }

    setup() {
        this.page1Click();
    }

    page1Click() {
        const buttonEl = document.getElementById("Page1_Btn");

        console.dir(buttonEl); // Use console.dir to get the DOM object.

        buttonEl.addEventListener("click", (e) => {
            console.log(e);
            console.log(e.currentTarget);
        });

        // $("#Page1_Btn").on("click", (e) => {
        //     console.log(e);
        // });
    }
}

jQuery(() => {
    try {
        if (PAGE_1) {
            Page1.getInstance().setup();
        }
    } catch (error) {
        
    }
});