import { IndexController } from ".";
import { Application } from "./application";
import { MainLayoutEx1 } from "./layouts/lay-ex1";
import {ResizeableContainerEx2} from "./layouts/lay-ex2";

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
            indexController.printRoot();
        }

        if (currentPath.includes("lay_ex1")) {
            let mainLayoutEx1 = new MainLayoutEx1();
            mainLayoutEx1.init();
            mainLayoutEx1.initDevControls();
        }

        if(currentPath.includes("lay_ex2")) {
            let resizeableContainerEx2 = new ResizeableContainerEx2();
            resizeableContainerEx2.init();
        }
    }
}

// Run the app - using an empty additional app here for testing
let main = new Main(Application);

main.start();