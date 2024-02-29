class Titulo {
  constructor(nome, duracao, lancamento, genero, diretor){
    this.nome = nome;
    this.duracao = duracao;
    this.lancamento = lancamento;
    this.genero = genero;
    this.diretor = diretor;
  }

  descreveFilme(){
    return `Filme: ${this.nome}, lançado em: ${this.lancamento},dirigido por ${this.diretor}`;
  }
}

let filmes = [];

function buscarDados() {
  let titulo = document.getElementById('titulo').value;
  let url = `https://www.omdbapi.com/?t=${titulo}&apikey=6585022c`;
  alert(url);
            
  fetch(url).then(response => {
    return response.json()})
    .then(filme => {
      atribuirDados(filme);
    });
}

function atribuirDados(dados){
  let filme = new Titulo(dados.Title, dados.Runtime, dados.Year,
    dados.Genre, dados.Director);

  filmes.push(filme)  
  //alert(JSON.stringify(filme));  
  //alert(filme.descreveFilme());

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = filme.descreveFilme();

}