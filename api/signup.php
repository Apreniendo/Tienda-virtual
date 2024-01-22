<?php
header("Access-Control-Allow-Origin: *");
include "./conexion_bd.php";
$bd = getConexion();



$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];
$passwordConfirm = $data['passwordConfirm'];
$email = $data['email'];

// Revisar si usuario o email ya existen
$stmt = $bd->prepare("SELECT * FROM user WHERE username = :username OR email = :email");
$stmt->execute(array(':username' => $username, ':email' => $email));
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
  $response = array('error' => 'Usuario o Email ya existen', 'ok' => false);
  echo json_encode($response);
} else {
  // Crear usuario nuevo
  $stmt = $bd->prepare("INSERT INTO user (username, email, password) VALUES (:username, :email, :password)");
  $stmt->execute(array(':username' => $username, ':email' => $email, ':password' => password_hash($password, PASSWORD_DEFAULT)));

  $response = array('result' => 'Usuario registrado correctamente', 'ok' => true);
  echo json_encode($response);
}