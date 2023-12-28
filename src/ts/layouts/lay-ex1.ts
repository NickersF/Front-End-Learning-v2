export class MainLayoutEx1 {
    // Main layout element cache
    private _root: JQuery<HTMLElement>;
    private _mainLayoutRoot: JQuery<HTMLElement>;
    private _mainLayoutHeader: JQuery<HTMLElement>;
    private _mainLayoutContainer: JQuery<HTMLElement>;
    private _mainLayoutSidebar: JQuery<HTMLElement>;
    private _mainLayoutContent: JQuery<HTMLElement>;
    private _mainLayoutFooter: JQuery<HTMLElement>;

    // Using TS Record utility type
    private _mainLayoutElementCache: Record<string, JQuery<HTMLElement>> = {};

    // Dev control element cache
    private _devControlSidebar: JQuery<HTMLElement>;
    private _devControlSidebarWidthLabel: JQuery<HTMLElement>;
    private _devControlSidebarHeightLabel: JQuery<HTMLElement>;
    private _devControlSidebarHeightRangeInput: JQuery<HTMLInputElement>;

    constructor () {
        this._root = $("body");
        this._mainLayoutRoot = $("#MainLayout_Root");
        this._mainLayoutHeader = $("#MainLayout_Header");
        this._mainLayoutContainer = $("#MainLayout_Container");
        this._mainLayoutSidebar = $("#MainLayout_Sidebar");
        this._mainLayoutContent = $("#MainLayout_Content");
        this._mainLayoutFooter = $("#MainLayout_Footer");

        this._mainLayoutElementCache["root"] = $("body");
        this._mainLayoutElementCache["mainLayoutRoot"] = $("#MainLayout_Root");

        console.log(this);
    }

    public init(): void {
        console.log(this._mainLayoutElementCache["root"]);
    }

    public initDevControls(): void {

    }
}