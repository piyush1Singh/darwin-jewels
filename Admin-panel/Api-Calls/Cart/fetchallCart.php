<?php
session_start();
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
$json = file_get_contents('php://input');
// print_r($json);die("first json");
$json = json_decode($json);
// print_r ($json);die();
// $_SESSION;
if (isset($_SESSION['cart'])) {
    $result = $_SESSION['cart'];
    $row = json_encode($result);
    print_r($row);
} else {
    $result = ["status" => "No Product In Cart"];
    $row = json_encode($result);
    print_r($row);
}
