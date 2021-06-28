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

function showUnsur(element) {
    return  `<div class="element" style="grid-row: ${element.ypos}; grid-column: ${
                element.xpos
                }; border-color: ${colorMap[element.category]}" 
                data-toggle="modal" data-target="#elementModal" data-id="${element.number}">
                ${element.symbol}
            </div>`
}


function showDetailUnsur(element) {

    let golongan = ``
    if (element.ypos <= 7) {
        if (3 <= element.xpos && element.xpos <= 12) {
            if (element.xpos === 11 || element.xpos === 12) {
                golongan += `<li class="list-group-item"><strong>Gol : </strong>${element.xpos - 10}B</li>`
            } else if(element.xpos === 8 || element.xpos === 9 || element.xpos === 10){
                golongan += `<li class="list-group-item"><strong>Gol : </strong>8B</li>`
            } else {
                golongan += `<li class="list-group-item"><strong>Gol : </strong>${element.xpos}B</li>`
            }
        } else if (element.xpos >= 13) {
            golongan += `<li class="list-group-item"><strong>Gol : </strong>${element.xpos - 10}A</li>`
        } else {
            golongan += `<li class="list-group-item"><strong>Gol : </strong>${element.xpos}A</li>`
        }
    } else {
        golongan += `<li class="list-group-item"><strong>Gol : </strong>3B</li>`
    }
    return `<ul class="list-group">
                <li class="list-group-item"><h4>${element.symbol}</h4></li>
                <li class="list-group-item"><strong>Name : </strong>${element.name}</li>
                <li class="list-group-item"><strong>Number : </strong>${element.number}</li>
                ${golongan}
                <li class="list-group-item"><strong>Period : </strong>${element.period}</li>
                <li class="list-group-item"><strong>Atomic mass : </strong>${element.atomic_mass} u</li>
                <li class="list-group-item"><strong>Phase : </strong>${element.phase}</li>
                <li class="list-group-item"><strong>Category : </strong>${element.category}</li>
                <li class="list-group-item"><strong>Appearance : </strong>${element.appearance}</li>
                <li class="list-group-item"><strong>Discovered by : </strong>${element.discovered_by}</li>
                <li class="list-group-item"><strong>Summary : </strong><br>${element.summary}</li>
            </ul>`
}

$.ajax({
    url: "PeriodicTableJSON.json",
    success:(data)=> {
        let elements = data.elements
        let kotakUnsur = ``

        elements.forEach((element)=> {
            kotakUnsur += showUnsur(element)
        })

        $('#periodic-table').html(kotakUnsur)

        $('.element').on('click', function() {
            $.ajax({
                url: 'PeriodicTableJSON.json',
                success:(data)=>{
                    const elements = data.elements
                    // console.log($(this).data('id'))
                    const element = elements.filter((el)=>{
                        return el.number == $(this).data('id')
                    })[0]

                    let modalDetail = showDetailUnsur(element)
                    
                    console.log(element.name)

                    $('.detail-isi').html(modalDetail)
                }
            })
        })

    },
    error:(e)=> {
        console.log(e.responseText)
    }
})

