<?php
/**
 * @Author: Marte
 * @Date:   2018-06-02 19:46:32
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-02 19:58:44
 */
    require('connect.php');
    $sql = "SELECT * FROM `index_info` WHERE goods_type='man'";
    $man = $conn -> query($sql);
    while($row=mysqli_fetch_array($man)){ 
      $arr['data_content'][]= array( 
       'goods_id' => $row['goods_id'], 
      'goods_name' => $row['goods_name'], 
      'goods_img' => $row['goods_img'],
      'activity' => $row['activity']
      ); 
    }
    echo json_encode($arr); 
 ?>