$(document).ready(function () {

    $.ajax({
        url: "server.php",
        method: "GET",
        success: function (data) {
            //console.log(data);
            var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre"];
            var ctx = $('#line-chart');
            var chart = new Chart(ctx, {

            type: data.fatturato.type,

            data: {
                labels: mesi,
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data.fatturato.data
                }]
            }
        });
        },
        error: function () {
            alert("Errore");
        }
    })

    $.ajax({
        url: "server.php",
        method: "GET",
        success: function (data) {
            //console.log(data.fatturato_by_agent.data);
            var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre"];
            var ctx = $('#pie-chart');
            var chart = new Chart(ctx, {

            type: data.fatturato_by_agent.type,

            data: {
                labels: Object.keys(data.fatturato_by_agent.data),
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: Object.values(data.fatturato_by_agent.data),
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
        },
        error: function () {
            alert("Errore");
        }
    })
});
