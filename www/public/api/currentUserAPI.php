<?php
session_start();

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
} else {
    $username = "Gäst";
}
header("Access-Control-Allow-Origin: *");
echo json_encode($username);
