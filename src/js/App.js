document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})

function crearGaleria(){
    const CANTIDAD_IMG = 16;
    const galeria = document.querySelector('.galeria-img')
    
    for(let i=1; i<=CANTIDAD_IMG; i++){
        const img = document.createElement('IMG')
        img.src=`src/img/gallery/full/${i}.jpg`;
        img.alt = 'Imagen de galeria';
       

        //event handler
        img.onclick = function(){
            mostrarImg(i);
        }


        galeria.appendChild(img)
    }
}

function mostrarImg(i){

    const img = document.createElement('IMG')
    img.src=`src/img/gallery/full/${i}.jpg`;
    img.alt = 'Imagen de galeria';
       
    //GENERAL MODAL
    const modal = document.createElement('DIV');
    modal.classList.add('modal')
    modal.onclick = cerrarModal();
    modal.appendChild(img);

    //agregar al html
    const body = document.querySelector('body');
    body.appendChild(modal)

}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal?.remove()
}