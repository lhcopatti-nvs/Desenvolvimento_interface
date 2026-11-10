// Exercício 1 — Cadastro de estudante
// Crie variáveis para nome, matrícula, curso, período e situação acadêmica e exiba no console.

const nome = "Mariana Souza";
const matricula = "2026001";
const curso = "Análise e Desenvolvimento de Sistemas (ADS)";
const periodo = 3;
const situacaoAcademica = "Regular";

console.log("CADASTRO DE ESTUDANTE");
console.log("Nome:", nome);
console.log("Matrícula:", matricula);
console.log("Curso:", curso);
console.log("Período:", periodo);
console.log("Situação acadêmica:", situacaoAcademica);

// Exibição na página
const lista = document.getElementById("dados");
const linhas = [
  `Nome: ${nome}`,
  `Matrícula: ${matricula}`,
  `Curso: ${curso}`,
  `Período: ${periodo}`,
  `Situação acadêmica: ${situacaoAcademica}`,
];
lista.innerHTML = linhas.map(texto => `<li>${texto}</li>`).join("");
