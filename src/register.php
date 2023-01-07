<?php
$myPost = file_get_contents('php://input');
$filename = 'userlist.json';

if (!file_exists($filename)) {
    file_put_contents($filename, $myPost);
} else {
    $myFile = fopen($filename, 'w');
    fwrite($myFile,$myPost);
    fclose($myFile);
}
echo $myPost;
?>