<?php 
session_start();

if (isset($_SESSION['username'])){
    $username = $_SESSION['username'];
} else {
    $username = "Not logged in";
}
echo json_encode($username);

?>