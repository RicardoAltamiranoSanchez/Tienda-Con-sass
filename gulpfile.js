//se usa javascript para crear el codigo y se usa un callabck para indicar que el codigo a finalizado o la tarea a acabado
//para poder compliar la hoja de estilo de sass debemos importar los paquetes gul y  gulp-sass
//parallel sirve para ejecutar varias tareas al mismo tiempo

const {src,dest,watch,parallel}=require('gulp');
//dependencias css
const sass=require('gulp-sass')(require('sass'));//debemos ponerlos asi para que no nos marque error
//dependencia para qeu no nos detenga nuestra ejecucion cuando marca un error 
const plumber=require('gulp-plumber');
//imganes dependencias
const webp=require('gulp-webp');
//para aligerar las imagenes
const imagemin =require('gulp-imagemin');
const cache=require('gulp-cache');
//paa las imagenes version avif
const avif=require('gulp-avif');

function imagenes(done){
const opciones={
 optimatizationLevel:3
}
src('src/img/**/*.{png,jpg}').
pipe(cache(imagemin(opciones))).//esto es para aligerar las imagenes de formato png yjpg
pipe(dest('build/imagenes'));
done();
}

function convertirwebp(done){
const opciones={
  quality:50//quality seria la calidad de la imagen de podemos meter opciones
};
src('src/img/**/*.{png,jpg}').//indicamos la ruta de la carpeta y de decimos que imagenes nos debre de convertir la busca por el tipo de extension
pipe(webp(opciones)).
pipe(dest('build/imagenes'));//de decimos en donde guarde las imagenes
done();
}
//para version avif convertir

function convertirAvif(done){
const opciones={
  quality:50//quality seria la calidad de la imagen de podemos meter opciones

};


src('src/img/**/*.{png,jpg}').//indicamos la ruta de la carpeta y de decimos que imagenes nos debre de convertir la busca por el tipo de extension
pipe(avif(opciones)).
pipe(dest('build/imagenes'));//de decimos en donde guarde las imagenes
done();
}




//src es una funcion propia de gulp no ayuda a econtrar el archivo para copilar
function css(done){
//Indentificar archivos .scss a compilar src('src/sass/app.scss') solo indentifica el archivo app para que nos lea toda la sintaxis de todos los archivos
//debemos poner los astericos src('src/sass/**/*.scss')
src('src/sass/**/*.scss').
pipe(plumber()).
pipe(sass()).//pipe para indicar el sisgueiente cuando termine pasar al siguiente
pipe(dest('build/css'));//Almacenar de decimos que nos lo guarde en esa carpeta
//Copilar

done();

}
function javascript(done){
src('src/js/**/*.js')//buscamos los archivos con extnsion de javascript
.pipe(dest('build/js'));//lo almacenamos en la carpeta
done();

}
function dev(done){
watch('src/sass/**/*.scss',css);//el watch es para que noes escuche los cambios ponemos la ruta y despues la funcion que se va ejecutar
watch('src/js/**/*.js',javascript);
done();
}

exports.css=css;
exports.javascript=javascript
exports.convertirwebp=convertirwebp;
exports.imagenes=imagenes;
exports.convertirAvif=convertirAvif;
exports.dev=parallel(convertirAvif,imagenes,convertirwebp,javascript,dev);
//para poder compilar sass debemos instalar una dependencia de gulp
//seria esta npm install --save-dev gulp-sass