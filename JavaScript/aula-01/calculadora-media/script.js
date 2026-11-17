const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const campos = [
  document.getElementById("nota1"),
  document.getElementById("nota2"),
  document.getElementById("nota3"),
];

function mostrarErro(mensagem) {
  resultado.textContent = mensagem;
  resultado.classList.add("erro");
}

function mostrarMedia(valor) {
  resultado.textContent = `Média ${valor}`;
  resultado.classList.remove("erro");
}

botao.addEventListener("click", function () {
  // Validação 1: campos vazios
  const valores = campos.map(campo => campo.value);
  if (valores.some(valor => valor === "")) {
    mostrarErro("Erro: preencha as três notas.");
    return;
  }

  // Validação 2: notas entre 0 e 10
  const notas = valores.map(Number);
  if (notas.some(nota => nota < 0 || nota > 10)) {
    mostrarErro("Erro: as notas devem estar entre 0 e 10.");
    return;
  }

  // Fórmula: média = (nota1 + nota2 + nota3) / 3
  const media = (notas[0] + notas[1] + notas[2]) / 3;

  // Arredondamento para duas casas decimais (ex.: 7.333... -> 7.33)
  mostrarMedia(parseFloat(media.toFixed(2)));
});
