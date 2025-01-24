<?php       
    include("../../model/dbFunctions.php");
    
    session_start();


    // Kolla session med uid
    if(isset($_SESSION['uid'])){
        $result = getHighscore($_SESSION['uid']);
        //$result = (int)getHighscore('33f6649e-d72a-11ef-ba2d-0242ac141002');
    }else{
        $result = 0;
    }

    echo json_decode($result);
?>