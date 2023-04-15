<?php
include "database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
// header('Content-Type: application/json');
$json = file_get_contents('php://input');
// $json = json_decode($json);
// print_r($json);die();


 $user = $_SERVER['REMOTE_ADDR'];

 $query= "SELECT * FROM `cart` WHERE user_ip = '$user'";

 $result = mysqli_query($conn,$query);

 if(mysqli_num_rows($result)> 0){
    $row = mysqli_fetch_row($result);
    print_r($row[1]);
    $ret =json_decode($row[1],true);
    print_r($ret);
 }else{
    $json = json_encode($json);
    $query = "INSERT INTO `cart`(`product_name`, `user_ip`) VALUES ('$json','$user')";
    if(mysqli_query($conn,$query)){
        $result = ["status" => "success"];
        $row = json_encode($result);
        print_r($row);
    }else{
        $result = ["status" => "failed"];
        $row = json_encode($result);
        print_r($row);
    }
 }

