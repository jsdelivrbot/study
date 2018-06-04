<?php
/**
 * @Author: Marte
 * @Date:   2018-05-30 21:42:16
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-01 22:29:10
 */
    require('connect.php');
    $pageNum = $_POST['pageNum'];
    $sql = "SELECT * FROM `belle_goods` WHERE 1"; 
    $result = $conn -> query($sql);
    $totalItem = mysqli_num_rows($result);//总记录数 
    $pageSize = 30;
    $totalPage = ceil($totalItem/$pageSize);
    $startItem = ($pageNum-1) * $pageSize;
    $arr['totalItem'] = $totalItem;
    $arr['pageSize'] = $pageSize;
    $arr['totalPage'] = $totalPage;
    $sql = "SELECT * FROM `belle_goods` limit 
    $startItem,$pageSize";
    $result = $conn -> query($sql);
    while($row=mysqli_fetch_array($result)){ 
      $arr['data_content'][] = array( 
       'goods_id' => $row['goods_id'], 
      'goods_img' => $row['goods_img1'], 
      'goods_sale' => $row['goods_sale'], 
      'goods_name' => $row['goods_name'],
      'goods_sale'=>$row['goods_sale'],
      'goods_price'=>$row['goods_price']
      ); 
    } 
        echo json_encode($arr);
?>