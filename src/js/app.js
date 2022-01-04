document.addEventListener('DOMContentLoaded',()=>{


IniciandoApp();


});




function IniciandoApp(){


CreandoGaleria();
//Creamos la navegacion smoll mosh
NavegacionMosh();
NavegacionFija();

}
//para poner la barra fija
const NavegacionFija=()=>{

const barra=document.querySelector('.Header');

const sobreFestival=document.querySelector('.sobre-festival');
// para arreglar ese salto al momento de poner el scroll fijo fija
const body=document.querySelector('body');


//leemos en que pocision esta el scroll para poner la nevgacion fija
window.addEventListener('scroll',()=>{
//la funcion getBoundingClientRect es para que nos ayude a decir en que pocision esta el elemento 
// console.log(sobreFestival.getBoundingClientRect());
if(sobreFestival.getBoundingClientRect().bottom < 0){
    barra.classList.add('fija');
     body.classList.add('body-scroll');
}else{
   barra.classList.remove('fija');
   body.classList.remove('body-scroll');

}
})
}
const NavegacionMosh=()=>{
//obtenemos todos los enlaces
const navegacion=document.querySelectorAll(".navegacion a");
//hacemos el evento debe hacerle All para que todo tengan la misma funcionalidad si no marca error
//lo metemos en un foreach para poder añadir a todos los enlaces
navegacion.forEach((enlace)=>{
//hacemos el evento
//e.target.attributes.href.value obtenesmo el valor del atributo 
//con attributes es para ver la propiedades
enlace.addEventListener('click',(e)=>{
e.preventDefault();
const resultado=e.target.attributes.href.value;
const seccion=document.querySelector(resultado);
//el scrollIntoView es una funcion para hacer que baje lento y adentro ponemos los parametos
seccion.scrollIntoView({ behavior: "smooth"});


    })
})
}
const CreandoGaleria=()=>{
const galeria=document.querySelector('.galeria-imagenes');
for(let i=1; i<=12; i++){
//mostramos las imagenes debemos meter el createElemet adentro para hacer una de cada imagen y luego guardarlass
const imagen=document.createElement('picture');//creamos un elemento para meter las imangenes cone l appendchield
imagen.innerHTML=`
   <source srcset="build/imagenes/thumb/${i}.avif" type="image/avif">
                <source srcset="build/imagenes/thumb/${i}.webp" type="image/webp">
              
                <img loading="lazy" witdh="200" heigth="300" src="buil/imagenes/thumb/${i}.jpg" />

`;
galeria.appendChild(imagen);//añadimos las imagenes con el appendchield
//para crear una imagen grande cuando de click 
//creamos un callback para poder enviar el parametro
imagen.addEventListener('click',()=>{mostrandoImagen(i)});



}}




//Creamos la funcion para mostrar las imagenes en grande
function mostrandoImagen(indice){



  const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/imagenes/grande/${indice}.avif" type="image/avif">
        <source srcset="build/imagenes/grande/${indice}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/imagenes/grande/${indice}.jpg" alt="imagen galeria">
    `;
  //para mostrar la imagen creamo un overlay 
   const overlay=document.createElement('div');
   overlay.classList.add('overlay');//añadimos una clase a nuestro elemento
    //para quitar el scroll y dando click se quite la imagen
   overlay.onclick=()=>{
      const body=document.querySelector('body');
    body.classList.remove('fijar-scroll');
     //cerramos laimagen 
     overlay.remove();
    }
   overlay.appendChild(imagen);
   //Creamos el boton de cerrar
    const cerrarModal=document.createElement('p');
    cerrarModal.textContent="X";
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick=()=>{
    //para desactivar el scrool y que siga funcionando
    const body=document.querySelector('body');
    body.classList.remove('fijar-scroll');
     //cerramos laimagen 
     overlay.remove();
    }
    overlay.appendChild(cerrarModal);
  //para mostrar la imagen enla pantalla 
  const body=document.querySelector('body');
   body.appendChild(overlay);
  //agregamos una clase para fijar el scroll
   body.classList.add("fijar-scroll");



}
