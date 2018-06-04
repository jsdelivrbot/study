<?php
/**
 * @Author: Marte
 * @Date:   2018-05-31 09:19:32
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-01 09:55:25
 */
    require('connect.php');
    $goods_id = $_POST['goods_id'];
    $sql = "SELECT * FROM `belle_goods` WHERE `goods_id`=$goods_id"; 
    $result = $conn -> query($sql);
    while($row=mysqli_fetch_array($result)){ 
      $arr['data_content'][]= array( 
       'goods_id' => $row['goods_id'], 
      'goods_img' => $row['goods_img1'], 
      'goods_sale' => $row['goods_sale'], 
      'goods_name' => $row['goods_name'],
      'goods_sale'=>$row['goods_sale'],
      'goods_price'=>$row['goods_price'],
      'goods_style'=>$row['goods_style']
      ); 
    } 
        echo json_encode($arr);
?>
