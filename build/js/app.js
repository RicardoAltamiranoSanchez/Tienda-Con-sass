document.addEventListener('DOMContentLoaded',()=>{
IniciandoApp();

});

function IniciandoApp(){
CreandoGaleria();
}

const CreandoGaleria=()=>{
const galeria=document.querySelector('.galeria-imagenes');
for(let i=1; i<=12; i++){
//mostramos las imagenes debemos meter el createElemet adentro para hacer una de cada imagen y luego guardarlass
const imagenes=document.createElement('picture');//creamos un elemento para meter las imangenes cone l appendchield
imagenes.innerHTML=`
   <source srcset="build/imagenes/thumb/${i}.avif" type="image/avif">
                <source srcset="build/imagenes/thumb/${i}.webp" type="image/webp">
              
                <img loading="lazy" witdh="200" heigth="300" src="buil/imagenes/thumb/${i}.jpg" />

`;
//para crear una imagen grande cuando de click 
//creamos un callback para poder enviar el parametro
imagenes.onclick=function (){

mostrandoImagen(i);
}
galeria.appendChild(imagenes);//añadimos las imagenes con el appendchield
}
}
//Creamos la funcion para mostrar las imagenes en grande
function mostrandoImagen(indice){

  const imagenes = document.createElement('picture');
    imagenes.innerHTML = `
        <source srcset="build/imagenes/grande/${indice}.avif" type="image/avif">
        <source srcset="build/imagenes/grande/${indice}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/imagenes/grande/${indice}.jpg" alt="imagen galeria">
    `;
 

}

