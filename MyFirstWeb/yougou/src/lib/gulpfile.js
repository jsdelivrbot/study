/* 
* @Author: Marte
* @Date:   2018-05-25 22:24:42
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-26 19:15:28
*/

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// //定义任务
// gulp.task("sass", function() {
//     //导入文件
//     gulp.src("sass/*.scss")
//         //转代码
//         .pipe(sass().on('error', sass.logError))
//         //导出文件
//         .pipe(gulp.dest("css"));
// });
// var browserSync = require('browser-sync');
// gulp.task('myserver', () => {
//     // 开启服务器
//     browserSync({
//         server: './yougou',
//         // 代理服务器
//         //proxy:'http://localhost:10086',
//         // 端口
//         port: 10087,
//         files: ['scss/*.scss']
//     });

//     // 监听sass文件修改
//     gulp.watch('scss/*.scss', ['sass']);
// });

// // //gulp命令时候 敲命令时候触发任务
// gulp.task("default", ['sass','myserver']);
// 
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
    gulp.src('../sass/*')
    .pipe(sass())
    .pipe(gulp.dest('../css/'))
});
gulp.watch('../sass/*.scss', ['sass']);
gulp.task("default", ['sass']);