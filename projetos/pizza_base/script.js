let modalQt = 1;

// VARIÁVEL COM FUNÇÃO DE APOIO PARA NÃO REPETIR A FUNCÃO 'QUERYSELECTOR'
const c = el => document.querySelector(el);
const cs = el => document.querySelectorAll(el);

// MAPEANDO O OBJETO PIZZAJSON
pizzaJson.map((item, index) => {

    // CLONANDO O MODELO DE DIV ONDE AS INFOS DO OBJETO SERAO INSERIDAS 
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    // INSERINDO O DATA-KEY EM CADA ITEM DO OBJETO
    pizzaItem.setAttribute('data-key', index)

    // INSERINDO AS INFOS DO OBJETO NA PAGINA
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2).replace('.',',')}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // INSERINDO O EVENTO DE CLIQUE AO CLICAR NA PIZZA PARA ABRIR O MODAL
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        // PEGANDO O NUMERO DO DATA-KEY DO ITEM
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        modalQt = 1;

        // INSERINDO AS INFORMAÇÕES DO ONJETO EM CADA LOCAL NO MODAL UTILIZANDO DATA-KEY DE CADA ITEM
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace('.',',')}`;

        // REMOVENDO A OPÇAO DE TAMANHO SELECIONADA
        c('.pizzaInfo--size.selected').classList.remove('selected');

        // INSERINDO OS TAMANHOS DAS PIZZAS
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            // COLOCANDO A OPÇAO SELECIONADA PARA GRANDE COMO PADRÃO
            if (sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        // RESETANDO A QUANTIDADE DE PRODUTOS
        c('.pizzaInfo--qt').innerHTML = modalQt;

        // MOSTRANDO DE FATO O MODAL NA TELA
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    })
    
    // APÓS MAPEADO, INSERINDO ITEM POR ITEM NA TELA
    c('.pizza-area').append(pizzaItem)
})

// FUNÇÃO PARA FECHAR O MODAL
const fecharModal = () => {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

// FUTILIZANDO A FUNÇAO FECHAR O MODAL NOS BOTOES
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', fecharModal);
})

// ADICIONANDO A FUNÇÃO DE SOMAR E SUBTRAIR A QUANTIDADE SELECIONADA DO ITEM
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    // CONDIÇÃO PARA NÃO SUBTRAIR QUANDO FOR IGUAL OU MENOR A 1
    if (modalQt > 1) {
        modalQt--;
        c('.pizzaInfo--qt').innerHTML = modalQt;
}})

c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;
})

// ADICIONANDO FUNCIONALIDADE DE SELECIONAR UMA OPÇÃO DE TAMANHO DO ITEM A PARTIR DE UM EVENTO DE CLIQUE
cs('.pizzaInfo--size').forEach((size) => {
    size.addEventListener('click', () => {
        // REMOVENDO A CLASS QUE SELECIONA A OPÇAO DE QUANTIDADE DE OUTRAS OPÇOES QUE JA TENHAM SIDO SELECIONADAS
        c('.pizzaInfo--size.selected').classList.remove('selected');
        // ADICONANDO A CLASS QUE SELECIONA A OPÇÃO DE QUANTIDADE
        size.classList.add('selected')
    })
   
})