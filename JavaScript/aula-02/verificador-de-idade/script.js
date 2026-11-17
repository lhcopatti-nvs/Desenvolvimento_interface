// Laboratório 1 — Verificador de idade

const campoIdade = document.getElementById("idade");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");
const extra = document.getElementById("extra");

botao.addEventListener("click", function () {
  const texto = campoIdade.value.trim();
  extra.textContent = "";

  // Campo vazio: validar antes de Number(), pois Number("") resulta em 0
  if (texto === "") {
    resultado.textContent = "Informe a idade.";
    return;
  }

  // Idade precisa ser inteira e estar entre 0 e 120
  const idade = Number(texto);
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    resultado.textContent = "Idade inválida.";
    return;
  }

  if (idade >= 18) {
    resultado.textContent = "Maior de idade.";
  } else {
    resultado.textContent = "Menor de idade.";
    // Desafio extra: quantos anos faltam para completar 18
    const faltam = 18 - idade;
    extra.textContent = `Faltam ${faltam} ${faltam === 1 ? "ano" : "anos"} para completar 18.`;
  }
});
