export class CanvasApp {
    private _canvasEl: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    constructor(canvasElId: string) {
        this._canvasEl = <HTMLCanvasElement>document.getElementById(canvasElId);
        this._ctx = this._canvasEl.getContext("2d");

        console.log(this._canvasEl);
        console.log(this._ctx);
    }
}