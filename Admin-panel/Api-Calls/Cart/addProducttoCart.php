<?php
session_start();
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
$json = file_get_contents('php://input');
$json = json_decode($json);
if (!empty($_SESSION)) {
    $newArr = $_SESSION['cart'];
    array_push($newArr,['quantity'=>$json->quantity,
    'id'=>$json->id
]);
print_r($newArr);die('newa rr');
    array_push($_SESSION['cart'], [
        'id' => $json->id,
        'quantity' => $json->quantity,
    ]);
    print_r(json_encode($_SESSION['cart']));
    die();
    // $result = ["status" => "success"];
    // $row = json_encode($result);
    // print_r($row);
} else {
    $_SESSION['cart'] = array();
    array_push($_SESSION['cart'], [
        'id' => $json->id,
        'quantity' => $json->quantity,
    ]);
    print_r(json_encode($_SESSION['cart']));die();
    // $result = ["status" => "success"];
    // $row = json_encode($result);
    // print_r($row);
}
?>
