# SimulaDia

Simulado diário para o ENEM: 10 questões por dia em cada área, com resolução comentada. Não precisa de cadastro e funciona direto no navegador.

**Site:** https://kauanomota.github.io/SimulaDia/

## O que o site faz

- **Simulado do dia**: 10 questões por área (Matemática, Linguagens, Ciências Humanas e Ciências da Natureza), iguais para todo mundo no mesmo dia e misturando as disciplinas. A seleção percorre o banco inteiro antes de repetir uma questão e renova à meia-noite.
- **Treino por tema**: sessões de até 10 questões de uma disciplina ou de um assunto específico, priorizando as que a pessoa ainda não viu.
- **Revisão de erros**: as questões erradas vão para uma lista e saem dela quando a pessoa acerta.
- **Desempenho**: sequência de dias e recorde, os últimos 14 dias, acertos por disciplina e os temas com menor aproveitamento.
- **Também**: retoma o simulado de onde parou, tem cronômetro de resposta, atalhos de teclado (A–E ou 1–5 para responder, Enter para avançar) e permite compartilhar o resultado.

Os dados ficam só no `localStorage` do navegador. Não há servidor.

## Bancos de questões

| Área | Questões | Disciplinas |
|---|---|---|
| Matemática | 331 | Aritmética, porcentagem e proporção, matemática financeira, álgebra, funções, sequências, geometria plana, espacial e analítica, trigonometria, estatística, probabilidade e combinatória |
| Linguagens | 197 | Texto e linguagem, gramática, literatura, redação, artes, educação física, inglês, espanhol |
| Ciências Humanas | 186 | História do Brasil, História Geral, Geografia, Filosofia, Sociologia |
| Ciências da Natureza | 178 | Física, Química, Biologia |

As questões são **autorais, no estilo do ENEM**. Não são questões oficiais de provas anteriores. As respostas corretas estão distribuídas por igual entre A, B, C, D e E.

## Estrutura

```
index.html                 telas do site
styles.css                 visual
app.js                     lógica (simulado do dia, treino, erros, estatísticas)
questoes/
  matematica.js            window.BANK_MAT
  linguagens.js            window.BANK_LING
  humanas.js               window.BANK_HUM
  natureza.js              window.BANK_NAT
ferramentas/
  validar-bancos.js        confere os bancos (node)
```

## Como adicionar uma questão

Cada questão é um objeto no arquivo da área:

```js
{
  id: "nat-179", disc: "Física", tema: "Óptica",
  text: "Enunciado. Use \n para quebrar linha.",
  opts: ["alternativa A", "alternativa B", "alternativa C", "alternativa D", "alternativa E"],
  ans: 3,            // 0 = A, 1 = B, 2 = C, 3 = D, 4 = E
  expl: "Resolução comentada."
}
```

- O `id` precisa ser único e não deve mudar depois de publicado, porque a revisão de erros usa esse id.
- `disc` e `tema` alimentam o treino por tema e as estatísticas. Para criar um tema novo, basta usar um nome novo.
- Varie a posição da resposta correta.

Depois de editar, confira o banco:

```
node ferramentas/validar-bancos.js
```

O script aponta ids e enunciados repetidos, alternativas iguais, gabaritos inválidos e a concentração de respostas numa mesma letra.

**Antes de publicar**, troque o valor de `?v=` nas linhas de CSS e JS do `index.html` (por exemplo, pela data do dia). O GitHub Pages deixa os navegadores guardarem cada arquivo por 10 minutos. Sem trocar a versão, um visitante pode receber o HTML novo com o JavaScript antigo, e o site quebra até o cache expirar.

## Rodar localmente

Basta abrir o `index.html` no navegador. Também dá para servir a pasta, por exemplo com `npx serve .`.

Para testar a virada do dia sem esperar, use o console do navegador: `_testNextDay()` avança um dia e `_testReset()` volta para a data real.
