export function SelectInputFn() {
    $(function() {
        let selectItemsData = {
            "1": "Red",
            "2": "Green",
            "3": "Blue",
            "4": "Alpha"
        }
    
        $.each(selectItemsData, function(key, value) {
            let optionsElString = "<option value='" + key + "'>" + value + "</option>";
            $("#SelectColorInput").append(optionsElString);
        });

        for (const key in selectItemsData) {
            let optionsElString = "<option value='" + key + "'>" + selectItemsData[key] + "</option>";
            $("#SelectColorInput").append(optionsElString);
        }
    });
}