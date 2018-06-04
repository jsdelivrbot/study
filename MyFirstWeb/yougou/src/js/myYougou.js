/* 
 * @Author: Marte
 * @Date:   2018-05-31 17:49:39
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:59:40
 */
require(['config'], function() {
    require(['jquery', 'moduleCore', 'common', 'car'], function($, moduleCore, common, car) {
        $("xtopSection").xtopSection();
        $("xbuttomSection").xbuttomSection();
    })
})