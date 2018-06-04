/* 
 * @Author: Marte
 * @Date:   2018-05-31 16:07:22
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:59:01
 */
require(['config'], function() {
    require(['jquery', 'goodsList', 'page', 'listToDetails', 'moduleCore', 'common', 'car'], function($, goodsList, page, listToDetails, moduleCore, common, car) {
        // console.log($("xtopSection"));
        $("xtopSection").xtopSection();
        $("xbuttomSection").xbuttomSection();
        $("xpagination").xpagination();
    })
})