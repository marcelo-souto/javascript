const enviar = async () => {
    let arquivo = document.querySelector('#arquivo').files[0];

    let body = new FormData();
    body.append('title', 'fotoexemplo');
    body.append('arquivo', arquivo);

    let req = await fetch ('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
};

let btn = document.querySelector('#enviar');
btn.addEventListener('click', enviar);