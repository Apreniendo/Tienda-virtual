<?php
header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];


$response = array('result' => $username, 'ok' => true);
echo json_encode($response);
