import { data } from "jquery";

declare var AJAX_TEXT: Boolean;

export default class AjaxTest {

    private static _instance: AjaxTest;
    testString: string = "";
    testVM = {
        "id": "number",
        "Name:": "string",
    }

    createCompositeInterface<Base, Composite>(baseProperties: Base, compositeProperties: Composite) {
        return { ...baseProperties, ...compositeProperties } as Base & Composite;
    }

    baseProperties = {
        createdDate: 'Date',
        updatedDate: 'Date',
        userKey: 'string',
        tenantKey: 'string'
    };

    compositeProperties = {
        employeeName: 'string',
        activity: 'string',
        startDate: 'Date',
        payRate: 'number'
    };

    NewCompositeInterface = this.createCompositeInterface<any, any>(this.baseProperties, this.compositeProperties);


    static getInstance() {
        if (!this._instance) {
            this._instance = new AjaxTest();
        }

        return this._instance;
    }

    setup() {

        console.log(this);
        console.log(this.NewCompositeInterface);

        this.getTextFileContents();
    }


    getTextFileContents() {
        $.ajax({
            //type: "GET",
            url: "ajax_text.txt",
            dataType: "text"
        }).done((data) => {
            console.log(data);

            $("#AjaxResult").text(data);
        });
    }
}

jQuery(() => {
    try {
        if (AJAX_TEXT) {
            AjaxTest.getInstance().setup();
        }
    } catch (error) {

    }
});