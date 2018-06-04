/* 
 * @Author: Marte
 * @Date:   2018-05-29 16:32:58
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:59:51
 */
require(['config'], function() {
    require(['jquery', 'moduleCore', 'common', 'car'], function($, moduleCore, common, car) {
        $("xtopToLogin").xtopToLogin();
        var rType = document.querySelector('#rType');
        var rTypeValue = document.querySelector('.rTypeValue');
        //初始默认为手机注册
        var output1 = $('#output1');
        var output2 = $('#output2');
        var output3 = $('#output3');
        var output4 = $('#output4');
        var output5 = $('#output5');

        function test1() {
            function telWarn() {
                rTypeValue.onblur = function() {
                    if (!/1[3-9]\d{9}/i.test(rTypeValue.value) && rTypeValue.value != '') {
                        output1.html('您输入的手机号码有误！');
                        return false;
                    }
                    if (rTypeValue.value == '') {
                        output1.html('您输入手机号码');
                        return false;
                    }
                }
            }
            rTypeValue.oninput = function() {
                output1.html('');
            }
            telWarn();
            rType.onchange = function() {
                    if (rType.value == '手机号') {
                        telWarn();
                    } else if (rType.value == '邮箱') {
                        rTypeValue.placeholder = '不建议填写gmail、hotmail、qq邮箱';
                        rTypeValue.onblur = function() {
                            if (!/^[a-z0-9][\w\-\.]+@[\da-z\-]{1,60}(\.[a-z]+){1,3}$/i.test(rTypeValue.value) && rTypeValue.value != '') {
                                output1.html('您输入的邮箱有误！');
                                return false;
                            }
                            if (rTypeValue.value == '') {
                                output1.html('您输入您的邮箱');
                                return false;
                            } else {}
                        }
                    }
                }
                //验证码
            var code1 = document.querySelector("#code1");
            var code; //在全局定义验证码  
            function createCode() {
                code = "";
                var codeLength = 4; //验证码的长度  
                var checkCode = document.getElementById("code");
                var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
                for (var i = 0; i < codeLength; i++) { //循环操作  
                    var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
                    code += random[index]; //根据索引取得随机数加到code上  
                }
                code1.value = code; //把code值赋给验证码 
            }
            createCode();
            code1.onclick = function() {
                createCode();
            }
            var ucode1 = document.querySelector('#ucode1');
            ucode1.onblur = function() {
                if (ucode1.value != code1.value && ucode1.value != '') {
                    output2.html('验证码有误');
                    return false;
                }
                if (ucode1.value == '') {
                    output1.html('请输入验证码');
                    return false;
                }
                console.log(ucode1.value)
            }
            ucode1.oninput = function() {
                output2.html('');
            }
            var upassword = document.querySelector('#upassword');
            upassword.onblur = function() {
                if (!/^\w{6,25}$/i.test(upassword.value) && upassword.value != '') {
                    output4.html('密码长度为6-25个字符');
                    return false;
                }
                if (upassword.value == '') {
                    output4.html('密码不能为空');
                    return false;
                } else {}
            }
            upassword.oninput = function() {
                output4.html('');
            }
            var rupassword = document.querySelector('#rupassword');
            rupassword.onblur = function() {
                if (rupassword.value != upassword.value) {
                    output5.html('密码不一致');
                    return false;
                }
            }
            rupassword.oninput = function() {
                output5.html('');
            }
            var agree = document.querySelector('#agree');
            var toRejister = document.querySelector('#toRejister');
            var registerFail = document.querySelector('#registerFail');
        }
        test1();
        toRejister.onclick = function() {
            if (test1) {
                if (rType.value == '手机号') {
                    var u_tel = rTypeValue.value;
                    var u_password = upassword.value;
                    var type = rType.value;
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState == 4) {
                            if (xhr.responseText == '此号码已注册') {
                                alert('此号码已被注册，请登录或重新注册');
                            } else {
                                //账号存入cookie
                                document.cookie = 'uAccount=' + u_tel + ';path=/';
                                // location.href = '../index.html';
                                window.open('../index.html');
                            }
                        }
                    }
                    xhr.open("post", "http://localhost/yougou/src/api/doRegister.php", true);
                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                    xhr.send(`type=${type}&u_tel=${u_tel}&u_password=${u_password}`);
                } else if (rType.value == '邮箱') {
                    var u_email = rTypeValue.value;
                    var u_password = upassword.value;
                    var type = rType.value
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState == 4) {
                            // console.log(xhr.responseText);
                            if (xhr.responseText == '此邮箱已注册') {
                                alert('此邮箱已被注册，请登录或重新注册');
                            } else {
                                //账号存入cookie
                                document.cookie = 'uAccount=' + u_email + ';path=/';
                                // location.href = '../index.html';
                                window.open('../index.html');
                            }
                        }
                    }
                    xhr.open("post", "http://localhost/yougou/src/api/doRegister.php", true);
                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                    xhr.send(`type=${type}&u_email=${u_email}&u_password=${u_password}`);
                }
            } else {
                alert('注册失败');
            }
        }
    });
});