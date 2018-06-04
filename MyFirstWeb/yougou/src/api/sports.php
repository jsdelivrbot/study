<?php
/**
 * @Author: Marte
 * @Date:   2018-06-02 19:46:43
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-02 20:01:35
 */ require('connect.php');
    $sql = "SELECT * FROM `index_info` WHERE goods_type='sports'";
    $sports = $conn -> query($sql);
    while($row=mysqli_fetch_array($sports)){ 
      $arr['data_content'][]= array( 
       'goods_id' => $row['goods_id'], 
      'goods_name' => $row['goods_name'], 
      'goods_img' => $row['goods_img'],
      'activity' => $row['activity']
      ); 
    }
    echo json_encode($arr); 
 ?>