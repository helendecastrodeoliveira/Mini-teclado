function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');


for (let i=0; ListaDeTeclas.length; i++){
    
    const tecla = ListaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
}
