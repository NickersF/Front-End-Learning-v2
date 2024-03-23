import {IndexController} from ".";
import {Application} from "./application";
import {MainLayoutEx1} from "./layouts/lay-ex1";
import {ResizeableContainerEx2} from "./layouts/lay-ex2";
import {CanvasApp} from "./canvas/canvas-app";

// Main class
class Main<T> {
    public app: T; // Run an additional application

    constructor(application?: new () => T) {
        if (application !== undefined) {
            this.app = new application();
        }

        return;
    }

    // Main entry point
    public start(): void {
        console.log("Starting the application...");
        let currentPath = window.location.pathname;

        this.dispatchModuleLoad(currentPath)
    }

    public dispatchModuleLoad(currentPath: string): void {
        if (currentPath.includes("index")) {
            let indexController = new IndexController();
        }

        if (currentPath.includes("lay_ex1")) {
            let mainLayoutEx1 = new MainLayoutEx1();
            mainLayoutEx1.init();
            mainLayoutEx1.initDevControls();
        }

        if (currentPath.includes("lay_ex2")) {
            let resizeableContainerEx2 = new ResizeableContainerEx2();
            resizeableContainerEx2.init();
        }

        if (currentPath.includes("canvas_basics")) {
            let canvasAppController = new CanvasApp("CanvasEl");

            canvasAppController.addRectangle({ x: 32, y: 32, width: 64, height: 64 });
            canvasAppController.addRectangle({ x: 128, y: 128, width: 64, height: 64 });
            canvasAppController.drawRectangles();
            //canvasAppController.drawTri();
        }

    }
}

// Run the app - using an empty additional app here for testing
let main = new Main(Application);

main.start();