// -----------------------------------------------------------------
// GOL A
function templateGolA(gol, no, x) {
    $(`#tombol-gol-${no + gol}`).click(function() {
        $(".konten-gua").empty();
        let nomor = 0
        $(".konten-gua").append(
            `
                <h1 class="h4 text-gray-800 text-center">Golongan ${no + gol}</h1>
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Periode</th>
                            <th>Phase</th>
                            <th>Category</th>
                            <th>Shells</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>   
                `
        )

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            $.each(elements, function(i, element) {
                if (element.xpos === (no + x) && element.ypos <= 7) {
                    nomor++
                    $('tbody').append(
                        `
                        <tr>
                            <td>${nomor}</td>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                            <td>${element.shells}</td>
                        </tr>
                        `
                    )
                }
            })
        })
    });
}

// ------------------------------------------------------------------------------------
// GOL B
function templateGolB(gol, no, x) {
    $(`#tombol-gol-${no + gol}`).click(function() {
        $(".konten-gua").empty();
        let nomor = 0
        $(".konten-gua").append(
            `
            <h1 class="h4 text-gray-800 text-center">Golongan ${no + gol}</h1>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Periode</th>
                        <th>Phase</th>
                        <th>Category</th>
                        <th>Shells</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>   
            `
        )

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            if (no === 8) {
                $.each(elements, function(i, element) {
                    if ((element.xpos === 8 || element.xpos === 9 || element.xpos === 10) && element.ypos <= 7) {
                        nomor++
                        $('tbody').append(
                            `
                        <tr>
                            <td>${nomor}</td>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                            <td>${element.shells}</td>
                        </tr>
                        `
                        )
                    }
                })
            } else {
                $.each(elements, function(i, element) {
                    if (element.xpos === x && element.ypos <= 7) {
                        nomor++
                        $('tbody').append(
                            `
                        <tr>
                            <td>${nomor}</td>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                            <td>${element.shells}</td>
                        </tr>
                        `
                        )
                    }
                })
            }
        })
    });
}