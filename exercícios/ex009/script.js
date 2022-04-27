// Array

let carros = [
    'Uno',
    'Palio',
    'Corolla',
    'Ferrari'
]

// Objeto

let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar: function () {
        console.log(this.nome+' '+this.modelo+' ligado')
        console.log('VRUM VRUM');
        this.ligado = true;
    },
    acelerar: function () {
        if (this.ligado == true) {
        console.log(this.nome+' '+this.modelo+' acelerando')
        } else {
            console.log(this.nome+' '+this.modelo+' está desligado, não posso acelerar')
        }
    },
    desligar: function () {
        console.log(this.nome+' '+this.modelo+' desligado')
    }
}

carro.ligar();
carro.acelerar();

// Array com Objetos

let carrinhos = [
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Toyota', modelo:'Corolla'}
]