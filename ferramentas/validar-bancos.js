// Confere os bancos de questões do SimulaDia.
// Uso (na pasta do projeto):   node ferramentas/validar-bancos.js
//
// Verifica: formato de cada questão, ids repetidos, enunciados repetidos,
// alternativas repetidas, gabarito válido e a distribuição das respostas (A–E).
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PASTA = path.join(__dirname, '..', 'questoes');
const BANCOS = [
  ['matematica.js', 'BANK_MAT'],
  ['linguagens.js', 'BANK_LING'],
  ['humanas.js', 'BANK_HUM'],
  ['natureza.js', 'BANK_NAT'],
];
const LETRAS = 'ABCDE';

let problemas = 0;
const idsGlobais = new Map();

for (const [arquivo, variavel] of BANCOS) {
  const caminho = path.join(PASTA, arquivo);
  if (!fs.existsSync(caminho)) { console.log(`✗ ${arquivo}: arquivo não encontrado`); problemas++; continue; }

  const ctx = { window: {} };
  vm.createContext(ctx);
  try {
    vm.runInContext(fs.readFileSync(caminho, 'utf8'), ctx, { filename: arquivo });
  } catch (e) {
    console.log(`✗ ${arquivo}: erro de sintaxe — ${e.message}`);
    problemas++;
    continue;
  }
  const banco = ctx.window[variavel];
  if (!Array.isArray(banco)) { console.log(`✗ ${arquivo}: window.${variavel} não é uma lista`); problemas++; continue; }

  const erros = [];
  const textos = new Map();
  const gabaritos = [0, 0, 0, 0, 0];
  const porDisc = {};

  banco.forEach((q, i) => {
    const ref = `#${i + 1}${q && q.id ? ` (${q.id})` : ''}`;
    if (!q || typeof q !== 'object') { erros.push(`${ref}: não é um objeto`); return; }
    if (!q.id) erros.push(`${ref}: sem id`);
    else if (idsGlobais.has(q.id)) erros.push(`${ref}: id repetido (também em ${idsGlobais.get(q.id)})`);
    else idsGlobais.set(q.id, arquivo);
    if (!q.disc) erros.push(`${ref}: sem disciplina (disc)`);
    if (!q.tema) erros.push(`${ref}: sem tema`);
    if (typeof q.text !== 'string' || !q.text.trim()) erros.push(`${ref}: enunciado vazio`);
    if (!Array.isArray(q.opts) || q.opts.length !== 5) erros.push(`${ref}: deve ter 5 alternativas`);
    else {
      const norm = q.opts.map(o => String(o).trim().toLowerCase());
      if (new Set(norm).size !== norm.length) erros.push(`${ref}: alternativas repetidas`);
    }
    if (!Number.isInteger(q.ans) || q.ans < 0 || q.ans > 4) erros.push(`${ref}: gabarito (ans) deve ser 0 a 4`);
    else gabaritos[q.ans]++;
    if (!q.expl || !String(q.expl).trim()) erros.push(`${ref}: sem explicação (expl)`);
    const chave = String(q.text || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (chave && textos.has(chave)) erros.push(`${ref}: enunciado igual ao de #${textos.get(chave)}`);
    else textos.set(chave, i + 1);
    porDisc[q.disc] = (porDisc[q.disc] || 0) + 1;
  });

  const total = banco.length;
  const dist = gabaritos.map((n, i) => `${LETRAS[i]} ${Math.round((n / Math.max(1, total)) * 100)}%`).join(' · ');
  console.log(`\n${erros.length ? '✗' : '✓'} ${arquivo}: ${total} questões`);
  console.log(`  gabaritos: ${dist}`);
  console.log(`  disciplinas: ${Object.entries(porDisc).map(([d, n]) => `${d} (${n})`).join(', ')}`);
  const maior = Math.max(...gabaritos) / Math.max(1, total);
  if (total >= 50 && maior > 0.3) console.log('  ⚠ uma letra concentra mais de 30% dos gabaritos — varie a posição da resposta correta');
  erros.forEach(e => console.log('  ✗ ' + e));
  problemas += erros.length;
}

console.log(problemas ? `\n${problemas} problema(s) encontrado(s).` : '\nTudo certo.');
process.exitCode = problemas ? 1 : 0;
