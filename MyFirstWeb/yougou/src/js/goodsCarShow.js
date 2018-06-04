/* 
 * @Author: Marte
 * @Date:   2018-06-01 15:13:03
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:58:14
 */
define(["jquery"], function($) {
    $(function() {
        //显示购物车信息
        var accountName = Cookie.get('uAccount');
        $.ajax({
            type: 'POST',
            url: '../api/goodsCarShow.php', //这里是请求的后台地址
            data: {
                'accountName': accountName
            },
            dataType: 'json',
            success: function(json) {
                var carGoods = "";
                var data_content = json.data_content;
                var goodsNum = 0;
                $.each(data_content, function(index, array) {
                    carGoods += `<li class="clearfix" data-gid="${array['goods_id']}"><p class="p1"><a href="../html/details.html" class="liImg"><img src="../${array['goods_img']}"></a></p><p class="p2"><a href="../html/details.html" class="goodsName">${array['goods_name']}</a>${array['goods_color']}${array['goods_size']}码</p><p class="price p3">${array['goods_totalPrice']}</p><p class="p4"><button class="debtn btn00">-</button><input type="text" class="chengeNumInput" value="${array['goods_num']}"><button class="inbtn btn00">+</button></li>`;
                    goodsNum++
                });
                var bottom = `<p class="last"><span>一共<b>${goodsNum}</b>件商品</span><a href="../html/goodsCar.html"></p>`;
                var gqty = `${goodsNum}`;
                $('.goodsqty').html(gqty);
                console.log(bottom)
                $('.car').append(bottom);
                $('.carContent').append(carGoods);
                // console.log(666)
            }
        });
    })
})