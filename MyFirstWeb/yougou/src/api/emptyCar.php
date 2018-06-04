<?php
/**
 * @Author: Marte
 * @Date:   2018-06-03 16:01:10
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-03 16:04:53
 */
    require('connect.php');
    $accountName = $_POST['accountName'];
    $sql = "SELECT `u_carId` FROM `user_info` WHERE `u_name` = '$accountName' or `u_tel`='$accountName' or `u_email`='$accountName'";
    $userInfo = $conn -> query($sql);
    while($row=mysqli_fetch_array($userInfo)){ 
        $carId = $row['u_carId'];
    };
    $sql = "DELETE FROM `car_goods` WHERE `car_id`=$carId";
    $result = $conn -> query($sql);
?>