let date = new Date();
date = date.getHours();

let demo = document.getElementById("demo");

function greetings() {
  if (date >= 0 && date < 6) {
    demo.innerHTML = "Boa Madrugada";
  } else if (date >= 6 && date < 12) {
    demo.innerHTML = "Bom Dia";
  } else if (date >= 12 && date < 18) {
    demo.innerHTML = "Boa Tarde";
  } else if (date >= 18 && date <= 23) {
    demo.innerHTML = "Boa Noite";
  }
}

greetings();

let cores = [];

function digitouEnter(e) {
  if ((e.keyCode = 13)) {

    for (let i = 1; i <= 3; i++) {
      cores.push(Math.floor(Math.random() * 255).toString());
    }

    document.querySelector("#demo2").innerHTML =
      "rgb (" + cores[0] + ", " + cores[1] + ", " + cores[2] + ")";

    document.querySelector("body").style.backgroundColor =
      "rgb(" + cores[0] + ", " + cores[1] + ", " + cores[2] + ")";

    cores.splice(0, 3);
  }
}
