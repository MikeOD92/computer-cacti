const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const exec = require('child_process').exec;
//const { isBuffer } = require('util'); // what are these They've show up a few times...
// not always the same but i've had maybe 2 or 3 of them come up. this is not code i've written so i have no idea whats happening. 
 

gulp.task('default', (cb) =>{
    exec('npm run style', (err, stdout, stderr)=>{
        if(!err){
            console.log(stdout)
            console.log(stderr)
        } else {
            cb(err)
        }
    })
    gulp.watch('./src/css/**/*.scss', gulp.task('style'))
    nodemon({
        script:'server.js',
        env: {NODE_ENV: 'development'}
    })
    cb();
})





gulp.task('style', (cb)=>{
    gulp.src('./src/css/**/*.scss')
        .pipe(
            sass({})
            .on('error', sass.logError)
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist:['last 2 versions']
            })
        )
        .pipe(
            gulp.dest('./public/css')
        )
        cb();
})