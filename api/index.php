<?php

header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents('php://input'), true);

$response = array('result' => $data, 'message' => 'Data recibida');
echo json_encode($response);