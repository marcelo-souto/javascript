// CLOANADO O ELEMNTO MODELO, INSERINDO A IMAGEM NA TELA
games.map((item, index) => {
    let gameArea = document.querySelector('.models .slider--item').cloneNode(true);
    
    gameArea.setAttribute('data-game', index)
    gameArea.style.background = `url(${item.image})`;
    gameArea.querySelector('.title').innerHTML = item.title;
    gameArea.querySelector('.description').innerHTML = item.description;
    

    document.querySelector('.slider--width').append(gameArea);
})

let slide = true;

let totalSlides = document.querySelectorAll('.slider--width .slider--item').length; /* QUANTIDADE DE IMAGENS*/
let currentSlide = 0; /* INDICE DO SLIDE ATUAL A SER DESTAQUE NA TELA*/

document.querySelector('.slider--width').style.width = `calc(100vw*${totalSlides})`;
document.querySelector('.slider--width').style.height = `${document.body.clientHeight - 70}px`;

// CRIANDO OS DOTS CONFORME A QUANTIDADE DE IMAGENS E ADICIONADO UM INDICE A CADA
const insertDots = () => {
    let html = '';

    for (let i=0; i < totalSlides; i++) {
        if (i == 0) {
            html+= `<i class="fa fa-circle slider--dot marked" data-slide="${i}" aria-hidden="true"></i>`;
        } else {
            html+= `<i class="fa fa-circle slider--dot" data-slide="${i}" aria-hidden="true"></i>`;
        }
    }

    document.querySelector('.slider--dots').innerHTML = html
}
insertDots()
// INSERINDO EVENTO DE CLIQUE EM CADA DOT E LINKANDO AS IMAGENS A SEUS RESPECTIVOS DOTS
document.querySelectorAll('.slider--dot').forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = dot.getAttribute('data-slide');
        slide = false
        updateMargin()
    })
})
// VOLTAR A IMAGEM ANTERIOR
const goPrev = () => {
    currentSlide--;
    slide = false
    updateMargin()
};
// PASSAR PARA A PROXIMA IMAGEM
const goNext = () => {
    currentSlide++;
    slide = false
    updateMargin()
};
// ADICONAR MARGEM PARA PASSAR IMAGEM E ADICIONAR A MARCAÇÃO DA BOLINHA
const updateMargin = () => {

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }

    let newMargin = (currentSlide * document.querySelector('.slider--width .slider--item').clientWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
    
    document.querySelector('.marked').classList.remove('marked')
    document.querySelector(`[data-slide="${currentSlide}"]`).classList.add('marked')
};
// ADICONANDO EVENTO AOS BOTOES
document.querySelector('.slider--control:first-child').addEventListener('click', goPrev)
document.querySelector('.slider--control:nth-child(2)').addEventListener('click', goNext)
// FAZENDO AS IMAGENS PASSAREM AUTOMATICAMENTE
setInterval(() => {
    if (slide) {
        currentSlide++
        updateMargin()
    } else {
        slide = true;
    }
}, 6000)