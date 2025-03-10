<?php //lägg till i databsen sen

$hit = 0;    // Sparar antalet träffar

/**
 * Om filen finns hämtas antalet besökare från den
 * Om den inte finns så skapas den som en tom fil
 */
if (file_exists("hit.dat")) {
    $hit = file_get_contents("hit.dat");
}

$hit++; // Ökar antalet besökare med 1

file_put_contents("hit.dat", $hit); // Skriver över filen med det nya antalet besökare

echo $hit;
