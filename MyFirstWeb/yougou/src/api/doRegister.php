<?php
/**
 * @Author: Marte
 * @Date:   2018-05-29 09:31:47
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 11:12:34
 */
    require('connect.php');
    $type = $_POST['type'];
    if($type == '手机号'){
        $u_tel = $_POST['u_tel'];
        $u_password = $_POST['u_password'];
        $sql = "select * from `user_info` where u_tel='$u_tel'";
        $result = $conn -> query($sql);
        $row = mysqli_fetch_assoc($result);
        $num = count($row);
        if($num>0){
            echo "此号码已注册";
        }else{
            $sql = "INSERT INTO `user_info`(`u_password`, `u_tel`) VALUES ('$u_password','$u_tel')";
            $conn -> query($sql);
            $sql = "SELECT `u_id` FROM `user_info` WHERE `u_tel`='$u_tel'";
            $userInfo = $conn -> query($sql);
            while($row=mysqli_fetch_array($userInfo)){ 
                $u_id = $row['u_id'];
            };
            $sql = "UPDATE `user_info` SET `u_carId`=$u_id WHERE `u_tel`='$u_tel'";
            $conn -> query($sql);
        }  
    }
    else{
        $u_email = $_POST['u_email'];
        $u_password = $_POST['u_password'];
        $sql = "select * from `user_info` where u_email='$u_email'";
        $result = $conn -> query($sql);
        $row = mysqli_fetch_assoc($result);
        $num = count($row);
        if($num>0){
            echo "此邮箱已注册";
        }else{
            $sql = "INSERT INTO `user_info`(`u_password`, `u_email`) VALUES ('$u_password','$u_email')";
            $conn -> query($sql);
            $sql = "SELECT `u_id` FROM `user_info` WHERE `u_email`='$u_email'";
            $userInfo = $conn -> query($sql);
            while($row=mysqli_fetch_array($userInfo)){ 
                $u_id = $row['u_id'];
            };
            $sql = "UPDATE `user_info` SET `u_carId`=$u_id WHERE `u_email`='$u_email'";
            $conn -> query($sql);
        }  
    }
    

    
    
    
?>