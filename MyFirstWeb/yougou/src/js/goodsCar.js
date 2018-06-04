/* 
 * @Author: Marte
 * @Date:   2018-05-31 17:47:04
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:58:07
 */
require(['config'], function() {
    require(['jquery', 'moduleCore', 'common', 'change', 'car'], function($, moduleCore, common, change, car) {
        $("xtopToLogin").xtopToLogin();
        var accountName = Cookie.get('uAccount');
        //用户购物车信息
        $.ajax({
            type: 'POST',
            url: '../api/goodsCarShow.php', //这里是请求的后台地址
            data: {
                'accountName': accountName
            },
            dataType: 'json',
            success: function(json) {
                var carMsg = "";
                var data_content = json.data_content;
                var totalPrice = 0;
                $.each(data_content, function(index, array) {
                    carMsg += `<tr class="carTr"><td><input type="checkbox" class="ck" data-gid="${array['goods_id']}"><a href="../html/details.html" class="liImg" data-gid="${array['goods_id']}"><img src="../${array['goods_img']}" data-gid="${array['goods_id']}"></a></td><td><a href="../html/details.html" class="goodsName" data-gid="${array['goods_id']}">${array['goods_name']}</a></td><td><p data-gid="${array['goods_id']}">${array['goods_color']}</p><p data-gid="${array['goods_id']}">${array['goods_size']}码</p></td><td class="sPrice">${array['goods_price']}</td><td class="sNum">${array['goods_num']}</td><td>
                                <button class="debtn btn00 fl" data-gid="${array['goods_id']}">-</button>
                                <input type="text" class="chengeNumInput fl" value="${array['goods_num']}" data-gid="${array['goods_id']}">
                                <button class="inbtn btn00 fl" data-gid="${array['goods_id']}">+</button></td><td class="singleTotal">${array['goods_totalPrice']}</td><td><p><a data-gid="${array['goods_id']}" class="collection">移入收藏夹</a></p><p><a data-gid="${array['goods_id']}" class="sigleDel">删除</a></p></td></tr>`;
                    totalPrice += Number(array['goods_totalPrice']);
                });
                $('.uCarContent').append(carMsg);
                // console.log(666)
                $('.totalP').html(totalPrice.toFixed(2));
            }
        });
        //......................................清空购物车......................................................
        $('.emptyCar').click(function() {
                $('tbody').html('');
                $.ajax({
                    type: 'POST',
                    url: '../api/emptyCar.php',
                    data: {
                        'accountName': accountName
                    },
                    dataType: 'json',
                    // success: function(json) {
                    // }
                })
            })
            //......................................删除单个商品.....................................................
        $(document).click('.sigleDel', function(e) { //减按钮
                //获取商品id
                if ($(e.target).attr("class") == 'sigleDel') {
                    var goods_id = $(e.target).attr('data-gid');
                    var $idx = $('.sigleDel').index($(e.target));
                    $('.carTr').eq($idx).remove();
                    console.log(goods_id, accountName)
                    $.ajax({
                        type: 'POST',
                        url: '../api/delSingle.php', //这里是请求的后台地址
                        data: {
                            'goods_id': goods_id,
                            'accountName': accountName
                        },
                        dataType: 'json',
                        success: function(json) {
                            console.log(666)
                        }
                    });
                }
            })
            //......................................全选与不选.......................................................
        var checkAll = document.querySelectorAll(".checkAll")[0];
        $(document).on('click', '.checkAll', function() { //  这样就可以
            var ck = document.querySelectorAll('.ck');
            console.log(ck)
            for (var j = 0; j < ck.length; j++) {
                ck[j].checked = checkAll.checked;
            }
            // 给每个ck复选框绑定点击事件
            // 判定checkAll复选框的勾选状态
            for (var i = 0; i < ck.length; i++) {
                ck[i].onclick = function() {
                    checkAll.checked = isCheckAll();
                }
            }
            // 封装#all勾选状态函数
            // * 如果所有的hobby勾选，则#all勾选
            // * 只有有一个hobby未勾选，则#all取消勾选
            function isCheckAll() {
                // 假设hobby全部勾选
                var res = true;
                for (var i = 0; i < ck.length; i++) {
                    if (!ck[i].checked) {
                        res = false;
                        break;
                    }
                }
                return res;
            }
        });
    })
})