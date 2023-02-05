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

        self.blueBoxZindexChangeValue();
        self.blueBoxOpacityInputValue();

        self.orangeBoxZindexChangeValue();
        self.orangeBoxOpacityInputValue()

        self.purpleBoxZindexChangeValue();
        self.purpleBoxOpacityInputValue();
    }

    // Generic function that binds an event to a provided JQuery Element.
    changeZindexEvent(numericInputEl: JQuery<HTMLElement>) {

    }

    // Generic function that binds and event to a provided JQuery 
    changeOpacityEvent(rangeSliderInputEl: JQuery<HTMLElement>) {

    }

    blueBoxZindexChangeValue() {
        let self = this;

        self.blueBoxZindexNumericInput.on("change", (e) => {
            self.blueBoxEl.css("z-index", $(e.target).val() as number);
        });
    }

    blueBoxOpacityInputValue() {
        let self = this;

        self.blueBoxOpacityRangeInput.on("input", (e) => {
            self.blueBoxEl.css("opacity", $(e.target).val() as number);
        });
    }

    orangeBoxZindexChangeValue() {
        let self = this;

        self.orangeBoxZindexNumericInput.on("change", (e) => {
            self.orangeBoxEl.css("z-index", $(e.target).val() as number);
        });
    }

    orangeBoxOpacityInputValue() {
        let self = this;

        self.orangeBoxOpacityRangeInput.on("input", (e) => {
            self.orangeBoxEl.css("opacity", $(e.target).val() as number);
        });
    }

    purpleBoxZindexChangeValue() {
        let self = this;

        self.purpleBoxZindexNumericInput.on("change", (e) => {
            self.purpleBoxEl.css("z-index", $(e.target).val() as number);
        });
    }

    purpleBoxOpacityInputValue() {
        let self = this;

        self.purpleBoxOpacityRangeInput.on("input", (e) => {
            self.purpleBoxEl.css("opacity", $(e.target).val() as number);
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