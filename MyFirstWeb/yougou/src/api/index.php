<?php
/**
 * @Author: Marte
 * @Date:   2018-06-02 15:22:59
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-02 20:07:09
 */
    require('connect.php');
    $sql = "SELECT * FROM `allbrand` WHERE 1";
    $result = $conn -> query($sql);
    while($row=mysqli_fetch_array($result)){ 
      $arr['data_content'][]= array( 
       'brand_id' => $row['brand_id'], 
      'brand_logo' => $row['brand_logo'], 
      'brand_name' => $row['brand_name'],
      ); 
    } 
        echo json_encode($arr);
    
?>