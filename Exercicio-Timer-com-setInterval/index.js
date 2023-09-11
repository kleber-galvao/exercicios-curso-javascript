function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () { //soma de 1 em 1 segundo na variavel segundos
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos); // deixa formatado no formato horario no timer
    }, 1000);
};

iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado'); // remove classe pausado criado no css
    clearInterval(timer); // para contagem
    iniciaRelogio();
});

pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado'); // adiciona classe pausado criado no css
    clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});

