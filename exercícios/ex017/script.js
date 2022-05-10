// INCLUDES

let nomes = ['Marcelo','Luis','Roberto'];
console.log(nomes.includes('Marcelo'));

// REPEAT

let numero = '4'
console.log(numero.repeat(10))

// PAD START E PAD END
let tel = '971609165';
let ultdigts = tel.slice(-4);
let telMasc = ultdigts.padStart(9,'x')

console.log(telMasc)