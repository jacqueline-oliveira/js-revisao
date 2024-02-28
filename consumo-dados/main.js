class Endereco{
  constructor(logradouro, bairro, cidade, uf, cep){
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.cep = cep;
  }

  descrever(){
    return `Rua ${this.logradouro}, bairro: ${this.bairro}
    cidade: ${this.cidade} - ${this.uf} - ${this.cep}`;
  }
}

let dadosEndereco = [];

function buscarDados() {
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  
  fetch(url).then(
    response => {
      return response.json()
    }).then(dados => {
      atribuirDados(dados);
      //alert(JSON.stringify(dados));
    }); 
}

function atribuirDados(dados) {
  const rua = document.getElementById('rua');
  const complemento = document.getElementById('complemento');
  const bairro = document.getElementById('bairro');
  const cidade = document.getElementById('cidade');
  const estado = document.getElementById('estado');
  
  rua.value = dados.logradouro;
  complemento.value = dados.complemento;
  bairro.value = dados.bairro;
  cidade.value = dados.localidade;
  estado.value = dados.uf;

  let end = new Endereco(rua.value, bairro.value, cidade.value,
     estado.value, dados.cep);
  dadosEndereco.push(end);  
}

function limparDados() {
  const complemento = document.getElementById('complemento');
  const bairro = document.getElementById('bairro');
  const cidade = document.getElementById('cidade');
  const estado = document.getElementById('estado');

  rua.value = "";
  complemento.value = "";
  bairro.value = "";
  cidade.value = "";
  estado.value = "";
  
  for(end of dadosEndereco){
    alert(end.descrever());
  }

  const verCidades = (item) => alert("Cidade: " + item.cidade);
  dadosEndereco.forEach(verCidades);
}


// Exatamente o mesmo código que tô fazendo acima
// fetch(url).then(response).then(atribuirDados);

// function response(reposta) {
//   return reposta.json();
// } 

// function atribuirDados(dados) {
//   implementação igual à feita no atribuirDados acima;
// } 