<?php
/**
 * @Author: Marte
 * @Date:   2018-05-30 16:28:34
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-01 22:28:44
 */
    require('connect.php');
    $sql = "SELECT * FROM `brand` WHERE 1";
    $result = $conn -> query($sql);
    echo "<dt>品牌</dt>";
    //品牌列表
    while ($row = mysqli_fetch_assoc($result)){
        echo "<dd><a href=goodsList.html title={$row['brand_name']}><img src={$row['brand_logo']}></a></dd>";
    }
?>