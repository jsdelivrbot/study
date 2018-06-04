/* 
 * @Author: Marte
 * @Date:   2018-05-31 15:21:30
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:59:24
 */
define(["jquery"], function($) {
    //当商品被点击时将商品id存入cookie
    //当商品被点击时将商品id存入cookie
    $(document).click(function(e) {
        var goods_id = $(e.target).attr('data-gid');
        document.cookie = 'goods_id=' + goods_id;
    })
});