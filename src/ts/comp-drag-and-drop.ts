export class DragDrop {

    private static _instance: DragDrop;

    static getInstance() {
        if (!this._instance) {
            this._instance = new DragDrop();
        }

        return this._instance;
    }

    setup() {
        this.setDragElement("DraggableElement");
        this.setDropZone("DropZone0");
        this.setDropZone("DropZone1");
        this.setDropZone("DropZone2");

        // Hardcoded versions for testing.
        // this.dragElement();
        // this.dropDivElementA();
        // this.dropDivElementB();
    }

    // Binds a general drop item
    setDragElement(elementId: string): void {
        const element = document.getElementById(elementId);

        element.addEventListener("dragstart", (e) => {
            // Try different formats for setData
            // e.dataTransfer.setData("application/my-app", (e.target as HTMLElement).id);
            e.dataTransfer.setData("text/html", (e.target as HTMLElement).id);
            e.dataTransfer.effectAllowed = "move";
        })
    }

    // Configures a general drop zone
    setDropZone(elementId: string) {
        const element = document.getElementById(elementId);

        element.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
        });

        element.addEventListener("drop", (e) => {
            e.preventDefault();
            // Try different formats for setData
            // const data = e.dataTransfer.getData("application/my-app");
            const data = e.dataTransfer.getData("text/html");

            (e.target as HTMLElement).appendChild(document.getElementById(data));
        });
    }

    // dragElement() {
    //     const element = document.getElementById("DragMe");

    //     element.addEventListener("dragstart", (e) => {
    //         // e.dataTransfer.setData("application/my-app", (e.target as HTMLElement).id);
    //         e.dataTransfer.setData("text/html", (e.target as HTMLElement).id);
    //         e.dataTransfer.effectAllowed = "move";
    //     })
    // }

    // dropDivElementA() {
    //     const element = document.getElementById("TargetA");

    //     element.addEventListener("dragover", (e) => {
    //         e.preventDefault();
    //         e.dataTransfer.dropEffect = "move";
    //     });

    //     element.addEventListener("drop", (e) => {
    //         e.preventDefault();
    //         // const data = e.dataTransfer.getData("application/my-app");
    //         const data = e.dataTransfer.getData("text/html");

    //         (e.target as HTMLElement).appendChild(document.getElementById(data));
    //     });
    // }

    // dropDivElementB() {
    //     const element = document.getElementById("TargetB");

    //     element.addEventListener("dragover", (e) => {
    //         e.preventDefault();
    //         e.dataTransfer.dropEffect = "move";
    //     });

    //     element.addEventListener("drop", (e) => {
    //         e.preventDefault();
    //         // const data = e.dataTransfer.getData("application/my-app");
    //         const data = e.dataTransfer.getData("text/html");

    //         (e.target as HTMLElement).appendChild(document.getElementById(data));
    //     });
    // }
    
}