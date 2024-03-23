interface Point2D {
    x: number | undefined;
    y: number | undefined;
}

interface Triangle {
    vertexA: Point2D | undefined;
    vertexC: Point2D | undefined;
    vertexB: Point2D | undefined;
}

export class CanvasApp {
    private _canvasEl: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    constructor(canvasElId: string) {
        this._canvasEl = <HTMLCanvasElement>document.getElementById(canvasElId);
        this._ctx = this._canvasEl.getContext("2d");
    }

    public drawRect(): void {
        this._ctx.fillRect(32, 32, 64, 64);
    }

    public drawTri(): void {
        let triangle: Triangle = {
            vertexA: { x: 0, y: 32 },
            vertexB: { x: 32, y: 0},
            vertexC: { x: 64, y: 32}
        }

        this._ctx.beginPath();
        this._ctx.moveTo(triangle.vertexA.x, triangle.vertexA.y);
        this._ctx.lineTo(triangle.vertexB.x, triangle.vertexB.y);
        this._ctx.lineTo(triangle.vertexC.x, triangle.vertexC.y);
        this._ctx.closePath();
        this._ctx.stroke();
    }
}