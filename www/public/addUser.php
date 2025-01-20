<?php    
if(isset($_POST['email'],$_POST['userName'],$_POST['pwd'])){                
    include_once('../model/dbFunctions.php');    
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
    $user = filter_input(INPUT_POST, 'userName', FILTER_SANITIZE_SPECIAL_CHARS);
    $pwd = password_hash($_POST['pwd'], PASSWORD_DEFAULT);

    $availability = checkAvailability($email, $user);
    if($availability['Eavailable'] == true && $availability['Uavailable'] == true) {
        $result = addUser($email, $user, $pwd);
    }
    else if($availability['Eavailable'] == false){
        echo "<p>Email finns redan</p>";
    }
    else if($availability['Uavailable'] == false){
        echo "<p>Användaren finns redan</p>";
    }
    


    // Om INSERT gick bra! Om man användarnamn är upptaget fungerar inte insert
    if($result=true){
       // header('Location: addUserForm.html');
       //fixa fixaa fixa fixa
    }else{
        header('Content-Type: text/html; charset=utf-8');
        echo "<p>Kunde inte lägga till användaren. Kontrollera användarnamnet</p>";
    }
}
?>