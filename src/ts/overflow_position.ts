const MAX_LEFT = -256;
const MAX_RIGHT = 256;

// Range input scrolling of elements with overflow hidden
export function EchoSlider() {
    let positionSlider = $("#PositionRange");
    let textElementToMove = $("#TextToMove");
    let currentSliderValue;
    
    positionSlider.on("input", function () {
        currentSliderValue = positionSlider.val().toString() + "px";
        textElementToMove.css("left", currentSliderValue)
        $("#SliderValue").text("Current deltaY: " + currentSliderValue);
    });
}

// Mouse wheel scrolling of elements with overflow hidden
export function ScrollEventExample() {
    let mouseWheelScrollBox = $("#MouseWheelScrollBox");
    let textElementToMove01 = $("#TextToMove01");
    let scrollNotice = $("#ScrollNotice");
    let currentDeltaY = 0;

    mouseWheelScrollBox.on("mousewheel", function(e) {

        // Cast the event as a WheelEvent to expose deltaY property
        let wheelEvent = e.originalEvent as WheelEvent;

        if (wheelEvent.deltaY == 100 && currentDeltaY > MAX_LEFT) {
            currentDeltaY--
            textElementToMove01.css("left", currentDeltaY);
            scrollNotice.text("Element moved: " + currentDeltaY + "px to the left.");
        }

        if (wheelEvent.deltaY == -100 && currentDeltaY < MAX_RIGHT) {
            currentDeltaY++
            textElementToMove01.css("left", currentDeltaY);
            scrollNotice.text("Element moved: " + currentDeltaY + "px to the right.");
        }
    });
}

export function DragEventExample() {
    let dragParaEl = $("#DragParaEl");
    let dragNotice = $("#DragNotice");
    let dragCount = 0;

    dragParaEl.on("drag", function() {
        dragCount++;
        dragNotice.text("Drag event fired: " + dragCount + " times.");
    });
}