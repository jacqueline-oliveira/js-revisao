function calcularSalario() {
  let salario = document.getElementById("salario_bruto").value;
  let dependentes = document.getElementById("dependentes").value;

  let descontoINSS = obterValorInss(salario);
  let descontoIrrF = obterValorIrrf(salario, dependentes, descontoINSS);
  alert(descontoINSS);
  alert(descontoIrrF);
}

function obterValorInss(salario) {
  let limiteFaixa1 = 1412;
  let limiteFaixa2 = 2666.68;
  let limiteFaixa3 = 4000.03;
  let limiteFaixa4 = 7786.02;

  let valorFaixa1 = limiteFaixa1 * 0.075;
  let valorFaixa2 = (limiteFaixa2 - limiteFaixa1) * 0.09;
  let valorFaixa3 = (limiteFaixa3 -limiteFaixa2) * 0.12;
 
  let descontoINSS = 0;

  if (salario <= limiteFaixa1) {
    descontoINSS = valorFaixa1;
  } else if (salario <= limiteFaixa2) {
    descontoINSS = valorFaixa1 + (salario - limiteFaixa1) * 0.09;
  } else if (salario <= limiteFaixa3) {
    descontoINSS = valorFaixa1 + valorFaixa2 + (salario - limiteFaixa2) * 0.12;
  } else if (salario <= limiteFaixa4) {
    descontoINSS = valorFaixa1 + valorFaixa2 + valorFaixa3 + (salario - limiteFaixa3) * 0.14;
  } else {
    descontoINSS = valorFaixa1 + valorFaixa2 
      + valorFaixa3 + ((limiteFaixa4 - limiteFaixa3) * 0.14);
  }
  return descontoINSS;
}

function obterValorIrrf(salario, dependentes, descontoINSS){
  let aliquota = 0;
  let deducao = 0;

  let baseCalculo = salario - descontoINSS - (dependentes * 189.59); 

  if (baseCalculo <= 2112) {
    aliquota = 0;
    deducao = 0;
  } else if (baseCalculo <= 2826.65) {
    aliquota = 0.075;
    deducao = 158.4;
  } else if (baseCalculo <= 3751.05) {
    aliquota = 0.15;
    deducao = 370.4;
  } else if (baseCalculo <= 4664.58) {
    aliquota = 0.225;
    deducao = 651.73;
  } else {
    aliquota = 0.275;
    deducao = 884.96;
  }

  let valorIrrf = baseCalculo * aliquota - deducao;
  return valorIrrf;
}