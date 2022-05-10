// const loadPosts = () => {
//     document.querySelector('#posts').innerHTML = 'Carregando ...';

//     fetch ('https://jsonplaceholder.typicode.com/posts')
//         .then (result => {
//             return result.json();
//         })
//         .then (json => {
//             montarBlog(json)
//         })
//         .catch (error => {
//             console.log(error)
//         })
// }


// Utilizando Async e Await em uma requisição

const loadPosts = async () => {
    document.querySelector('#posts').innerHTML = 'Carregando ...';

    
    // let req = await fetch ('https://jsonplaceholder.typicode.com/posts');
    // let json = await req.json();
    // montarBlog(json);

    let req = await fetch('https://jsonplaceholder.typicode.com/posts').then(result=>result.json());
    montarBlog(req);
}

const montarBlog = lista => {
    let html = '';

    for (let i in lista) {
        // html += '<h3>' + lista[i].title + '</h3>';
        // html += '<p>' + lista[i].body + '</p><br>';
        // html +='<hr>';

        html += `<h3>${lista[i].title}</h3>
                <p>${lista[i].body}</p><br>
                <hr>`
    }

    document.querySelector('#posts').innerHTML = html;
}

const btn = document.querySelector('button')
btn.addEventListener('click', loadPosts)