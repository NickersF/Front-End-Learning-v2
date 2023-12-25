import { Application } from "./application";

// let currentPath = window.location.pathname;
// let currentPage = window.location.pathname;

// console.log(currentPath);
// console.log(currentPage);

// if (currentPage.includes("index")) {
//     console.log(currentPage);
// }

class Main<T> {
    public app: T;

    constructor(application: new () => T) {
        this.app = new application();
    }

    public start(): void {
        console.log("Starting the application...");
        console.log(this);
    }
}

let main = new Main(Application);

main.start();
main.app.init("NewApp");