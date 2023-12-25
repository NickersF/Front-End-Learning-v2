import { IndexController } from ".";
import { Application } from "./application";

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
        console.log(this);
        let currentPath = window.location.pathname;

        this.dispatchModuleLoad(currentPath)
    }

    public dispatchModuleLoad(currentPath: string): void {
        if (currentPath.includes("index")) {
            let indexController = new IndexController();
        }
    }
}

// Run the app - using an empty additional app here for testing
let main = new Main(Application);

main.start();