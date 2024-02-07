function calcularGasolina() {
  let distancia = document.getElementById('distancia').value;
  let consumo = document.getElementById('consumo').value;
  let preco = document.getElementById('preco').value;

  let quantidadeGasolina = distancia / consumo;
  let custoViagem = quantidadeGasolina * preco;

  let resultaLitros = document.querySelector("#resultado_gasolina_litros"); 
  resultaLitros.innerHTML = quantidadeGasolina.toFixed(2);
  let resultadoCusto = document.querySelector("#resultado_custo");
  resultadoCusto.innerHTML = `R$ ${custoViagem.toFixed(2)}`;
}