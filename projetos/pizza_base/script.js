let modalQt = 1; // QUANTIDADE DO PRODUTO
let modalKey = 0; // INDICE REFERENTE A PIZZA NO ARRAY
let cart = []; // CARRINHO DE COMPRAS

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

        modalKey = key;

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
const closeModal = () => {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

// FUTILIZANDO A FUNÇAO FECHAR O MODAL NOS BOTOES
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
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

// ADICIONANDO FUNÇÃO ADICIONAR AO CARRINHO NO BOTAO
c('.pizzaInfo--addButton').addEventListener('click', () => {
    // PEGANDO O TAMANHO DA PIZZA
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
    // CRIANDO UM IDENTIFICADOR PARA AS PIZZAS CONTENDO ID E TAMANHO PARA COMPARAR COM OUTRO PRODUTO DO CARRINHO A FIM DE NAO REPETIR O MESMO PRODUTO
    let identifier = pizzaJson[modalKey].id + '@' + size;
    // FAZENDO UMA BUSCA NO CARRINHO CHECANDO SE O IDENTIFICADOR SE REPETE, SE SIM ELE DEVOLVE O PROPRIO OBJETO, SE NAO DEVOLVE ' -1 '
    let key = cart.findIndex((item) => item.identifier == identifier);

    // SE O IDENTIFICADOR SE REPETIR (NO CASO, SE A RESPOSTA DO FINDINDEX FOR MAIOR QUE -1)
    if (key > -1) {
        // IRÁ ATUALIZAR APENAS A QUANTIDADE DO PRODUTO NO CARRINHO E NÃO REPETÍ-LO
        cart[key].qt += modalQt;
    } else {
        // SE NÃO REPETIR ELE ADICIONA O PRODUTO NO CARRINHO, FAZENDO UM PUSH COM O OBJETO DAS INFORMAÇÕES DO PRODUTO
        cart.push({
            identifier: identifier,
            id: pizzaJson[modalKey].id,
            size: size,
            qt: modalQt
        });
    };

    // ATUALIZA O CARRINHO
    updateCart();

    // FECHA O MODAL ASSIM QUE O BOTÃO DE ADICONAR AO CARRINHO FOR CLICADO
    closeModal()
})

// ------------- MOBILE -----------------
// ADICONANDO FUNCAO ABRIR O CARRINHO NO BOTAO CARRINHO NO MOBILE
c('.menu-openner').addEventListener('click', () => {
    // APENAS SE TIVER ALGUM ITEM NO CARRINHO QUE SERA POSSIVEL ABRIR O MESMO
    if (cart.length > 0) {
        c('aside').style.left = '0';
    }
})

// ------------- MOBILE -----------------
// ADICONANDO FUNCAO FECHAR O CARRINHO NO BOTAO CARRINHO NO MOBILE
c('.menu-closer').addEventListener('click', () => {
    c('aside').style.left = '100vw';
})

// FUNCÇÃO QUE ATUALIZA O CARRINHO
const updateCart = () => {
    c('.menu-openner span').innerHTML = cart.length;
    // SE TIVER ALGUM ITEM NO CARRINHO, OU SEJA, SE HOUVER ALGUM OBJETO DENTRO DO ARRAY CART:
    if (cart.length > 0) {
        // O CARRINHO APARECE NA TELA
        c('aside').classList.add('show');
        c('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        // PASSANDO POR CADA ITEM DO CARRINHO
        for (let i in cart) {
            // ATRAVES DO ID DO PRODUTO QUE CONTEM NO MEU CARRINHO 'cart[i].id', PROCURAR NA ARRAY 'pizzaJson' O OBJETO QUE CONTENHA O MESMO ID, TRAZENDO ASSIM O OBJETO INTEIRO CONTENDO AS INFORMAÇÕES A SEREM INSERIDAS
            let pizzaItem = pizzaJson.find(item => item.id == cart[i].id);

            // SUBTOTAL DO CARRINHO
            subtotal += pizzaItem.price * cart[i].qt;

            // CLONANDO O MODELO DE CARRINHO DO HTML
            let cartItem = c('.models .cart--item').cloneNode(true);
            // VARIAVEL CRIADA PARA ARMAZENAR O TAMANHO DO PIZZA
            let pizzaSizeName;
            // SWITCH CRIADO PARA DAR UMA NOMENCLATURA A CADA SIZE RECEBIDO, O SIZE É RECEBIDO COMO UM NUMERO E ATRAVES DO SWITCH É DADO A ELE OS TAMANHOS P, M, G
            switch(cart[i].size) {
                case 0:
                    pizzaSizeName = 'P'
                    break;
                case 1:
                    pizzaSizeName = 'M'
                    break;
                case 2:
                    pizzaSizeName = 'G'
                    break;
            }
            // VARAIAVEL COM TEMPLATE STRING CONTENDO O NOME DA PIZZA E O TAMANHO DA PIZZA 
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            // INSERINDO AS INFORMAÇÕES (IMG, NOME E QUANTIDADE) NO HTML
            cartItem.querySelector('img').src = pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;

            // ADICIONANDO A FUNÇÃO DE SOMAR E SUBTRAIR A QUANTIDADE SELECIONADA DO ITEM NO CARRINHO
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                // CONDIÇÃO PARA SUBTRAIR APENAS SE FOR MAIOR QUE 1
                if (cart[i].qt > 1) {
                    cart[i].qt--;
                } else {
                    // CASO SEJA MENOR QUE 1 TIRAR PRODUTO DA ARRAY CART, OU SEJA TIRAR PRODUTO DO CARRINHO
                    cart.splice(i, 1);
                }
                // ATUALIZAR CARRINHO
                updateCart();
            });

            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++;
                // ATUALIZAR CARRINHO
                updateCart();
            });

            // CRIANDO O ITEM DO CARRINHO DE FATO NA TELA
            c('.cart').append(cartItem);
        }

        // DESCONTO DO CARRINHO
        desconto = subtotal * 0.1;
        // TOTAL DA COMPRA
        total = subtotal - desconto;

        // INSERINDO INFORMAÇÕES DO SUBTOTAL, DESCONTO E TOTAL DA COMPRA NO HTML DO CARRINHO
        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

    } else {
        // SE NÃO TIVER NENHUM ITEM NO CARRINHO, OU SEJA, SE NÃO HOUVER ALGUM OBJETO NA ARRAY CART:
        c('aside').classList.remove('show');

        // ------------- MOBILE -----------------
        // CASO NAO TENHA NADA NO CARRINHO, O MESMO IRA FECHAR
        c('aside').style.left = '100vw';
    }
}