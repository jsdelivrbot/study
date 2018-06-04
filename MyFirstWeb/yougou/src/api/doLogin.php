<?php
/**
 * @Author: Marte
 * @Date:   2018-05-29 09:31:32
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-30 16:56:26
 */
    require('connect.php');
    $uAccount = $_POST['uAccount'];
    $uPassword = $_POST['uPassword'];
    $sql = "SELECT * FROM `user_info` WHERE `u_password`='$uPassword' and (`u_name`='$uAccount' or `u_tel`='$uAccount' or `u_email`='$uAccount')";
    $result = $conn -> query($sql);
    $row = mysqli_fetch_assoc($result);
    $num = count($row);
    if($num>0){
        echo "登录成功";
    }else{echo "账号或密码有误";}
    $conn -> close();
    // 关闭数据库，避免资源浪费

    
?>