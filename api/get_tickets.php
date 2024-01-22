<?php
header("Access-Control-Allow-Origin: *");
include "./conexion_bd.php";

$bd = getConexion();

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];

try {
  $stmt = $bd->prepare("SELECT id FROM user WHERE username = :username");
  $stmt->execute(array(':username' => $username));
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  $stmt = $bd->prepare("SELECT * FROM ticket WHERE user_id = :user_id");
  $stmt->execute(array(':user_id' => $user['id']));
  $tickets = $stmt->fetchAll(PDO::FETCH_ASSOC);

  $response = array('ok' => true, 'tickets' => $tickets);
  echo json_encode($response);
} catch (Exception $e) {
  //throw $th;
}