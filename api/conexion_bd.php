<?php

function getConexion()
{
  try {
    $conn = new PDO('mysql:host=localhost', "root", "");

    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $sql = "CREATE DATABASE IF NOT EXISTS tienda_online";
    $conn->exec($sql);


    $sql = "USE tienda_online";
    $conn->exec($sql);


    $sql = "CREATE TABLE IF NOT EXISTS user (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
  )";
    $conn->exec($sql);


    $sql = "CREATE TABLE IF NOT EXISTS ticket (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    asunto VARCHAR(100) NOT NULL,
    mensaje TEXT NOT NULL,
    estado VARCHAR(20) DEFAULT 'Pendiente',
    user_id INT(6) UNSIGNED,
    FOREIGN KEY (user_id) REFERENCES user(id)
  )";
    $conn->exec($sql);

  } catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
  }
}