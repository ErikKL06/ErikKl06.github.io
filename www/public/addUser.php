<?php    
if(isset($_POST['email'],$_POST['userName'],$_POST['pwd'])){                
    include_once('inc/db.inc.php');    
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
    $user = filter_input(INPUT_POST, 'userName', FILTER_SANITIZE_SPECIAL_CHARS);
    $pwd = password_hash($_POST['pwd'], PASSWORD_DEFAULT);
    
    /* Bygger upp sql frågan */
    $stmt= $db->prepare("INSERT INTO user(uid, username, email, password) VALUES(UUID(), :user, :fn, :pwd)");
    
    $stmt->bindValue(":user", $user);
    $stmt->bindValue(":fn", $email);
    $stmt->bindValue(":pwd", $pwd);
    
    // Om INSERT gick bra! Om man användarnamn är upptaget fungerar inte insert
    try{
        $stmt->execute();
        header('Location: addUserForm.html'); // Borde visa att allt gick bra!
    }catch(Exception $e){
        header('Content-Type: text/html; charset=utf-8');
        echo "<p>Kunde inte lägga till användaren. Kontrollera användarnamnet</p>";
        echo "<a href = 'addUserForm.html'>Försök igen</a>";
        // Display the actual error message for debugging
        echo "<p>Error: " . $e->getMessage() . "</p>";
    }
}
?>