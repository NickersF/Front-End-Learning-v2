export class Application {
    public name: string;

    constructor() {
        this.init("FrontEndLearning");
    }

    init(name: string) {
        this.name = name;
        console.log(`Initializing ${this.name}...`);
    }
}