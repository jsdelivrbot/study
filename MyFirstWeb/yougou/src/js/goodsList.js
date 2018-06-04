/* 
 * @Author: Marte
 * @Date:   2018-05-30 16:28:15
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:58:54
 */
define(["jquery"], function($) {
    $(function() {
        //品牌
        var brandType = $('.dl1', '.classificationB');
        console.log(brandType);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                brandType.html(xhr.responseText);
            }
        }
        xhr.open("get", "http://localhost/yougou/src/api/goodsList.php", true);
        xhr.send();
    })
})