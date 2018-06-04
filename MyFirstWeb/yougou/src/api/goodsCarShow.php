<?php
/**
 * @Author: Marte
 * @Date:   2018-06-01 15:11:23
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-03 17:24:06
 */
//显示购物车的商品信息
    require('connect.php');
    $accountName = $_POST['accountName'];
    $sql = "SELECT `u_carId` FROM `user_info` WHERE `u_name` = '$accountName' or `u_tel`='$accountName' or `u_email`='$accountName'";
    $userInfo = $conn -> query($sql);
    while($row=mysqli_fetch_array($userInfo)){ 
        $carId = $row['u_carId'];
    };
    $sql = "SELECT * FROM `car_goods` WHERE car_id=$carId";
    $carInfo = $conn -> query($sql);
    while($row=mysqli_fetch_array($carInfo)){ 
          $arr['data_content'][]= array( 
          'goods_id' => $row['goods_id'], 
          'goods_img' => $row['goods_img'], 
          'goods_name' => $row['goods_name'],
          'goods_price'=>$row['goods_price'],
          'goods_color'=>$row['goods_color'],
          'goods_size'=>$row['goods_size'],
          'goods_num'=>$row['goods_num'],
          'goods_totalPrice'=>$row['goodsTotalPrice']
          );
      }
    echo json_encode($arr);
?>