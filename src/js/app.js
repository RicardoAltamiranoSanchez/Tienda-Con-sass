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

}
}
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

