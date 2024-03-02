export class ResizeableContainerEx2 {
    public rootContainer: JQuery<HTMLElement>;
    public resizeableTop: JQuery<HTMLElement>;
    public resizableBottom: JQuery<HTMLElement>;
    
    constructor () {
        this.rootContainer = $(".lay-ex2-root-container");
        this.resizeableTop = $(".lay-ex2-top-row");
        this.resizableBottom = $(".lay-ex2-bottom-row");
    }
    
    public init(): void {
        let isResizing = false;
        
        this.resizeableTop.on("mousedown", (e) => {
            isResizing = true;
            
            $(document).on("mousemove", (e) => {
                if (isResizing) {
                  this.resizeableTop.height(e.pageY);
                  this.resizableBottom.height(this.rootContainer.height() - e.pageY);
                }
            });
        });
        
        $(document).on("mouseup", (e) => {
            isResizing = false;
        });
    }
}