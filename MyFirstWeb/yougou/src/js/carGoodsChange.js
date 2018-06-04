/* 
 * @Author: Marte
 * @Date:   2018-06-02 09:55:19
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:56:50
 */
define(["jquery"], function($) {
    $(function() {
        var accountName = Cookie.get('uAccount');
        //加减按钮改变商品数量
        var $qty;
        $(document).click('.debtn', function(e) { //减按钮
            //获取商品id
            var goods_id = $($(e.target)).attr('data-gid');
            // console.log(goods_id)
            var $idx = $('.debtn').index($(e.target));
            var $numInput = $(e.target).next();
            $qty = $numInput.val();
            if ($qty > 1) {
                $qty--;
            } else {
                $qty = 1;
            }
            $numInput.attr('value', $qty);
            var $sPrice = $('.sPrice').eq($idx).html();
            var $sNum = $('.sNum').eq($idx).html();
            $sNum = $qty;
            $('.sNum').eq($idx).html($sNum);
            var $sTotal = $('.singleTotal').eq($idx).html();
            $sTotal = Number(($sPrice * $sNum).toFixed(2));
            $('.singleTotal').eq($idx).html($sTotal);
            console.log($sNum, $sTotal, goods_id, accountName);
            $.ajax({
                type: 'POST',
                url: '../api/carGoodsChange.php', //这里是请求的后台地址
                data: {
                    'qty': $sNum,
                    'goodsTotalPrice': $sTotal,
                    'goods_id': goods_id,
                    'accountName': accountName
                },
                dataType: 'json',
                success: function(json) {
                    console.log(666)
                }
            });
            // console.log($qty,$sTotal,accountName)
        })
        $(document).click('.inbtn', function(e) { //加按钮
            var goods_id = $($(e.target)).attr('data-gid');
            var $idx = $('.inbtn').index($(e.target));
            var $numInput = $(e.target).prev();
            $qty = $numInput.val();
            $qty++;
            $numInput.attr('value', $qty);
            var $sPrice = $('.sPrice').eq($idx).html();
            var $sNum = $('.sNum').eq($idx).html();
            $sNum = $qty;
            $('.sNum').eq($idx).html($sNum);
            var $sTotal = $('.singleTotal').eq($idx).html();
            $sTotal = ($sPrice * $sNum).toFixed(2);
            $('.singleTotal').eq($idx).html($sTotal);
            $.ajax({
                type: 'POST',
                url: '../api/carGoodsChange.php', //这里是请求的后台地址
                data: {
                    'qty': $sNum,
                    'goodsTotalPrice': $sTotal,
                    'goods_id': goods_id,
                    'accountName': accountName
                },
                dataType: 'json',
                success: function(json) {}
            });
        })
    })
});