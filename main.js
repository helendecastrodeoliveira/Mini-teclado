
// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }

// let teclaPom = document.querySelector('.tecla_pom');
// teclaPom.onclick = tocaSomPom;

function tocaSom() {
    const listaDeSons = document.querySelectorAll('audio');
    for (let som of listaDeSons) {
        som.play();
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let tecla of ListaDeTeclas){
    tecla.onclick = tocaSom;
}




