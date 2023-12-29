export class Application {
    public name: string;

    constructor() {
    }

    init(name: string) {
        this.name = name;
        console.log(`Initializing ${this.name}...`);
    }
}