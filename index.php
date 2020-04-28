<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>PHP Charts</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    </head>
    <body>
        <div class="container">
            <label for="level">Scegli un livello di accesso:</label>

            <select id="level">
                <option value="guest">Guest</option>
                <option value="employee">Employee</option>
                <option value="clevel">Clevel</option>
            </select>

            <button id="button" type="button" name="button">VAI</button>
        </div>

        <div id="graph">
            <div class="container">
                <canvas id="line-chart"></canvas>
            </div>
            <div class="container">
                <canvas id="pie-chart"></canvas>
            </div>
            <div class="container">
                <canvas id="multiline-chart"></canvas>
            </div>
        </div>

        <script src="js/mainapp.js" charset="utf-8"></script>
    </body>
</html>
