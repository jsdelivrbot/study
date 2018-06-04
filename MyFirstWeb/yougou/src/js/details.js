/* 
 * @Author: Marte
 * @Date:   2018-05-31 09:18:32
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:57:59
 */
require(['config'], function() {
    require(['jquery', 'moduleCore', 'common', 'car', 'magnifying'], function($, moduleCore, common, car, magnifying) {
        $("xtopSection").xtopSection();
        $("xbuttomSection").xbuttomSection();
        $(function() {
            //从cookie中取出id,通过ajax传递给detail.php
            var goods_id = Cookie.get('goods_id');
            //...................................商品信息展示..............................................
            //选择商品数量
            var deBtn = document.querySelector('.deBtn');
            var inBtn = document.querySelector('.inBtn');
            var number = document.querySelector('.number');
            console.log(deBtn);
            number.value = 1;
            var qty = 1;
            number.oninput = function() {
                if (number.value <= 100) {
                    // jisuan.innerHTML=sum();
                } else {
                    alert('现有库存100件');
                }
            }
            inBtn.onclick = function() {
                if (number.value <= 100) {
                    number.value++
                        qty = number.value;
                } else {
                    alert('现有库存100件');
                }
            }
            deBtn.onclick = function() {
                if (number.value > 1) {
                    number.value--
                        qty = number.value;
                } else {
                    number.value = 1;
                    qty = 1;
                }
            }
            var src = '';
            $.ajax({
                type: 'POST',
                url: '../api/details.php', //这里是请求的后台地址
                data: {
                    'goods_id': goods_id
                },
                dataType: 'json',
                success: function(json) {
                    var bigImg = '';
                    var smallImg = '';
                    var goodsData = '';
                    var data_content = json.data_content;
                    $.each(data_content, function(index, array) {
                        bigImg = `<img src="../${array['goods_img']}" data-big="../${array['goods_img']}" class="bigImg">`;
                        src = `../${array['goods_img']}`;
                        //实现切换效果
                        var smallPicLi = document.querySelectorAll('.smallPicLi');
                        for (let i = 0; i < smallPicLi.len; i++) {
                            smallPicLi[i].onmouseover = () => {}
                        }
                        //放大镜图片路径
                        goodsData = `<li class="li1">${array['goods_name']}</li><li class="li2">${array['goods_style']}</li><li class="li3"><a href="#">更多belle百丽商品&lt;&lt;</a></li><li class="li4"><span>￥${array['goods_sale']}</span><del>￥${array['goods_price']}</del></li>`;
                    });
                    $('.goodsContainerLT').append(bigImg);
                    $('li', '.smallPic').append(bigImg);
                    $('.goodsMsg').append(goodsData);
                }
            });
            //实现切换效果
            var smallPic = document.querySelectorAll('.smallPic');
            for (let i = 0; i < smallPic.len; i++) {
                smallPic[i].onmouseover = () => {}
            }
            //选择颜色、尺寸
            $('.checkSize').click(function() {
                $(this).addClass('selected');
                $(this).siblings('li').removeClass('selected'); // 删除其他li的边框样式
            });
            $('.colorLi').click(function() {
                $(this).addClass('selected');
                $(this).siblings('li').removeClass('selected'); // 删除其他li的边框样式
            });
            //......................................详情页购物车列表................................
            var buy = document.querySelector('.buy');
            var addTocar = document.querySelector('.addTocar'); //加入购物车按钮
            //用户账号
            var accountName = Cookie.get('uAccount');
            // console.log(accountName)
            addTocar.onclick = function() {
                    if (accountName) {
                        //点击按钮加入购物车
                        //复制商品图片
                        var addImg = document.querySelector('.bigImg')
                        var copyImg = addImg.cloneNode(true);
                        //获取当前图片的位置
                        copyImg.style.position = 'absolute';
                        copyImg.style.left = addImg.offsetLeft + 'px';
                        copyImg.style.top = addImg.offsetTop + 'px';
                        //在页面中显示
                        document.body.appendChild(copyImg);
                        //飞入购物车动画
                        animate(copyImg, {
                            left: 1230,
                            top: 160,
                            width: 5,
                            height: 5
                        }, function() {
                            copyImg.style.display = 'none';
                        });
                        var $num = $('.goodsqty').html();
                        $num++;
                        $('.goodsqty').html($num);
                        $.ajax({
                            type: 'POST',
                            url: '../api/goodsCar.php', //这里是请求的后台地址
                            data: {
                                'goods_id': goods_id,
                                'qty': qty,
                                'accountName': accountName
                            },
                            dataType: 'json',
                            success: function(json) {
                                var carGoods = '';
                                var data_content = json.data_content;
                                var goodsNum = 0;
                                $.each(data_content, function(index, array) {
                                    carGoods = `<li><a href="../html/details.html" class="liImg"><img src="../${array['goods_img']}"></a><a href="../html/details.html">${array['goods_name']}</span><span class="price">${array['goods_price']}</span><button class="debtn btncommon">-</button><input type="text" class="chengeNumInput"><button class="inbtn btncommon">+</button><p>${array['goods_color']}${array['goods_size']}</p></li>`;
                                    goodsNum++
                                });
                                $('.goodsqty').html(goodsNum);
                                carGoods += `<li class="last"><span>一共${goodsNum}件商品</span><a href="../html/goodsCar.html">去购物车结算</li>`
                                $('.carContent').append(carGoods);
                                // console.log(666)
                            }
                        });
                    } else {
                        alert('请先登录网站');
                    }
                    // console.log(666)
                }
                //........................................商品推荐................................................
            let goodsData = [{
                id: 'g01',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c1.jpg',
                price: '199.88',
                sale: '188.00'
            }, {
                id: 'g02',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c2.jpg',
                price: '99.88',
                sale: '89.88.00'
            }, {
                id: 'g03',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c3.jpg',
                price: '299.88',
                sale: '208.00'
            }, {
                id: 'g04',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c4.jpg',
                price: '88.88',
                sale: '66.98'
            }, {
                id: 'g05',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c5.jpg',
                price: '56.88',
                sale: '50.66'
            }, {
                id: 'g06',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c6.jpg',
                price: '65.88',
                sale: '40.58'
            }, {
                id: 'g07',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c7.jpg',
                price: '165.88',
                sale: '146.00'
            }, {
                id: 'g08',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c8.jpg',
                price: '284.88',
                sale: '208.88'
            }, {
                id: 'g9',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c9.jpg',
                price: '284.88',
                sale: '208.88'
            }, {
                id: 'g10',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c10.jpg',
                price: '284.88',
                sale: '208.88'
            }, {
                id: 'g11',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c11.jpg',
                price: '284.88',
                sale: '208.88'
            }, {
                id: 'g12',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c12.jpg',
                price: '284.88',
                sale: '208.88'
            }, {
                id: 'g13',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c13.jpg',
                price: '284.88',
                sale: '208.88'
            }, {
                id: 'g14',
                name: 'Belle/百丽春灰时尚穆勒鞋牛皮女凉鞋BNUA6AH7',
                img: '../img/c14.jpg',
                price: '284.88',
                sale: '208.88'
            }]
            var items = document.getElementsByClassName('items')[0];
            var html = ''
                //遍历数组
            var goodslist = goodsData.map(function(goods) {
                html += '<li data-goodsId="' + goods.id + '"><a href="#"><img src="' + goods.img + '"><h4>' + goods.name + '</h4><p class="price"><del>' + goods.price + '</del><span>' + goods.sale + '</span></p></li>'
            })
            items.innerHTML = html;
            //动画效果
            //添加左右按钮
            let btnPrev = document.querySelector('.btnPrev');
            let btnNext = document.querySelector('.btnNext');
            let li = document.querySelectorAll('li');
            var len = li.length;
            // 初始化:
            // 计算ul的宽度
            // li的宽度*数量
            let ul = document.querySelector('ul');
            ul.style.width = items.clientWidth * len + 'px';
            // 默认索引值
            var index = 0;

            function show() {
                if (index >= len / 6) {
                    index = 0;
                } else if (index < 0) {
                    index = 1;
                    console.log(index);
                }
                let target = -index * items.clientWidth + 10;
                animate(ul, {
                    left: target
                });
            }
            items.onclick = e => {
                    if (e.target.className === 'btnPrev') {
                        index--;
                        show();
                    } else if (e.target.className === 'btnNext') {
                        index++;
                        show();
                    }
                }
                // ..........................................放大镜...........................................
            var goodsContainerLT = $('.goodsContainerLT');
            magnifying.initialize(goodsContainerLT);
            goodsContainerLT.on('mouseover', function() { //鼠标移入事件
                magnifying.into(src);
            });
            goodsContainerLT.on('mouseout', function() { //鼠标移出
                magnifying.leave();
            });
            goodsContainerLT.on('mousemove', function(e) { //鼠标移动
                magnifying.mover(e);
            });
        })
    })
})