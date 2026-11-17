// Exercícios de fixação — Aula 02

// Exercício 1 — Par ou ímpar (console)
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return `${numero} é par.`;
  } else {
    return `${numero} é ímpar.`;
  }
}
console.log("Exercício 1:", parOuImpar(8));
console.log("Exercício 1:", parOuImpar(11));

// Exercício 2 — Desconto de 10% para compras de R$ 200 ou mais (console)
function calcularTotal(valorCompra) {
  if (valorCompra >= 200) {
    return valorCompra * 0.9;
  } else {
    return valorCompra;
  }
}
console.log("Exercício 2: compra de 199 → total", calcularTotal(199).toFixed(2));
console.log("Exercício 2: compra de 200 → total", calcularTotal(200).toFixed(2));

// Exercício 3 — Acesso com && (console)
function verificarAcesso(idade, cadastroAtivo) {
  if (idade >= 18 && cadastroAtivo) {
    return "Acesso permitido.";
  } else {
    return "Acesso negado.";
  }
}
console.log("Exercício 3:", verificarAcesso(20, true));   // permitido
console.log("Exercício 3:", verificarAcesso(20, false));  // negado: sem cadastro ativo
console.log("Exercício 3:", verificarAcesso(17, true));   // negado: menor de 18
console.log("Exercício 3:", verificarAcesso(17, false));  // negado

// Exercício 4 — Saudação no DOM
const campoNome = document.getElementById("nome");
const botaoSaudar = document.getElementById("saudar");
const saudacao = document.getElementById("saudacao");

botaoSaudar.addEventListener("click", function () {
  const nome = campoNome.value.trim();
  if (nome === "") {
    saudacao.textContent = "Preencha o campo nome.";
  } else {
    saudacao.textContent = `Olá, ${nome.toUpperCase()}!`;
  }
});

// Exercício 5 — Classificação de temperatura
const campoTemperatura = document.getElementById("temperatura");
const botaoClassificar = document.getElementById("classificar");
const classificacao = document.getElementById("classificacao");

botaoClassificar.addEventListener("click", function () {
  const texto = campoTemperatura.value.trim();
  if (texto === "" || !Number.isFinite(Number(texto))) {
    classificacao.textContent = "Informe uma temperatura válida.";
    return;
  }

  const temperatura = Number(texto);
  if (temperatura < 18) {
    classificacao.textContent = "Frio";
  } else if (temperatura < 28) {
    classificacao.textContent = "Agradável";
  } else {
    classificacao.textContent = "Quente";
  }
});
