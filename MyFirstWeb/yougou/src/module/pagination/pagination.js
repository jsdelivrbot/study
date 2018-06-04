/* 
* @Author: Marte
* @Date:   2018-06-03 00:40:55
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-03 00:42:06
*/

var curPage;        //当前页数
    var totalItem;      //总记录数
    var pageSize;       //每一页记录数
    var totalPage;      //总页数
    // document.addEventListener('DOMContentLoaded', turnPage, true);
    //获取分页数据
    function turnPage(page){
      $.ajax({
        type: 'POST',
        url: '../api/page.php',     //这里是请求的后台地址
        data: {'pageNum':page},
        dataType: 'json',
        beforeSend: function() {
          $(".goodsShow ul").append("加载中...");
        },
        success: function(json) {
          $(".goodsShow ul").empty();       //移除原来的分页数据
          totalItem = json.totalItem;
          pageSize = json.pageSize;
          curPage = page;
          totalPage = json.totalPage;
          $('.totalItem').html(totalItem);
          $('.percentage').html(curPage+"/"+totalPage);
          var data_content = json.data_content;
          var data_html = "";
          $.each(data_content,function(index,array) {     //添加新的分页数据
            data_html += `<li data-gid="${array['goods_id']}" id="goods"><div><a href="details.html"><img src="../${array['goods_img']}" data-gid="${array['goods_id']}"></a></div><p data-gid="${array['goods_id']}"><a href="details.html" data-gid="${array['goods_id']}"></a>限时抢${array['goods_sale']}</p><p data-gid="${array['goods_id']}"><a href="details.html" title="${array['goods_name']}" data-gid="${array['goods_id']}">${array['goods_name']}</a></p><p data-gid="${array['goods_id']}"><span data-gid="${array['goods_id']}">￥${array['goods_sale']}</span><del data-gid="${array['goods_id']}">￥${array['goods_price']}</del></p></li>`;
          });
     
          $(".goodsShow ul").append(data_html);
        },
        complete: function() {    //添加分页按钮栏
          getPageBar();
        },
        error: function() {
          alert("数据加载失败");
        }
      });
    }
     
    //获取分页条（分页按钮栏的规则和样式根据自己的需要来设置）
    function getPageBar(){
      if(curPage > totalPage) {
        curPage = totalPage;
      }
      if(curPage < 1) {
        curPage = 1;
      }
     
      pageBar = "";
     
      //如果不是第一页
      if(curPage != 1){
        pageBar += "<span class='pageBtn'><a href='javascript:turnPage(1)'>首页</a></span>";
        pageBar += "<span class='pageBtn'><a href='javascript:turnPage("+(curPage-1)+")'><<</a></span>";
      }
     
      //显示的页码按钮(5个)
      var start,end;
      if(totalPage <= 5) {
        start = 1;
        end = totalPage;
      } else {
        if(curPage-2 <= 0) {
            start = 1;
            end = 5;
        } else {
            if(totalPage-curPage < 2) {
                start = totalPage - 4;
                end = totalPage;
            } else {
                start = curPage - 2;
                end = curPage + 2;
            }
        }
      }
     
      for(var i=start;i<=end;i++) {
        if(i == curPage) {
            pageBar += "<span class='pageBtn-selected'><a href='javascript:turnPage("+i+")'>"+i+"</a></span>";
        } else {
            pageBar += "<span class='pageBtn'><a href='javascript:turnPage("+i+")'>"+i+"</a></span>";
        }
      }
       
      //如果不是最后页
      if(curPage != totalPage){
        pageBar += "<span class='pageBtn'><a href='javascript:turnPage("+(parseInt(curPage)+1)+")'>>></a></span>";
        pageBar += "<span class='pageBtn'><a href='javascript:turnPage("+totalPage+")'>尾页</a></span>";
      }
         
      $("#pageBar").html(pageBar);
    }
     
    //页面加载时初始化分页
    $(function() {
      turnPage(1);
    });