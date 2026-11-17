// Calculadora de Média — versão final (Aula 3: DOM, eventos e validação)

// Critérios de classificação, aplicados sobre a média sem arredondamento
const MEDIA_APROVACAO = 7;
const MEDIA_RECUPERACAO = 4;

const campoNome = document.getElementById("nome");
const campos = [
  document.getElementById("n1"),
  document.getElementById("n2"),
  document.getElementById("n3"),
];
const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

// Função 1: média aritmética de três notas
function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// Função 2: classificação pela média
function classificar(media) {
  if (media >= MEDIA_APROVACAO) {
    return "Aprovado";
  } else if (media >= MEDIA_RECUPERACAO) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

// Mostra mensagem de erro na própria página
function mostrarErro(mensagem) {
  resultado.className = "erro";
  resultado.textContent = mensagem;
}

// Mostra o resultado na própria página
function mostrarResultado(nome, media, situacao) {
  const classe = situacao.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  resultado.className = classe;
  resultado.innerHTML = `
    <p><strong>Estudante:</strong> ${nome}</p>
    <p><strong>Média:</strong> ${media.toFixed(2)}</p>
    <p class="situacao">${situacao}</p>
  `;
}

botao.addEventListener("click", function () {
  // 1. Nome obrigatório
  const nome = campoNome.value.trim();
  if (nome === "") {
    mostrarErro("Erro: informe o nome do estudante.");
    return;
  }

  // 2. Notas obrigatórias
  const textos = campos.map(campo => campo.value.trim());
  for (let i = 0; i < textos.length; i++) {
    if (textos[i] === "") {
      mostrarErro(`Erro: preencha a Nota ${i + 1}.`);
      return;
    }
  }

  // 3. Notas entre 0 e 10
  const notas = textos.map(Number);
  for (let i = 0; i < notas.length; i++) {
    if (!Number.isFinite(notas[i]) || notas[i] < 0 || notas[i] > 10) {
      mostrarErro(`Erro: a Nota ${i + 1} deve estar entre 0 e 10.`);
      return;
    }
  }

  // 4. Cálculo e classificação
  const media = calcularMedia(notas[0], notas[1], notas[2]);
  const situacao = classificar(media);
  mostrarResultado(nome, media, situacao);
});
