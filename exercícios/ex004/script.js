// document.getElementById('principal')
// document.getElementsByClassName("lista")
// document.getElementsByTagName('....')
// document.getElementsByName('.....')
// document.querySelector('lista')

const box = document.querySelector("#box");
const nomecor = document.querySelector("#nomecor");

function yellow() {
  box.classList.remove("red", "purple", "blue", "orange");
  box.classList.add("yellow");
  nomecor.innerHTML = "#F9C80E";
}
function orange() {
  box.classList.remove("red", "purple", "blue", "yellow");
  box.classList.add("orange");
  nomecor.innerHTML = "#F86624";
}
function red() {
  box.classList.remove("purple", "blue", "yellow", "orange");
  box.classList.add("red");
  nomecor.innerHTML = "#EA3546";
}
function purple() {
  box.classList.remove("red", "blue", "yellow", "orange");
  box.classList.add("purple");
  nomecor.innerHTML = "#662E9B";
}
function blue() {
  box.classList.remove("red", "purple", "yellow", "orange");
  box.classList.add("blue");
  nomecor.innerHTML = "#43BCCD";
}

const body = document.querySelector("body");
const btn = document.querySelector("#btn");

function trocar() {
  if (
    body.classList.contains("whitemode") &&
    btn.classList.contains("whitemode")
  ) {
    btn.classList.remove("whitemode");
    btn.classList.add("darkmode");
    btn.innerHTML = "Dark Mode";
    body.classList.remove("whitemode");
    body.classList.add("darkmode");
  } else {
    btn.classList.remove("darkmode");
    btn.classList.add("whitemode");
    btn.innerHTML = "Light Mode";
    body.classList.remove("darkmode");
    body.classList.add("whitemode");
  }
}
