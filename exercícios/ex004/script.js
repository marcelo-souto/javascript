// document.getElementById('principal')
// document.getElementsByClassName("lista")
// document.getElementsByTagName('....')
// document.getElementsByName('.....')
// document.querySelector('lista')

const box = document.querySelector("#box");
const nomecor = document.querySelector("#nomecor");

function yellow() {
  removeClass()
  box.classList.add("yellow");
  nomecor.innerHTML = "#F9C80E";
}
function orange() {
  removeClass()
  box.classList.add("orange");
  nomecor.innerHTML = "#F86624";
}
function red() {
 removeClass()
  box.classList.add("red");
  nomecor.innerHTML = "#EA3546";
}
function purple() {
  removeClass()
  box.classList.add("purple");
  nomecor.innerHTML = "#662E9B";
}
function blue() {
  removeClass()
  box.classList.add("blue");
  nomecor.innerHTML = "#43BCCD";
}

function removeClass() {
  box.classList.remove("red", "purple", "yellow", "orange", "blue")
}

function changeColorBox(e) {
  if (e.keyCode == 49 || e.keyCode == 97) {
    yellow()
  } else if (e.keyCode == 50  || e.keyCode == 98) {
    orange()
  } else if (e.keyCode == 51  || e.keyCode == 99) {
    red()
  } else if (e.keyCode == 52  || e.keyCode == 100) {
    purple()
  } else if (e.keyCode == 53  || e.keyCode == 101) {
    blue()
  }
}

const body = document.querySelector("body");
const btn = document.querySelector("#btn");

function changeColorMode(botao) {
  body.classList.toggle('darkmode')

  if (body.classList.contains('darkmode')) {
    btn.classList.add('darkmode');
    botao.innerHTML = 'Dark Mode';
  } else {
    btn.classList.remove('darkmode');
    botao.innerHTML = 'Light Mode'
  }
}

