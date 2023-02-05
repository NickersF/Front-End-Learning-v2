declare var ZINDEX: Boolean;

export default class ZindexSandbox {
    private static _instance: ZindexSandbox;
    // Boxes
    blueBoxEl = $("#BlueBox");
    orangeBoxEl = $("#OrangeBox");
    purpleBoxEl = $("#PurpleBox");
    // Inputs that control boxes
    blueBoxZindexNumericInput = $("#BlueBoxZindex_InputNumber");
    blueBoxOpacityRangeInput = $("#BlueBoxOpacity_Range");
    orangeBoxZindexNumericInput = $("#OrangeBoxZindex_InputNumber");
    orangeBoxOpacityRangeInput = $("#OrangeBoxOpacity_Range");
    purpleBoxZindexNumericInput = $("#PurpleBoxZindex_InputNumber");
    purpleBoxOpacityRangeInput = $("#PurpleBoxOpacity_Range");

    static getInstance() {
        if (!this._instance) {
            this._instance = new ZindexSandbox();
        }

        return this._instance;
    }

    setup() {
        let self = this;

        self.changeZindexEvent(self.blueBoxZindexNumericInput, self.blueBoxEl);
        self.changeOpacityEvent(self.blueBoxOpacityRangeInput, self.blueBoxEl);

        self.changeZindexEvent(self.orangeBoxZindexNumericInput, self.orangeBoxEl);
        self.changeOpacityEvent(self.orangeBoxOpacityRangeInput, self.orangeBoxEl);

        self.changeZindexEvent(self.purpleBoxZindexNumericInput, self.purpleBoxEl);
        self.changeOpacityEvent(self.purpleBoxOpacityRangeInput, self.purpleBoxEl);
    }

    // Generic function that binds an event to a provided JQuery Element.
    changeZindexEvent(numericInputEl: JQuery<HTMLElement>, cssTargetEl: JQuery<HTMLElement>): void {
        numericInputEl.on("change", (e) => {
            cssTargetEl.css("z-index", $(e.target).val() as number);
        });
    }

    // Generic function that binds and event to a provided JQuery 
    changeOpacityEvent(rangeSliderInputEl: JQuery<HTMLElement>, cssTargetEl: JQuery<HTMLElement>): void {
        rangeSliderInputEl.on("input", (e) => {
            cssTargetEl.css("opacity", $(e.target).val() as number);
        });
    }
}

jQuery(() => {
    try {
        if (ZINDEX) {
            ZindexSandbox.getInstance().setup();
        }
    } catch (error) {
        
    }
});