export function generateStepNames(colorNamesArray: Array<string>, numOfSteps: number, baseColor: string) {

    if (numOfSteps < 0 || numOfSteps > 10) {
        return console.log("Invalid color step range provided.");
    }

    for (let index = 0; index < numOfSteps; index++) {
        colorNamesArray.push("fe-" + baseColor + "-0" + index.toString());
    }
}

export function buildBackgroundColorElements(colorNamesArray: Array<string>, parentEl: string) {

    for (let index = 0; index < colorNamesArray.length; index++) {
        let $colorEls = $("<div class='color-demo-box fe-" + colorNamesArray[index] + "-bg'></div>")
        $("#" + parentEl).append($colorEls);
    }
}