define(["jquery"], function($) {
    $(function() {
        //轮播图
        var ul = document.querySelector('.scollBanner');
        //获取所有的li 
        var li = ul.children;
        var len = ul.children.length;
        // 初始化:
        // 默认索引值
        var index = 0;
        // 添加页码
        var page = document.createElement('div');
        page.className = 'page';
        var content = '';
        // 往.page中添加页面
        for (let i = 1; i <= len; i++) {
            content += `<span>${i}</span>`;
        }
        page.innerHTML = content;
        var span = page.children;
        span[index].className = 'active';
        // 把page写入页面
        ul.appendChild(page);
        //动画效果
        var timer = setInterval(autoPlay, 2000);
        li[0].style.display = 'block';
        for (let i = 0; i < len; i++) {
            span[i].onclick = () => {
                index = i;
                li[i].style.display = 'block';
                span[i].className = 'active';
            }
        }

        function autoPlay() {
                for (let i = 0; i < len; i++) {
                    if (i === index) {
                        li[i].style.display = 'block';
                        page.children[i].className = 'active';
                    } else {
                        li[i].style.display = 'none';
                        // 高亮页码
                        page.children[i].className = '';
                    }
                }
                index++;
                if (index >= len) {
                    index = 0;
                } else if (index < 0) {
                    index = len - 1;
                }
            }
            // 鼠标移入移出
        ul.onmouseover = () => {
            clearInterval(timer);
        }
        ul.onmouseout = () => {
                timer = setInterval(autoPlay, 2000)
            }
            //购物车信息
        var accountName = Cookie.get('uAccount');
        $.ajax({
            type: 'POST',
            url: 'api/goodsCarShow.php', //这里是请求的后台地址
            data: {
                'accountName': accountName
            },
            dataType: 'json',
            success: function(json) {
                var carGoods = "";
                var data_content = json.data_content;
                var goodsNum = 0;
                $.each(data_content, function(index, array) {
                    carGoods += `<li class="clearfix" data-gid="${array['goods_id']}"><p class="p1"><a href="html/details.html" class="liImg"><img src="${array['goods_img']}"></a></p><p class="p2"><a href="html/details.html" class="goodsName">${array['goods_name']}</a>${array['goods_color']}${array['goods_size']}码</p><p class="price p3">${array['goods_totalPrice']}</p><p class="p4"><button class="debtn btn00">-</button><input type="text" class="chengeNumInput" value="${array['goods_num']}"><button class="inbtn btn00">+</button></li>`;
                    goodsNum++
                });
                var bottom = `<p class="last"><span>一共<b>${goodsNum}</b>件商品</span><a href="html/goodsCar.html"></p>`;
                var gqty = `${goodsNum}`;
                $('.goodsqty').html(gqty);
                console.log(bottom)
                $('.car').append(bottom);
                $('.carContent').append(carGoods);
                // console.log(666)
            }
        });
        //ajax生成动态品牌
        $.ajax({
            type: 'POST',
            url: 'api/index.php',
            dataType: 'json',
            success: function(json) {
                var data_content = json.data_content;
                var brand = '';
                $.each(data_content, function(index, array) {
                    brand += `<li class="clearfix brandLi" data-gid="${array['brand_id']}"><a href="html/goodsList.html"><img src="${array['brand_logo']}"></a></li>`;
                });
                $('.otherBrand').append(brand);
                $('.guidBrand').append(brand);
            }
        });
        //将相关数据库的数据读取到首页
        $.ajax({
            type: 'POST',
            url: 'api/women.php',
            dataType: 'json',
            success: function(json) {
                var data_content = json.data_content;
                var womenGoods = '';
                $.each(data_content, function(index, array) {
                    womenGoods += `<li data-gid="${array['goods_id']}"><a href="html/goodsList.html"><img src="${array['goods_img']}"></a></li>`;
                });
                $('.women').append(womenGoods);
            }
        });
        $.ajax({
            type: 'POST',
            url: 'api/man.php',
            dataType: 'json',
            success: function(json) {
                var data_content = json.data_content;
                var manGoods = '';
                $.each(data_content, function(index, array) {
                    manGoods += `<li data-gid="${array['goods_id']}"><a href="html/goodsList.html"><img src="${array['goods_img']}"></a></li>`;
                });
                $('.man').append(manGoods);
            }
        });
        $.ajax({
            type: 'POST',
            url: 'api/sports.php',
            dataType: 'json',
            success: function(json) {
                var data_content = json.data_content;
                var sportsGoods = '';
                $.each(data_content, function(index, array) {
                    sportsGoods += `<li data-gid="${array['goods_id']}"><a href="html/goodsList.html"><img src="${array['goods_img']}"></a></li>`;
                });
                $('.sports').append(sportsGoods);
            }
        });
        $.ajax({
            type: 'POST',
            url: 'api/children.php',
            dataType: 'json',
            success: function(json) {
                var data_content = json.data_content;
                var childrenGoods = '';
                $.each(data_content, function(index, array) {
                    childrenGoods += `<li data-gid="${array['goods_id']}"><a href="html/goodsList.html"><img src="${array['goods_img']}"></a></li>`;
                });
                $('.child').append(childrenGoods);
            }
        });
    });
});