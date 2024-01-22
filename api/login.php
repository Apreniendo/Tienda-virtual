<?php
header("Access-Control-Allow-Origin: *");
include "./conexion_bd.php";

$bd = getConexion();

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];

$stmt = $bd->prepare("SELECT * FROM user WHERE username = :username");
$stmt->execute(array(':username' => $username));
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    $response = array('error' => 'El usuario no existe', 'ok' => false);
    echo json_encode($response);
} else {
    // Verify the password
    if (password_verify($password, $user['password'])) {
        $response = array('result' => $username, 'ok' => true);
        echo json_encode($response);
    } else {
        $response = array('error' => 'Contraseña es incorrecta', 'ok' => false);
        echo json_encode($response);
    }
}