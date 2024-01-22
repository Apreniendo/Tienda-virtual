<?php
function redirect($url, $permanent = false)
{
    header('Location: ' . __DIR__ . '/../' . $url, true, $permanent ? 301 : 302);

    exit();
}