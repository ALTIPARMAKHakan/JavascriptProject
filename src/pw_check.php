<?php
$passwort = '';
if ( isset($_GET['pw']) )
{
  $passwort = $_GET['pw'];
}
$sicherheitszahl = 0;
// Länge des Strings prüfen
$sicherheitszahl = strlen($passwort);

// Zusatzpunkte bei Kleinbuchstaben
if (preg_match("/[a-z]/", $passwort)) {
    $sicherheitszahl = $sicherheitszahl + 5;
}
// Zusatzpunkte bei Großbuchstaben
if (preg_match("/[A-Z]/", $passwort)) {
    $sicherheitszahl = $sicherheitszahl + 5;
}
// Zusatzpunkte bei Zahlen
if (preg_match("/[0-9]/", $passwort)) {
    $sicherheitszahl = $sicherheitszahl + 5;
}
// Zusatzpunkte bei Sonderzeichen (alles was nicht Buchstabe oder Zahl ist)
if (preg_match("/[^A-Za-z0-9]/", $passwort)) {
    $sicherheitszahl = $sicherheitszahl + 5;
}

// BUG VAR
if ($sicherheitszahl <= 8 ) {
    echo "<em>" . $passwort . "</em>" "<b>" ist unsicher "</b>";
}
// else {
//     echo '<em>'.$passwort.'</em> <b>ist sicher ('.$sicherheitszahl.' Punkte)</b>';
// }


?>

