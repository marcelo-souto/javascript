let pessoa = {
  nome: "Marcelo",
  sobrenome: "Souto",
  idade: 24,
  social: {
    facebook: "marcelosouto",
    instagram: {
      url: "@marcelo.souto",
      seguidores: 300,
    },
  },
};

let {
  nome,
  sobrenome,
  social: {
    instagram: { url: insta, seguidores: segs },
  },
} = pessoa;

function nomeCompleto({ nome, sobrenome }) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto(pessoa));



let [nome1, sobrenome1] = ['Marcelo', 'Souto'];

console.log(nome1, sobrenome1)




function criar() {
    return ['MARCELO', 'DOS SANTOS', 'SOUTO'];
}

let [a,b,c] = criar();

console.log(a,b,c)

