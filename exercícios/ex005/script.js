// ADIÇÃO

function somar(x, y) {
  return (total = x + y);
}

console.log(somar(40, 6));

// SUBTRAÇÃO

function subtrair(x, y) {
  return (total = x - y);
}

console.log(subtrair(10, 5));

// MULTIPLICAÇÃO

function multiplicar(x, y) {
  return (total = x * y);
}

console.log(multiplicar(10, 5));

// DIVISÃO

function dividir(x, y) {
  return (total = x / y);
}

console.log(dividir(10, 5));

// PAR OU IMPAR

function parimp(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

// MOSTRAR E ESCONDER UMA DIV

const div = document.querySelector("div")
const btn = document.querySelector('button')

function mostrar() {
  if (div.classList.contains("hidden")) {
    div.classList.remove("hidden");
    div.classList.add("show");
    btn.innerHTML = 'Esconder'
  } else {
    div.classList.remove("show");
    div.classList.add("hidden");
    btn.innerHTML = 'Mostrar'
  }
}

btn.addEventListener('click', mostrar);

