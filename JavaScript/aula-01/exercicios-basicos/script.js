// Exercícios de fixação — Aula 01

// 1. Cadastro de estudante
const nomeEstudante = "Mariana Souza";
const matricula = "2026001";
const curso = "ADS";
const periodo = 3;
const situacaoAcademica = "Regular";

console.log("1. CADASTRO DE ESTUDANTE");
console.log("Nome:", nomeEstudante);
console.log("Matrícula:", matricula);
console.log("Curso:", curso);
console.log("Período:", periodo);
console.log("Situação acadêmica:", situacaoAcademica);

// 2. Compra
const precoProduto = 150.0;
const quantidade = 2;
const valorTotal = precoProduto * quantidade;

console.log("2. COMPRA");
console.log("Preço unitário: R$", precoProduto.toFixed(2));
console.log("Quantidade:", quantidade);
console.log("Valor total: R$", valorTotal.toFixed(2));

// 3. Desconto
const precoOriginal = 200.0;
const percentualDesconto = 15;
const valorDesconto = precoOriginal * (percentualDesconto / 100);
const precoFinal = precoOriginal - valorDesconto;

console.log("3. DESCONTO");
console.log("Valor do desconto: R$", valorDesconto.toFixed(2));
console.log("Preço final: R$", precoFinal.toFixed(2));

// 4. Comparação
const idade = 18;

console.log("4. COMPARAÇÃO (idade =", idade + ")");
console.log("idade > 18:", idade > 18);
console.log("idade < 18:", idade < 18);
console.log("idade === 18:", idade === 18);
console.log("idade >= 18:", idade >= 18);

// 5. Operadores lógicos
const idadeUsuario = 22;
const possuiCadastro = true;
const contaAtiva = true;

console.log("5. OPERADORES LÓGICOS");
console.log("Idade mínima e cadastro:", idadeUsuario >= 18 && possuiCadastro);
console.log("Conta ativa ou cadastro:", contaAtiva || possuiCadastro);
console.log("Conta não ativa:", !contaAtiva);

// 6. Par ou ímpar
function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar";
}

console.log("6. PAR OU ÍMPAR");
console.log("4 é", verificarParOuImpar(4));
console.log("7 é", verificarParOuImpar(7));
console.log("0 é", verificarParOuImpar(0));
