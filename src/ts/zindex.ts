declare var ZINDEX: Boolean;

export default class ZindexSandbox {
    private static _instance: ZindexSandbox;

    static getInstance() {
        if (!this._instance) {
            this._instance = new ZindexSandbox();
        }

        return this._instance;
    }

    setup() {
        
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