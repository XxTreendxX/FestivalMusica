document.addEventListener('DOMContentLoaded', function(){
    navegacionFija()
    crearGaleria();
})

function navegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        }
        else{
            header.classList.remove('fixed')
        }
    })
}

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
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    //cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(img);
    modal.appendChild(cerrarModalBtn)

    //agregar al html
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    setTimeout(() => {
        modal?.remove()
    },500)
    const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    
}