/* 
 * @Author: Marte
 * @Date:   2018-05-31 15:50:55
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-04 13:57:03
 */
require.config({
    //baseUrl:"js",
    paths: {
        'jquery': '../lib/jquery-3.3.1',
        'moduleCore': '../module/module',
        'moduleToIndex': '../module/moduleToIndex',
        'common': 'common',
        'details': 'details',
        'goodsList': 'goodsList',
        'index': 'index',
        'listToDetails': 'listToDetails',
        'page': 'page',
        'userAccountShow': 'userAccountShow',
        'car': 'goodsCarShow',
        'change': 'carGoodsChange',
        'magnifying': 'magnifying'
    },
    // 设置依赖关系
    shim: {
        'listToDetails': {
            deps: ["page"]
        }
    }
});