<?php

    include "database.php";

    header("Content-Type: application/json");

    $level = $_GET['level'];

    switch ($level) {
        case 'guest':
            //echo "Sei un guest";
            $data_guest['grafico1'] = $graphs['fatturato'];
            $data_guest["access"] = $level;
            echo json_encode($data_guest);
            break;
        case 'employee':
            //echo "Sei un employee";
            $data_employee['grafico1'] = $graphs['fatturato'];
            $data_employee['grafico2'] = $graphs['fatturato_by_agent'];
            $data_employee["access"] = $level;
            echo json_encode($data_employee);
            break;
        case 'clevel':
            //echo "Sei un clevel";
            $data_clevel['grafico1'] = $graphs['fatturato'];
            $data_clevel['grafico2'] = $graphs['fatturato_by_agent'];
            $data_clevel['grafico3'] = $graphs['team_efficiency'];
            $data_clevel["access"] = $level;
            echo json_encode($data_clevel);
            break;
        default:
            echo "Seleziona un accesso tramite query";
    };

?>
