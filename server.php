<?php


$stringa = file_get_contents("dischi.json");
$dischi_lista = json_decode($stringa, true);

$results = [];

if(isset($_POST['constIndice'])){
$discoIndice= $_POST['constIndice'];
$singolDisco= $dischi_lista[$discoIndice];
$results= $singolDisco;
}else{
$results= $dischi_lista;
}

header('Content-type: application/json');
echo json_encode($results);