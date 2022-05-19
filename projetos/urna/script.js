let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let numeros = document.querySelector('.d-1-3');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let teclas = document.querySelectorAll('[data-tcl]')

let etapaAtual = 0;
let numero = '';
let branco = false;
let votos = [];

function comecarEtapa () {
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
    numero = '';
    branco = false;

    for (let i = 0; i < etapa.numeros; i++) {

        if (i === 0) {
            numeroHTML += `<div class="numero pisca"></div>`;
        } else {
            numeroHTML += `<div class="numero"></div>`;
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    numeros.innerHTML = numeroHTML
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
}

function atualizaInterface () {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter(item =>{
        if (item.numero === parseInt(numero)) {
            return true
        } else {
            return false
        }
    });

    let fotosHTML = '';

    if (candidato.length > 0) {
        candidato = candidato[0]
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`;
        aviso.style.display = 'block';

        for (let foto in candidato.fotos) {
            if (candidato.fotos[foto].small) {
                fotosHTML += `<div class="d-1-image small">
                            <img src="images/${candidato.fotos[foto].url}" alt="" srcset="">
                            ${candidato.fotos[foto].legenda}
                        </div>`
            } else {
                fotosHTML += `<div class="d-1-image">
                                <img src="images/${candidato.fotos[foto].url}" alt="" srcset="">
                                ${candidato.fotos[foto].legenda}
                            </div>`
            }
        }

        lateral.innerHTML = fotosHTML;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `<div class="aviso--grande pisca">VOTO NULO</div>`
    }
}

teclas.forEach( tecla => {
    tecla.addEventListener('click', () => {
        let  n = tecla.getAttribute('data-tcl')

        let elNumero = document.querySelector('.numero.pisca');

        document.querySelector('[src="somtecla.mp3"]').play()

        if (elNumero !== null) {
            elNumero.innerHTML = n;
            numero = `${numero}${n}`;

            elNumero.classList.remove('pisca');
            if (elNumero.nextElementSibling != null) {
            elNumero.nextElementSibling.classList.add('pisca')
            } else {
                atualizaInterface()
            }
        }
    })
});

document.querySelector('.botao--corrige').addEventListener('click', comecarEtapa)

document.querySelector('.botao--branco').addEventListener('click', () => {
    numero = '';
    branco = true;

    seuVotoPara.style.display = 'block';
    numeros.innerHTML = '';
    descricao.innerHTML = `<div class="aviso--grande pisca">VOTO EM BRANCO</div>`
    aviso.style.display = 'block'; 
    lateral.innerHTML = '';
})

document.querySelector('.botao--confirma').addEventListener('click', () => {
    etapa = etapas[etapaAtual];

    let votoConfirmado = false;
   
    if (branco === true) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        })
    } else if (numero.length === etapa.numeros) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        })
    }

    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa()
        } else {
            document.querySelector('[src="confirmar.mp3"]').play()
            document.querySelector('.tela').innerHTML = `<div class="aviso--grande fim pisca">FIM</div>`
            console.log(votos)
        }
    }
})

comecarEtapa()
