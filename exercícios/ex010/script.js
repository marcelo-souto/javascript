// --------------- SWITCH --------------------

let filho = 0;

switch (filho) {
  case 0:
    console.log("Não tem acesso ao bonus");
    break;
  case 1:
  case 2:
  case 3:
    console.log("Bonus de 10%");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Bonus de 20%");
    break;
  default:
    console.log("Bonus de 30%");
}

let dia = 7;
let diaNome = "";

switch (dia) {
  case 1:
    diaNome = "Segunda-feira";
    break;
  case 2:
    diaNome = "Terca-feira";
    break;
  case 3:
    diaNome = "Quarta-feira";
    break;
  case 4:
    diaNome = "Quinta-feira";
    break;
  case 5:
    diaNome = "Sexta-feira";
    break;
  case 6:
    diaNome = "Sabado";
    break;
  case 7:
    diaNome = "Domingo";
    break;
}

document.querySelector('#dia').innerHTML = 'Hoje é ' + diaNome;




// ---------------------- LOOP FOR ---------------------------

let texto ='';

for(let i = 0; i <= 10; i++) {
    texto += i + '<br>';
}


document.getElementById('demo').innerHTML = texto;





// ---------------------- LOOP FOR ARRAY ---------------------------

let ingredientes = ['Ovo', 'Farinha', 'Fermento', 'Manteiga', 'Cenoura'];

let html = '<ul>';

for(let ingrediente in ingredientes) {
    html = html + '<li>' + ingredientes[ingrediente] + '</li>';
}

html = html + '</ul>';

document.getElementById('demo2').innerHTML = html;





// ---------------------- LOOP WHILE ------------------------------------

let html2 = '';

let c = 1;
while ( c <= 10) {
  html2 = html2 + 'Numero é: '+c+'<br>';
  c++;
}

// for(c = 1; c <= 10; c++) { Mesma forma de escrever o while acima, porem, utilizando o for
//   html2 = html2 + 'Numero é: '+c+'<br>';
// }

document.getElementById('demo3').innerHTML = html2;