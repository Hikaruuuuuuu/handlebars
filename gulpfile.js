
var gulp = require('gulp'),
    server =require('gulp-webserver'),
    path = require('path'),
    fs = require('fs'),
    url = require('url');

gulp.task('server', function(){
    gulp.src('src')
        .pipe(server({
            port: 8000,
            middleware: function(req, res, next){
                var pathname = url.parse(req.url).pathname;
                if(pathname == '/favicon.ico'){
                    return res.end()
                }

                pathname = pathname == '/' ? 'index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
            }
        }))
})