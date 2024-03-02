export class IndexController {
    private _root;

    constructor() {
        this._root = $("body");
    }

    public printRoot(): void {
        let a = 1;
        let b = 2;
        let sum = a + b;

        console.log(this._root);
    }
}