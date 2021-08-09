import { generateStepNames, buildBackgroundColorElements } from "./color_gen";

const siteColorPalette = [
    "light-green",
    "light-blue",
    "light-yellow",
    "bluegray-dark",
    "bluegrey-medium",
    "bluegrey-light",
    "bluegrey-lightest",
];

const openSansFontWeightValues = [
    "light",
    "regular-italic",
    "regular",
    "bold",
    "extrabold"
]

const poppinsFontWeightValues = [
    "regular",
    "bold",
    "black"
]

export function styleGuideSetup() {
    buildBackgroundColorElements(siteColorPalette, "ColorPaletteWrapper");
    buildTypeExampleElements(openSansFontWeightValues, "TypeExampleWrapper", "Open Sans Sample", "open-sans");
    buildTypeExampleElements(poppinsFontWeightValues, "TypeExampleWrapper", "Poppins Sample", "poppins");
}

export function buildTypeExampleElements(fontWeightValues: Array<string>, parentEl: string, exText: string, targetFontFamily: string) {

    if (targetFontFamily == "open-sans") {
        for (let index = 0; index < fontWeightValues.length; index++) {
            let $typeExEls = $("<div class='" + targetFontFamily + "-" + fontWeightValues[index] + "'></div>");
            $typeExEls.text(exText);
            $("#" + parentEl).append($typeExEls);
        }
    }

    if (targetFontFamily == "poppins") {
        for (let index = 0; index < fontWeightValues.length; index++) {
            let $typeExEls = $("<div class='" + targetFontFamily + "-" + fontWeightValues[index] + "'></div>");
            $typeExEls.text(exText);
            $("#" + parentEl).append($typeExEls);
        }
    }
    
}