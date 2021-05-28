$(document).ready(function() {
    // GOL 1B
    $("#tombol-gol-1b").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
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
                if (element.xpos === 11 && element.ypos <= 7) {
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
    $("#tombol-gol-2b").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
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
                if (element.xpos === 12 && element.ypos <= 7) {
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


    // GOL 3B
    $("#tombol-gol-3b").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
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
                if (element.xpos === 3 && element.ypos <= 7) {
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

    // GOL 4B
    $("#tombol-gol-4b").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
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
                if (element.xpos === 4 && element.ypos <= 7) {
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

    // GOL 5B
    $("#tombol-gol-5b").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
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
                if (element.xpos === 5 && element.ypos <= 7) {
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

    // GOL 6B
    $("#tombol-gol-6b").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
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
                if (element.xpos === 6 && element.ypos <= 7) {
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

    // GOL 7B
    $("#tombol-gol-7b").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
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
                if (element.xpos === 7 && element.ypos <= 7) {
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

    // GOL 8B
    $("#tombol-gol-8b").click(function() {
        $(".konten-gua").empty();

        $(".konten-gua").append(
            `
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
                if ((element.xpos === 8 || element.xpos === 9 || element.xpos === 10) && element.ypos <= 7) {
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