function calcularNota() {
  let linguagem = document.getElementById('linguagens').value;
  let matematica = document.getElementById('matematica').value;
  let humanas = document.getElementById('humanas').value;
  let natureza = document.getElementById('natureza').value;
  let redacao = document.getElementById('redacao').value; 

  let pesoLinguagens = 1;
  let pesoMatematica = 2;
  let pesoHumanas = 1.5;
  let pesoNatureza = 1.5;
  let pesoRedacao = 3;

  let pesoTotal = pesoLinguagens + pesoMatematica + pesoHumanas +
    pesoNatureza + pesoRedacao;

  let totalNotas = (linguagem * pesoLinguagens) +
                  (matematica * pesoMatematica) +
                  (humanas * pesoHumanas) +
                  (natureza * pesoNatureza) +
                  (redacao * pesoRedacao);

  let resultado = totalNotas / pesoTotal;   
  
  let elementoResultado = document.getElementById("resultado_nota");
  elementoResultado.innerHTML = resultado;
}


//Linguagens = 1
//Matemática = 1
//Humanas = 1.5
//Natureza = 1.5
//Redacao = 3

//Total peso 8