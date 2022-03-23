const imagem = document.querySelector('.imagem')

function trocarAnimal (filename, animalname) {
    imagem.setAttribute('src', 'images/'+filename);
    imagem.setAttribute('data-animal', animalname);
}

function pegarAnimal () {
    let animal = imagem.getAttribute('data-animal');
    alert('O animal é: ' + animal);
}