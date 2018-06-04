/* 
 * @Author: Marte
 * @Date:   2018-05-28 19:56:06
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:59:30
 */
require(['config'], function() {
    require(['jquery', 'moduleCore', 'common', 'car'], function($, moduleCore, common, car) {
        $("xtopToLogin").xtopToLogin();
        //账号登录与手机快速登录之间的切换
        var accountLogin = document.querySelector('.accountLogin');
        var moblieLogin = document.querySelector('.moblieLogin');
        var form1 = document.querySelector('.form1');
        var form2 = document.querySelector('.form2');
        moblieLogin.onclick = function() {
            form1.style.display = 'none';
            form2.style.display = 'block';
            moblieLogin.className = "moblieLogin active";
            accountLogin.className = "accountLogin";
        }
        accountLogin.onclick = function() {
                form1.style.display = 'block';
                form2.style.display = 'none';
                accountLogin.className = "accountLogin active";
                moblieLogin.className = "moblieLogin";
            }
            //处理登录
        var form1Login = document.querySelector("#form1Login");
        var warning = document.querySelector(".warning");
        form1Login.onclick = function() {
            var uAccount = document.querySelector(".uAccount").value;
            var uPassword = document.querySelector(".uPassword").value;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.responseText == '登录成功') {
                        //账号存入cookie
                        document.cookie = 'uAccount=' + uAccount + ';path=/';
                        // location.href = '../index.html';
                        window.open('../index.html');
                    } else {
                        warning.innerHTML = xhr.responseText;
                    }
                }
            }
            xhr.open("post", "http://localhost/yougou/src/api/doLogin.php", true);
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(`uAccount=${uAccount}&uPassword=${uPassword}`);
        }
    })
})