<?php
/**
 * @Author: Marte
 * @Date:   2018-06-02 10:09:57
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-03 17:39:59
 */ require('connect.php');
    $goods_id = $_POST['goods_id'];
    $qty = $_POST['qty'];
    $goodsTotalPrice = $_POST['goodsTotalPrice'];
    $accountName = $_POST['accountName'];
    $sql = "SELECT `u_carId` FROM `user_info` WHERE `u_name` = '$accountName' or `u_tel`='$accountName' or `u_email`='$accountName'";
    $userInfo = $conn -> query($sql);
    while($row=mysqli_fetch_array($userInfo)){ 
        $carId = $row['u_carId'];
    };
    $sql ="UPDATE `car_goods` SET `goods_num`=$qty,`goodsTotalPrice`= $goodsTotalPrice where `goods_id`=$goods_id and `car_id`=$carId";
    $conn -> query($sql);
?>