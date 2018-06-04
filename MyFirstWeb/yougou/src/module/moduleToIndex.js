/* 
* @Author: Marte
* @Date:   2018-05-28 11:32:07
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-31 17:09:40
*/
define(["jquery"],function($){
    jQuery.fn.extend({
        //js
        xtopSection: function(option) {
            return this.each(function() {
                //html
                $.ajax({
                    type: "get",
                    url: "module/topSection/topSection.html",
                    success: function(data) {
                        // $('h3').html(data);
                        $(this).html(data)
                    }.bind(this)
                });
                //js
                $.ajax({
                    type: "get",
                    url: "js/base.js",
                    success: function(data) {
                        $("body script").append(data)
                    }.bind(this)
                });
            });
        },
        xbuttomSection: function(option) {
            return this.each(function() {
                //html
                $.ajax({
                    type: "get",
                    url: "module/buttomSection/buttomSection.html",
                    success: function(data) {
                        // $('h3').html(data);
                        $(this).html(data)
                    }.bind(this)
                });
            });
        }
    });
})