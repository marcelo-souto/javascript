const inserirPost = async () => {
    document.querySelector('#posts').innerHTML = 'carregando ...';

    let req = await fetch ('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    let json = await req.json();

    console.log(json);


}

let btn = document.querySelector('[data-js="btn"]');
btn.addEventListener('click', inserirPost)