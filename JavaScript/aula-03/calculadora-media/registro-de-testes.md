# Registro de testes — Aula 3: Calculadora de Média

Critérios: média ≥ 7 → Aprovado; 4 ≤ média < 7 → Recuperação; média < 4 → Reprovado.
Ambiente: Chrome (headless), página `index.html` aberta direto do arquivo, sem servidor.

| # | Caso | Entrada | Resultado esperado | Resultado obtido | Situação |
|---|---|---|---|---|---|
| T1 | Aprovação | Ana Souza; 8, 7, 9 | Média 8.00 — Aprovado | Média 8.00 — Aprovado | OK |
| T2 | Recuperação | Bruno Lima; 5, 6, 7 | Média 6.00 — Recuperação | Média 6.00 — Recuperação | OK |
| T3 | Reprovação | Carlos Dias; 2, 3, 4 | Média 3.00 — Reprovado | Média 3.00 — Reprovado | OK |
| T4 | Dado inválido: nota fora da faixa | Diana Reis; 11, 5, 6 | Mensagem de erro na página sobre a Nota 1 | "Erro: a Nota 1 deve estar entre 0 e 10." | OK |
| T5 | Dado inválido: nome vazio | (vazio); 8, 7, 9 | Mensagem de erro na página sobre o nome | "Erro: informe o nome do estudante." | OK |

Console do navegador durante os testes: nenhum erro.

Prints: `../evidencias/print-teste-1.png` a `../evidencias/print-teste-5.png`.
