declare var RADIALMENU: Boolean;

export default class RadialMenuComponent {

    private static _instance: RadialMenuComponent;

    static getInstance() {
        if (!this._instance) {
            this._instance = new RadialMenuComponent();
        }

        return this._instance;
    }

    setup() {
        console.log("test");
    }
}

jQuery(() => {
    try {
        if (RADIALMENU) {
            RadialMenuComponent.getInstance().setup();
        }
    } catch (error) {
        
    }
});