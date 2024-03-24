export interface Point2D {
    x: number | undefined;
    y: number | undefined;
}

export interface Rectangle {
    x: number | undefined;
    y: number | undefined;
    width: number | undefined;
    height: number | undefined;
}

export interface Triangle {
    vertexA: Point2D | undefined;
    vertexC: Point2D | undefined;
    vertexB: Point2D | undefined;
}

export class CanvasApp {
    private _canvasEl: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _rectangleBuffer: Rectangle[];
    private _draggedRectangle: Rectangle | null;
    private _offsetX: number;
    private _offsetY: number;

    constructor(canvasElId: string) {
        this._canvasEl = <HTMLCanvasElement>document.getElementById(canvasElId);
        this._ctx = this._canvasEl.getContext("2d");
        this._rectangleBuffer = [];
        this._draggedRectangle = null;
        this._offsetX = 0;
        this._offsetY = 0;

        this._canvasEl.addEventListener("mousedown", this._onMouseDown.bind(this));
        this._canvasEl.addEventListener("mousemove", this._onMouseMove.bind(this));
        this._canvasEl.addEventListener("mouseup", this._onMouseUp.bind(this));
    }

    public addRectangle( rect: Rectangle): void {
        this._rectangleBuffer.push(rect);
    }

    public drawRectangles(): void {
        this._clearCanvas();
        this.drawGrid(16);
        this._rectangleBuffer.forEach(rect => {
            this._ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        });
    }

    public getRectangles(): Rectangle[] {
        return this._rectangleBuffer;
    }

    private _onMouseDown(e: MouseEvent): void {
        let rectActive = this._getRectangleAtPosition(e.offsetX, e.offsetY);

        if (rectActive) {
            this._draggedRectangle = rectActive;
            this._offsetX = e.offsetX - rectActive.x;
            this._offsetY = e.offsetY - rectActive.y;
        }
    }

    private _onMouseMove(e: MouseEvent): void {
        if (this._draggedRectangle) {
            this._draggedRectangle.x = e.offsetX - this._offsetX;
            this._draggedRectangle.y = e.offsetY - this._offsetY;
            this.drawRectangles();
        }
    }

    private _onMouseUp(): void {
        this._draggedRectangle = null;
    }

    private _getRectangleAtPosition(x: number, y: number): Rectangle | null {
        for (let i = this._rectangleBuffer.length - 1; i >= 0; i--) {
            let rect  = this._rectangleBuffer[i];

            if (x >= rect.x &&
                x <= rect.x + rect.width &&
                y >= rect.y &&
                y <= rect.y + rect.height
            ) {
                return rect;
            }
        }

        return null;
    }

    private _clearCanvas(): void {
        this._ctx.clearRect(0, 0, this._canvasEl.width, this._canvasEl.height);
    }

    public drawLines(): void {
        let canvasWidth = this._canvasEl.width;
        let canvasHeight = this._canvasEl.height;

        this._ctx.beginPath();
        this._ctx.moveTo(16, 0);
        this._ctx.lineTo(16, canvasHeight);
        this._ctx.closePath();
        this._ctx.stroke();

        this._ctx.beginPath();
        this._ctx.moveTo(32, 0);
        this._ctx.lineTo(32, canvasHeight);
        this._ctx.closePath();
        this._ctx.stroke();

        this._ctx.beginPath();
        this._ctx.moveTo(48, 0);
        this._ctx.lineTo(48, canvasHeight);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    public drawGrid(step: number): void {
        let canvasWidth = this._canvasEl.width;
        let canvasHeight = this._canvasEl.height;
        let gridStep: number = step;
        let gridFillX: number = 0;
        let gridFillY: number = 0;

        while (gridFillX < canvasWidth && gridFillY < canvasHeight) {
            this._ctx.beginPath();
            this._ctx.moveTo(gridFillX, 0);
            this._ctx.lineTo(gridFillX, canvasHeight);
            this._ctx.closePath();
            this._ctx.stroke();

            gridFillX += gridStep;

            this._ctx.beginPath();
            this._ctx.moveTo(0, gridFillY);
            this._ctx.lineTo(canvasWidth, gridFillY);
            this._ctx.closePath();
            this._ctx.stroke();

            gridFillY += gridStep;
        }

        // this._ctx.beginPath();
        // this._ctx.moveTo(16, 0);
        // this._ctx.lineTo(16, canvasHeight);
        // this._ctx.closePath();
        // this._ctx.stroke();
        //
        // this._ctx.beginPath();
        // this._ctx.moveTo(32, 0);
        // this._ctx.lineTo(32, canvasHeight);
        // this._ctx.closePath();
        // this._ctx.stroke();
        //
        // this._ctx.beginPath();
        // this._ctx.moveTo(48, 0);
        // this._ctx.lineTo(48, canvasHeight);
        // this._ctx.closePath();
        // this._ctx.stroke();

        // this._ctx.beginPath();
        // this._ctx.moveTo(0, 16);
        // this._ctx.lineTo(canvasWidth, 16);
        // this._ctx.closePath();
        // this._ctx.stroke();
        //
        // this._ctx.beginPath();
        // this._ctx.moveTo(0, 32);
        // this._ctx.lineTo(canvasWidth, 32);
        // this._ctx.closePath();
        // this._ctx.stroke();
        //
        // this._ctx.beginPath();
        // this._ctx.moveTo(0, 48);
        // this._ctx.lineTo(canvasWidth, 48);
        // this._ctx.closePath();
        // this._ctx.stroke();
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

    public drawArc(): void {
        
    }
}