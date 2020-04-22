$(document).ready(function () {

    $.ajax({
        url: "server.php",
        method: "GET",
        success: function (data) {
            var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre"];
            var ctx = $('#line-chart');
            var chart = new Chart(ctx, {
            
            type: 'line',

            data: {
                labels: mesi,
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data
                }]
            }
        });
        },
        error: function () {
            alert("Errore");
        }
    })

});
