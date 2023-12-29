export class MainLayoutEx1 {
    // Main layout element cache
    private _root: JQuery<HTMLElement>;
    private _mainLayoutRoot: JQuery<HTMLElement>;
    private _mainLayoutHeader: JQuery<HTMLElement>;
    private _mainLayoutContainer: JQuery<HTMLElement>;
    private _mainLayoutSidebar: JQuery<HTMLElement>;
    private _mainLayoutSidebarHeightSetter: JQuery<HTMLElement>;
    private _mainLayoutContent: JQuery<HTMLElement>;
    private _mainLayoutContentHeightSetter: JQuery<HTMLElement>;
    private _mainLayoutFooter: JQuery<HTMLElement>;

    // Dev control element cache
    private _devControlSidebar: JQuery<HTMLElement>;
    private _devControlSidebarWidthLabel: JQuery<HTMLElement>;
    private _devControlSidebarHeightLabel: JQuery<HTMLElement>;
    private _devControlSidebarHeightRangeInput: JQuery<HTMLInputElement>;

    private _devControlContent: JQuery<HTMLElement>;
    private _devControlContentWidthLabel: JQuery<HTMLElement>;
    private _devControlContentHeightLabel: JQuery<HTMLElement>;
    private _devControlContentHeightRangeInput: JQuery<HTMLInputElement>;

    constructor () {
        this._root = $("body");
        this._mainLayoutRoot = $("#MainLayout_Root");
        this._mainLayoutHeader = $("#MainLayout_Header");
        this._mainLayoutContainer = $("#MainLayout_Container");
        this._mainLayoutSidebar = $("#MainLayout_Sidebar");
        this._mainLayoutSidebarHeightSetter = $("#MainLayout_Sidebar_Height_Setter");
        this._mainLayoutContent = $("#MainLayout_Content");
        this._mainLayoutContentHeightSetter = $("#MainLayout_Content_Height_Setter");
        this._mainLayoutFooter = $("#MainLayout_Footer");

        this._devControlSidebar = $("#DevControl_Sidebar");
        this._devControlSidebarWidthLabel = $("#DevControl_Sidebar_WidthLabel");
        this._devControlSidebarHeightLabel = $("#DevControl_Sidebar_HeightLabel");
        this._devControlSidebarHeightRangeInput = $("#DevControl_Sidebar_HeightRangeInput");

        this._devControlContent = $("#DevControl_Content");
        this._devControlContentWidthLabel = $("#DevControl_Content_WidthLabel");
        this._devControlContentHeightLabel = $("#DevControl_Content_HeightLabel");
        this._devControlContentHeightRangeInput = $("#DevControl_Content_HeightRangeInput");
    }

    public init(): void {
        
    }

    public initDevControls(): void {
        // Set the width label initial values
        this._devControlSidebarWidthLabel.text(`${this._mainLayoutSidebar.width()}px`);
        this._devControlContentWidthLabel.text(`${this._mainLayoutContent.width()}px`);

        $(window).on("resize", () => {
            this._devControlSidebarWidthLabel.text(`${this._mainLayoutSidebar.width()}px`);
            this._devControlContentWidthLabel.text(`${this._mainLayoutContent.width()}px`);
        });

        // Set the sidebar height range slider initial value
        this._devControlSidebarHeightLabel.text(`${this._mainLayoutSidebarHeightSetter.height()}px`)
        this._devControlSidebarHeightRangeInput.val(0);

        this._devControlSidebarHeightRangeInput.on("input", (e) => {
            this._mainLayoutSidebarHeightSetter.height(e.target.value);
            this._devControlSidebarHeightLabel.text(`${this._mainLayoutSidebarHeightSetter.height()}px`);
        });

        // Set the content height range slider initial value
        this._devControlContentHeightLabel.text(`${this._mainLayoutContentHeightSetter.height()}px`);
        this._devControlContentHeightRangeInput.val(0);

        this._devControlContentHeightRangeInput.on("input", (e) => {
            this._mainLayoutContentHeightSetter.height(e.target.value);
            this._devControlContentHeightLabel.text(`${this._mainLayoutContentHeightSetter.height()}px`);
        });
    }
}