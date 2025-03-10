<?php
session_start();

$_SESSION = array(); // Tömmer sessionsarrayen    
session_destroy();
session_regenerate_id(true); // Kör även session_destroy() för att förhindra session fixation attacks
header("Location: index.php");
