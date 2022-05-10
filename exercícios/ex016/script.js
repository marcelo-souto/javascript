// OPERADOR SPREAD (...)

let clientInfo = {
    nome: 'Marcelo',
    sobrenome: 'Souto',
    idade: 24
};

let clientNewInfo = {
    ...clientInfo,
    estado: 'RJ',
    municipio: 'Rio de Janeiro',
    bairro: 'Inhoaiba'
};

const adicionarInfo = info => {
    let novasInfo = {
        ...info,
        status: 0,
        token: 'hgbfiubhrugvbrouhguvnro9452656'
    };

    return novasInfo;
}

console.log(adicionarInfo({nome:'Marcelo', sobrenome:'Souto'}));

// OPERADOR REST (...)

function adicionar (nomes, ...novosNomes){
    novoConjunto = [
        ...nomes,
        ...novosNomes
    ]

    return novoConjunto;
}

let nomes = ['Luis','Roberto'];
let outros = adicionar(nomes, 'Mauricio', 'Antonio', 'Ricardo');

console.log(outros);