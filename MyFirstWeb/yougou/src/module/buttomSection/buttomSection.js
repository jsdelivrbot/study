/* 
* @Author: Marte
* @Date:   2018-06-02 20:33:26
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-03 13:43:50
*/

$(function(){
    //ajax生成动态品牌
                $.ajax({
                        type: 'POST',
                        url: '../api/index.php',     
                        dataType: 'json',
                        success: function(json) {
                            var data_content = json.data_content;
                            var brand='';
                            $.each(data_content,function(index,array){
                                brand += `<li class="clearfix brandLi" data-gid="${array['brand_id']}"><a href="../html/goodsList.html"><img src="../${array['brand_logo']}"></a></li>`;
                            });
                            $('.guidBrand').append(brand);
                        }

                });
})