$(document).ready(function() {

    // GOL IA
    $("#tombol-gol-1a").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
            <h1 class="h4 text-gray-800 text-center">Golongan 1A</h1>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Periode</th>
                        <th>Sifat</th>
                        <th>Kategori</th>
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
                if (element.xpos === 1 && element.ypos <= 7) {
                    $('tbody').append(
                        `
                        <tr>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                        </tr>
                        `
                    )
                }
            })
        })
    });

    // GOL 2A
    $("#tombol-gol-2a").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
            <h1 class="h4 text-gray-800 text-center">Golongan 2A</h1>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Periode</th>
                        <th>Sifat</th>
                        <th>Kategori</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>   
            `
        )

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            console.log(elements)
            $.each(elements, function(i, element) {
                if (element.xpos === 2 && element.ypos <= 7) {
                    $('tbody').append(
                        `
                        <tr>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                        </tr>
                        `
                    )
                }
            })
        })
    });


    // GOL 3A
    $("#tombol-gol-3a").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
            <h1 class="h4 text-gray-800 text-center">Golongan 3A</h1>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Periode</th>
                        <th>Sifat</th>
                        <th>Kategori</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>   
            `
        )

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            console.log(elements)
            $.each(elements, function(i, element) {
                if (element.xpos === 13 && element.ypos <= 7) {
                    $('tbody').append(
                        `
                        <tr>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                        </tr>
                        `
                    )
                }
            })
        })
    });

    // GOL 4A
    $("#tombol-gol-4a").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
            <h1 class="h4 text-gray-800 text-center">Golongan 4A</h1>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Periode</th>
                        <th>Sifat</th>
                        <th>Kategori</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>   
            `
        )

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            console.log(elements)
            $.each(elements, function(i, element) {
                if (element.xpos === 14 && element.ypos <= 7) {
                    $('tbody').append(
                        `
                        <tr>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                        </tr>
                        `
                    )
                }
            })
        })
    });

    // GOL 5A
    $("#tombol-gol-5a").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
            <h1 class="h4 text-gray-800 text-center">Golongan 5A</h1>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Periode</th>
                        <th>Sifat</th>
                        <th>Kategori</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>   
            `
        )

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            console.log(elements)
            $.each(elements, function(i, element) {
                if (element.xpos === 15 && element.ypos <= 7) {
                    $('tbody').append(
                        `
                        <tr>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                        </tr>
                        `
                    )
                }
            })
        })
    });

    // GOL 6A
    $("#tombol-gol-6a").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
            <h1 class="h4 text-gray-800 text-center">Golongan 6A</h1>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Periode</th>
                        <th>Sifat</th>
                        <th>Kategori</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>   
            `
        )

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            console.log(elements)
            $.each(elements, function(i, element) {
                if (element.xpos === 16 && element.ypos <= 7) {
                    $('tbody').append(
                        `
                        <tr>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                        </tr>
                        `
                    )
                }
            })
        })
    });

    // GOL 7A
    $("#tombol-gol-7a").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
            <h1 class="h4 text-gray-800 text-center">Golongan 7A</h1>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Periode</th>
                        <th>Sifat</th>
                        <th>Kategori</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>   
            `
        )

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            console.log(elements)
            $.each(elements, function(i, element) {
                if (element.xpos === 17 && element.ypos <= 7) {
                    $('tbody').append(
                        `
                        <tr>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                        </tr>
                        `
                    )
                }
            })
        })
    });

    // GOL 8A
    $("#tombol-gol-8a").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
            <h1 class="h4 text-gray-800 text-center">Golongan 8A</h1>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Periode</th>
                        <th>Sifat</th>
                        <th>Kategori</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>   
            `
        )

        $.getJSON("PeriodicTableJSON.json", function(data) {
            let elements = data.elements
            console.log(elements)
            $.each(elements, function(i, element) {
                if (element.xpos === 18 && element.ypos <= 7) {
                    $('tbody').append(
                        `
                        <tr>
                            <td>${element.symbol}</td>
                            <td>${element.name}</td>
                            <td>${element.number}</td>
                            <td>${element.period}</td>
                            <td>${element.phase}</td>
                            <td>${element.category}</td>
                        </tr>
                        `
                    )
                }
            })
        })
    });

});