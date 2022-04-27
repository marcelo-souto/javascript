function digitou(e) {
    if (e.keyCode == 13 && e.ctrlKey == true ) { // Tecla Enter e Ctrl digitadas juntamente
    let texto = document.getElementById('campo').value;
    console.log(texto)
    }
}

