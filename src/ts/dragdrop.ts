declare var DRAGDROP: Boolean;

export default class DragDrop {

    private static _instance: DragDrop;

    static getInstance() {
        if (!this._instance) {
            this._instance = new DragDrop();
        }

        return this._instance;
    }

    setup() {
        console.log(this);
        this.dragParagraphElement();
        this.dropDivElementA();
        this.dropDivElementB();
    }

    dragParagraphElement() {
        const element = document.getElementById("DragMe");

        element.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("application/my-app", (e.target as HTMLElement).id);
            e.dataTransfer.effectAllowed = "move";
            console.log(e.dataTransfer);
        })
    }

    dropDivElementA() {
        const element = document.getElementById("TargetA");

        element.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
        });

        element.addEventListener("drop", (e) => {
            console.log(e);

            e.preventDefault();

            const data = e.dataTransfer.getData("application/my-app");

            console.log(data);

            (e.target as HTMLElement).appendChild(document.getElementById(data));
        });
    }

    dropDivElementB() {
        const element = document.getElementById("TargetB");

        element.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
        });

        element.addEventListener("drop", (e) => {
            console.log(e);

            e.preventDefault();

            const data = e.dataTransfer.getData("application/my-app");

            console.log(data);

            (e.target as HTMLElement).appendChild(document.getElementById(data));
        });
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