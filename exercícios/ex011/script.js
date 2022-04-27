let email = 'marcelosouto676@gmail.com';
let resultado = email.indexOf('@');

if (resultado > -1) {
    resultado = 'Email Válido';
} else {
    resultado = 'Email Invalido'
}

console.log(resultado);

let n = '10.54321556845';
let res = parseFloat(n).toFixed(2);

console.log(res);

// let lista = 'Ovo Manteiga Acucar Fermento';
// let lista2 = 'Colher Pote Liquidificador'
// lista = lista.split(' ');
// lista2 = lista2.split(' ');

// lista.shift();
// lista.pop();
// lista.push('Sal');
// lista.splice(1,1);


// lista = lista.concat(lista2);

// lista.sort();
// lista.reverse();

// console.log(lista)

let lista = [
    {id: 1, email: 'marcelo@gmail.com', nome: 'Marcelo', sobrenome: 'Souto'},
    {id: 2, email: 'luiz@gmail.com', nome: 'Luiz', sobrenome: 'Cardoso'},
    {id: 3, email: 'mauricio@gmail.com', nome: 'Mauricio', sobrenome: 'de Souza'}
];

let pessoa;

pessoa = lista.find(function(item){
    return (item.id == 2) ? true:false;
})

console.log(pessoa);


