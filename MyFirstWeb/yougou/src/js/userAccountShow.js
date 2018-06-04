/* 
 * @Author: Marte
 * @Date:   2018-05-31 17:18:53
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 14:00:05
 */
define(["jquery"], function($) {
    $(function() {
        var cookie = document.cookie;
        var accountName = Cookie.get('uAccount');
        var showUser = document.querySelector('.showUser');
        var tab2 = document.querySelector('.tab2');
        if (accountName) {
            // tab2.style.width = '404px';
            var html = `<a class="showName"><span>您好！${accountName}</span></a><a href="#" class="exit"><span>退出</span></a>`;
            showUser.innerHTML = html;
            var exit = document.querySelector('.exit');
            // console.log(exit)
            exit.onclick = function() {
                var expires = new Date();
                expires.setTime(expires.getTime() - 1000); //当前时间减去一秒,相当于立即过期(可以增减)
                document.cookie = "uAccount='';path=/;expires=" + expires.toGMTString() + ""; //expires是对应过期时间的
                showUser.innerHTML = '<a href="html/login.html"><span>登录</span></a><a href="html/register.html"><span>注册</span></a>';
            }
        }
    })
})