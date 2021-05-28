$.getJSON("PeriodicTableJSON.json", function(data) {
    let elements = data.elements;

    const colorMap = {
        "noble gas": "#FFBC42",
        "alkaline earth metal": "#EC674E",
        "diatomic nonmetal": "#D81159",
        "alkali metal": "#8F2D56",
        "transition metal": "#58586B",
        "post-transition metal": "#218380",
        "lanthanide": "#4AABAF",
        "metalloid": "#73D2DE",
    };

    $.each(elements, function(i, element) {
        $("#periodic-table").append(
            `           
            <div class="element" style="grid-row: ${element.ypos}; grid-column: ${
                element.xpos
                }; border-color: ${colorMap[element.category]}" 
                data-toggle="modal" data-target="#elementModal" data-id="${element.number}">
                ${element.symbol}
                <span>${element.ypos}</span>
            </div>
            `
        );

    });

});


$(document).ready(function() {
    $('#periodic-table').on('click', '.element', function() {

        console.log($(this).data('id'))

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            // console.log(elements)
            $.each(elements, function(i, element) {
                if (element.number == $(this).data('id')) {
                    console.log(element.symbol)
                }
            })
        })

    })
})