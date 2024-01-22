<?php
header("Access-Control-Allow-Origin: *");
include "./conexion_bd.php";

$bd = getConexion();

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$asunto = $data['asunto'];
$mensaje = $data['mensaje'];

try {
  $stmt = $bd->prepare("SELECT id FROM user WHERE username = :username");
  $stmt->execute(array(':username' => $username));
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($user) {
    // Insertar el nuevo ticket en la base de datos
    $stmt = $bd->prepare("INSERT INTO ticket (asunto, mensaje, estado, user_id) VALUES (:asunto, :mensaje, 'Pendiente', :user_id)");
    $stmt->execute(array(':asunto' => $asunto, ':mensaje' => $mensaje, ':user_id' => $user['id']));

    $response = array('mensaje' => 'Ticket creado exitosamente', 'ok' => true);
    echo json_encode($response);
  } else {
    $response = array('error' => 'Usuario no encontrado', 'ok' => false);
    echo json_encode($response);
  }
} catch (Exception $e) {
  echo json_encode($e);
}