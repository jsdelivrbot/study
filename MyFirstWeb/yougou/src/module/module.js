/* 
* @Author: Marte
* @Date:   2018-05-28 10:14:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-03 15:10:07
*/

/* 
* @Author: Marte
* @Date:   2018-05-28 09:48:44
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-28 10:12:19
*/
define(["jquery"],function($){
    jQuery.fn.extend({
        //js
        xtopSection: function(option) {
            return this.each(function() {
                //html
                $.ajax({
                    type: "get",
                    url: "../module/topSection/topSection.html",
                    success: function(data) {
                        // $('h3').html(data);
                        $(this).html(data)
                    }.bind(this)
                });
                //js
                $.ajax({
                    type: "get",
                    url: "../js/base.js",
                    success: function(data) {
                        $("body script").append(data)
                    }.bind(this)
                });
                $.ajax({
                    type: "get",
                    url: "../module/topSection/topSection.js",
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
                    url: "../module/buttomSection/buttomSection.html",
                    success: function(data) {
                        // $('h3').html(data);
                        $(this).html(data)
                    }.bind(this)
                });
                $.ajax({
                    type: "get",
                    url: "../module/buttomSection/buttomSection.js",
                    success: function(data) {
                        $("body script").append(data)
                    }.bind(this)
                });
            });
        },
        xtopToLogin:function(option) {
            return this.each(function() {
                //html
                $.ajax({
                    type: "get",
                    url: "../module/topSection/topToLogin.html",
                    success: function(data) {
                        // $('h3').html(data);
                        $(this).html(data)
                    }.bind(this)
                });
                $.ajax({
                    type: "get",
                    url: "../module/topSection/topSection.js",
                    success: function(data) {
                        $("body script").append(data)
                    }.bind(this)
                });
            });
        },
        xpagination:function(option) {
            return this.each(function() {
                //html
                $.ajax({
                    type: "get",
                    url: "../module/pagination/pagination.html",
                    success: function(data) {
                        // $('h3').html(data);
                        $(this).html(data)
                    }.bind(this)
                });
                $.ajax({
                    type: "get",
                    url: "../module/pagination/pagination.js",
                    success: function(data) {
                        $("body script").append(data)
                    }.bind(this)
                });
            });
        }
        
    });
})