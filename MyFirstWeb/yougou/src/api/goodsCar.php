<?php
/**
 * @Author: Marte
 * @Date:   2018-06-01 11:36:47
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-03 15:47:26
 */
//添加商品到购物车
    require('connect.php');
    $goods_id = $_POST['goods_id'];
    $qty = $_POST['qty'];
    $accountName = $_POST['accountName'];
    $sql = "SELECT `u_carId` FROM `user_info` WHERE `u_name` = '$accountName' or `u_tel`='$accountName' or `u_email`='$accountName'";
    $userInfo = $conn -> query($sql);
    while($row=mysqli_fetch_array($userInfo)){ 
        $carId = $row['u_carId'];
    };
    $sql = "SELECT * FROM `belle_goods` WHERE `goods_id`=$goods_id"; 
    $goodsInfo = $conn -> query($sql);
    while($row=mysqli_fetch_array($goodsInfo)){ 
          $goods_name =  $row['goods_name'];
          $goods_img = $row['goods_img1'];
          $goods_sale = $row['goods_sale'];
          $goods_id = $row['goods_id'];
          //先查询购物车表是否存在该商品，如果存在则修改购物车中该商品数量
          $sql = "SELECT `goods_num` FROM `car_goods` WHERE goods_id=$goods_id";
          $result = $conn -> query($sql);
          $row = mysqli_fetch_assoc($result);
          $qty1 = $row['goods_num'];
          $num = count($row);
          if($num>0){
             $qtyTotal = $qty1+$qty;
             $goods_totalPrice = $goods_sale*$qtyTotal;
             $sql ="UPDATE `car_goods` SET `goods_num`=$qtyTotal,`goodsTotalPrice`=$goods_totalPrice";
             $conn -> query($sql);
          }else{
            $goods_totalPrice = $goods_sale*$qty;
            $sql = "INSERT INTO `car_goods`(`goods_name`, `goods_img`,`goods_color`,`goods_size`,`goods_price`, `goods_num`,`goodsTotalPrice`,`car_id`,`goods_id`) VALUES ('$goods_name','$goods_img','白色',37,$goods_sale,$qty,$goods_totalPrice,$carId,$goods_id)";
            $conn -> query($sql);}
      
    }
     
?>