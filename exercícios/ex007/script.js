const btn = document.querySelector(".scrollbtn");

function subirTela() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function mostrarBotao() {
  if (window.scrollY === 0) {
    btn.classList.add("hidden");
    btn.classList.remove("showing");
  } else {
    btn.classList.add("showing");
    btn.classList.remove("hidden");
  }
}

window.addEventListener("scroll", mostrarBotao);
btn.addEventListener("click", subirTela);