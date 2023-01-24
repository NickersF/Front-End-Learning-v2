declare var DRAGDROP: Boolean;

export default class DragDrop {

    private static _instance: DragDrop;
    testString: string = "";

    static getInstance() {
        if (!this._instance) {
            this._instance = new DragDrop();
        }

        return this._instance;
    }

    setup() {
        
        console.log(this);

        this.printTest();
    }

    printTest() {
        this.testString = "meow"
        console.log("test from drag drop" + this.testString);
    }
}

jQuery(() => {
    try {
        if (DRAGDROP) {
            DragDrop.getInstance().setup();
        }
    } catch (error) {

    }
});