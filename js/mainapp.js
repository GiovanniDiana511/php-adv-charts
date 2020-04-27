$(document).ready(function () {

    $.ajax({
        url: "server.php",
        method: "GET",
        success: function (data) {
            //console.log(data);
            var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre"];

            getLineChart(data.fatturato.type, mesi, data.fatturato.data);
            getPieChart(data.fatturato_by_agent.type, Object.keys(data.fatturato_by_agent.data), Object.values(data.fatturato_by_agent.data));
        },
        error: function () {
            alert("Errore");
        }
    });

    function getLineChart(type, labels, data) {
        var ctx = $('#line-chart');
        var chart = new Chart(ctx, {

        type: type,

        data: {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
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
