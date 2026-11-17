// Laboratório 2 — Calculadora de média e situação
// Regra do exercício: média >= 6 é Aprovado; caso contrário, Recuperação.

const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");
const rotulos = ["Nota 1", "Nota 2", "Nota 3"];
const ids = ["n1", "n2", "n3"];

botao.addEventListener("click", function () {
  // 1. Ler os textos dos campos
  const textos = ids.map(id => document.getElementById(id).value.trim());

  // 2. Campo vazio: informar qual campo e encerrar
  for (let i = 0; i < textos.length; i++) {
    if (textos[i] === "") {
      saida.textContent = `Erro: campo vazio (${rotulos[i]}).`;
      return;
    }
  }

  // 3. Converter para número
  const notas = textos.map(Number);

  // 4. Validar: finito e entre 0 e 10. Indica o campo inválido (exercício 6).
  for (let i = 0; i < notas.length; i++) {
    if (!Number.isFinite(notas[i]) || notas[i] < 0 || notas[i] > 10) {
      saida.textContent = `Erro: ${rotulos[i]} está fora da faixa (0 a 10).`;
      return;
    }
  }

  // 5. Média aritmética
  const media = (notas[0] + notas[1] + notas[2]) / 3;

  // 6. Situação com if/else
  let situacao;
  if (media >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Recuperação";
  }

  // 7. Média com duas casas decimais; situação escrita em texto
  saida.textContent = `Média ${media.toFixed(2)} — ${situacao}`;
});
