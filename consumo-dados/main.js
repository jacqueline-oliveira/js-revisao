function buscarDados() {
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  
  fetch(url).then(
    response => {
      return response.json()
    }).then(dados => {
      atribuirDados(dados);
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
}


// Exatamente o mesmo código que tô fazendo acima
// fetch(url).then(response).then(atribuirDados);

// function response(reposta) {
//   return reposta.json();
// } 

// function atribuirDados(dados) {
//   implementação igual à feita no atribuirDados acima;
// } 