$(document).ready(function () {

    $('#button').click(function () {
        ajaxCall();
    })

    function ajaxCall() {
        var level = $('#level').val();
        var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre"];

        $.ajax({
            url: "server.php",
                data: {
                level: level
            },
            method: "GET",
            success: function (data) {
                console.log(data);
                $("#graph").html('<div class="container"><canvas id="line-chart"></canvas></div><div class="container"><canvas id="pie-chart"></canvas></div><div class="container"><canvas id="multiline-chart"></canvas></div>');
                if (data.access == "guest") {
                    console.log("ciao guest");
                    getLineChart(data.grafico1.type, mesi, data.grafico1.data);
                }
                if (data.access == "employee") {
                    console.log("ciao employee");
                    getLineChart(data.grafico1.type, mesi, data.grafico1.data);
                    getPieChart(data.grafico2.type, Object.keys(data.grafico2.data), Object.values(data.grafico2.data));
                }
                if (data.access == "clevel") {
                    console.log("ciao clevel");
                    getLineChart(data.grafico1.type, mesi, data.grafico1.data);
                    getPieChart(data.grafico2.type, Object.keys(data.grafico2.data), Object.values(data.grafico2.data));
                    getMultiLineChart(data.grafico3.type, mesi, Object.values(data.grafico3.data.Team1), Object.values(data.grafico3.data.Team2), Object.values(data.grafico3.data.Team3));
                }
            },
            error: function () {
                alert("Errore");
            }
        })
    }
    function getLineChart(type, labels, data) {
        var ctx = $('#line-chart');
        var chart = new Chart(ctx, {

        type: type,

        data: {
            labels: labels,
            datasets: [{
                label: 'Grafico Linea',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]
        }
    });
    }
    function getMultiLineChart(type, labels, datafirst, datasecond, datathird) {
        var ctx = $('#multiline-chart');
        var chart = new Chart(ctx, {

        type: type,

        data: {
            labels: labels,
            datasets: [
            {
                label: 'Team 1',
                borderColor: 'red',
                data: datafirst
            },
            {
                label: 'Team 2',
                borderColor: 'yellow',
                data: datasecond
            },
            {
                label: 'Team 3',
                borderColor: 'green',
                data: datathird
            }]
        }
    });
    }
    function getPieChart(type, labels, data) {
        var ctx = $('#pie-chart');
        var chart = new Chart(ctx, {

        type: type,

        data: {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data,
                backgroundColor: [
                    "green",
                    "blue",
                    "red",
                    "orange"
                ],
                borderColor: [
                    "darkgreen",
                    "darkblue",
                    "darkred",
                    "darkorange"
                ]
            }]
        }
    });
    }

});
