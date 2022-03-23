var hora = 10;

if (hora < 12) {
    document.getElementById("result").innerHTML = "Bom Dia";
} else if (hora < 18) {
    document.getElementById("result").innerHTML = "Boa Tarde";
} else if (hora <= 23) {
    document.getElementById("result").innerHTML = "Boa Noite";
}

// if (hora >= 12 && hora < 18) {
//     document.getElementById("result").innerHTML = "Boa tarde";
// }