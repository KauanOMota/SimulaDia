'use strict';
// ─── SimulaDia · app.js ───
// Simulado diário (igual para todos no mesmo dia), treino por tema, revisão de erros
// e estatísticas locais. Tudo roda no navegador; os dados ficam no localStorage.

// ════════════════════════ CONFIGURAÇÃO ════════════════════════
const SUBJECTS = [
  { key: 'mat', label: 'Matemática', short: 'Mat', full: 'Matemática e suas Tecnologias', bankVar: 'BANK_MAT', theme: 'subject-mat' },
  { key: 'lin', label: 'Linguagens', short: 'Lin', full: 'Linguagens, Códigos e suas Tecnologias', bankVar: 'BANK_LING', theme: 'subject-lin' },
  { key: 'hum', label: 'Humanas', short: 'Hum', full: 'Ciências Humanas e suas Tecnologias', bankVar: 'BANK_HUM', theme: 'subject-hum' },
  { key: 'nat', label: 'Natureza', short: 'Nat', full: 'Ciências da Natureza e suas Tecnologias', bankVar: 'BANK_NAT', theme: 'subject-nat' },
];
const PER_DAY = 10;          // questões no simulado do dia
const PER_SESSION = 10;      // questões por sessão de treino / revisão
const EPOCH = new Date(2025, 0, 1);
const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const STORAGE_VERSION = 'v2'; // mudar invalida o storage legado (preservando o histórico)

const K = {
  result: (s, d = today()) => `sd_result_${s.key}_${d}`,
  progress: (s, d = today()) => `sd_progress_${s.key}_${d}`,
  streak: s => `sd_streak_${s.key}`,
  subject: 'sd_subject',
  hist: 'sd_hist',       // { mat: { '2026-11-10': { c, t, s } } }
  temas: 'sd_temas',     // { mat: { 'Disciplina|Tema': [acertos, respondidas] } }
  erros: 'sd_erros',     // { mat: { 'mat-012': { d: data, n: vezes } } }
  vistas: 'sd_vistas',   // { mat: [ids vistos no treino] }
  ver: 'sd_storage_ver',
};

// ════════════════════════ ARMAZENAMENTO ════════════════════════
// Todo acesso ao localStorage passa por aqui: modo privado ou storage bloqueado não quebram o app.
const store = {
  raw(k) { try { return localStorage.getItem(k); } catch { return null; } },
  get(k, fallback = null) {
    const v = this.raw(k);
    if (v === null) return fallback;
    try { return JSON.parse(v); } catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* sem espaço ou bloqueado */ } },
  setRaw(k, v) { try { localStorage.setItem(k, v); } catch { /* idem */ } },
  del(k) { try { localStorage.removeItem(k); } catch { /* idem */ } },
  keys() {
    try { const a = []; for (let i = 0; i < localStorage.length; i++) a.push(localStorage.key(i)); return a; }
    catch { return []; }
  },
};

// ════════════════════════ DATAS (sempre no horário local) ════════════════════════
let dayOffset = 0; // só usado pelos atalhos de teste no console
function now() { const d = new Date(); if (dayOffset) d.setDate(d.getDate() + dayOffset); return d; }
function dateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function today() { return dateStr(now()); }
function parseDate(str) { const [y, m, d] = str.split('-').map(Number); return new Date(y, m - 1, d); }
function addDays(str, n) { const d = parseDate(str); d.setDate(d.getDate() + n); return dateStr(d); }
function dayIndex(str) { return Math.round((parseDate(str) - EPOCH) / 86400000); }
function fmtDate(str, opts = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Date(str + 'T12:00:00').toLocaleDateString('pt-BR', opts);
}
function fmtClock(secs) {
  const s = Math.max(0, Math.floor(secs));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  const p = n => String(n).padStart(2, '0');
  return h ? `${h}:${p(m)}:${p(r)}` : `${p(m)}:${p(r)}`;
}
function fmtDuration(secs) {
  const s = Math.round(secs);
  if (s < 60) return `${s} s`;
  const m = Math.floor(s / 60), r = s % 60;
  if (m < 60) return r ? `${m} min ${r} s` : `${m} min`;
  return `${Math.floor(m / 60)} h ${m % 60} min`;
}
const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;
const pct = (c, t) => (t ? Math.round((c / t) * 100) : 0);

// ════════════════════════ BANCOS DE QUESTÕES ════════════════════════
const bankCache = {};
function validQuestion(q) {
  return q && typeof q.text === 'string' && q.text.trim() &&
    Array.isArray(q.opts) && q.opts.length >= 2 && q.opts.length <= LETTERS.length &&
    Number.isInteger(q.ans) && q.ans >= 0 && q.ans < q.opts.length;
}
function getBank(s) {
  if (bankCache[s.key]) return bankCache[s.key];
  const raw = Array.isArray(window[s.bankVar]) ? window[s.bankVar] : [];
  const ok = [];
  raw.forEach((q, i) => {
    if (validQuestion(q)) ok.push(q.id ? q : { ...q, id: `${s.key}-${i + 1}` });
    else console.warn(`[SimulaDia] Questão ignorada em ${s.bankVar}[${i}] — formato inválido.`, q);
  });
  return (bankCache[s.key] = ok);
}
function bankById(s) {
  const m = new Map(); getBank(s).forEach(q => m.set(q.id, q)); return m;
}
function cloneQ(q) {
  return { id: q.id, disc: q.disc || '', tema: q.tema || '', text: q.text, opts: q.opts.slice(), ans: q.ans, expl: q.expl || '' };
}

// ════════════════════════ SELEÇÃO DO DIA (determinística) ════════════════════════
// A sequência de questões depende só da matéria e do banco — nunca do aparelho.
// Cada disciplina é embaralhada com semente fixa e as disciplinas são intercaladas
// em proporção ao seu tamanho; assim, qualquer janela de 10 questões fica equilibrada.
// O dia N usa a janela que começa em N × 10 e percorre o banco inteiro antes de repetir.
function hashStr(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed | 0 || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) | 0;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const seqCache = {};
function dailySequence(s) {
  const bank = getBank(s);
  const ck = `${s.key}:${bank.length}`;
  if (seqCache[ck]) return seqCache[ck];
  const groups = new Map();
  bank.forEach((q, i) => {
    const d = q.disc || '—';
    if (!groups.has(d)) groups.set(d, []);
    groups.get(d).push(i);
  });
  const items = [];
  let g = 0;
  for (const [disc, idxs] of groups) {
    const order = seededShuffle(idxs, hashStr(`${s.key}|${disc}|${idxs.length}`));
    const offset = (hashStr(disc) % 997) / 997;
    order.forEach((qi, k) => items.push({ qi, pos: (k + offset) / order.length, g }));
    g++;
  }
  items.sort((a, b) => a.pos - b.pos || a.g - b.g);
  return (seqCache[ck] = items.map(x => x.qi));
}
function pickDaily(s, date) {
  const bank = getBank(s);
  const seq = dailySequence(s);
  const n = seq.length;
  if (!n) return [];
  const count = Math.min(PER_DAY, n);
  const start = (((dayIndex(date) * count) % n) + n) % n;
  return Array.from({ length: count }, (_, i) => cloneQ(bank[seq[(start + i) % n]]));
}

// ════════════════════════ ESTADO ════════════════════════
const state = {
  subjectIdx: 0,
  screen: 'intro',
  mode: 'daily',         // 'daily' | 'treino' | 'erros'
  label: '',             // descrição do treino em andamento
  treinoPick: null,      // { disc, tema } para “treinar de novo”
  questions: [],
  current: 0,
  answers: [],           // true/false por questão respondida
  chosen: [],            // índice escolhido por questão
  run: 0,                // acertos seguidos na sessão
  pending: null,         // alternativa marcada na questão atual (antes de avançar)
  quizDate: null,
  elapsed: 0,            // segundos respondendo (pausa enquanto se lê a resolução)
  timer: null,
  lastTick: 0,
};
const subj = () => SUBJECTS[state.subjectIdx];
const $ = id => document.getElementById(id);

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined && text !== null) e.textContent = text;
  return e;
}

// ════════════════════════ PERSISTÊNCIA DO SIMULADO DO DIA ════════════════════════
function snapshotQuestions() { return state.questions.map(cloneQ); }
function saveProgress() {
  // só o simulado do dia é retomável; depois de concluído (current = total) não há o que salvar
  if (state.mode !== 'daily' || state.current >= state.questions.length) return;
  store.set(K.progress(subj()), {
    current: state.current, answers: state.answers, chosenAnswers: state.chosen,
    sessionStreak: state.run, quizStartDate: state.quizDate, pendingAnswer: state.pending,
    elapsed: Math.round(state.elapsed), questions: snapshotQuestions(),
  });
}
function loadProgress(s = subj()) {
  const p = store.get(K.progress(s));
  return p && Array.isArray(p.questions) && p.questions.length && Array.isArray(p.answers) ? p : null;
}
function saveResult() {
  store.set(K.result(subj()), {
    answers: state.answers, chosenAnswers: state.chosen,
    elapsed: Math.round(state.elapsed), questions: snapshotQuestions(),
  });
}
function loadResult(s = subj()) {
  const r = store.get(K.result(s));
  return r && Array.isArray(r.questions) && r.questions.length && Array.isArray(r.answers) ? r : null;
}

// ════════════════════════ SEQUÊNCIA DE DIAS ════════════════════════
function getStreak(s = subj()) {
  const data = store.get(K.streak(s), {}) || {};
  const t = today();
  const alive = data.last === t || data.last === addDays(t, -1);
  const streak = alive ? data.streak || 0 : 0;
  return { streak, best: Math.max(data.best || 0, data.streak || 0), doneToday: data.last === t };
}
function updateStreak(s = subj()) {
  const data = store.get(K.streak(s), {}) || {};
  const t = today();
  let streak;
  if (data.last === t) streak = data.streak || 1;
  else if (data.last === addDays(t, -1)) streak = (data.streak || 0) + 1;
  else streak = 1;
  store.set(K.streak(s), { streak, last: t, best: Math.max(data.best || 0, streak) });
  return streak;
}

// ════════════════════════ HISTÓRICO, TEMAS E ERROS ════════════════════════
function recordHistory(s, date, correct, total, secs) {
  const h = store.get(K.hist, {}) || {};
  h[s.key] = h[s.key] || {};
  h[s.key][date] = { c: correct, t: total, s: Math.round(secs || 0) };
  store.set(K.hist, h);
}
function recordAnswer(q, ok) {
  const sk = subj().key;
  const t = store.get(K.temas, {}) || {};
  t[sk] = t[sk] || {};
  const key = `${q.disc || subj().label}|${q.tema || q.disc || subj().label}`;
  const e = t[sk][key] || [0, 0];
  t[sk][key] = [e[0] + (ok ? 1 : 0), e[1] + 1];
  store.set(K.temas, t);

  if (!q.id) return;
  const er = store.get(K.erros, {}) || {};
  er[sk] = er[sk] || {};
  if (ok) delete er[sk][q.id];
  else er[sk][q.id] = { d: today(), n: ((er[sk][q.id] || {}).n || 0) + 1 };
  store.set(K.erros, er);
}
function errosList(s = subj()) {
  const map = bankById(s);
  const er = (store.get(K.erros, {}) || {})[s.key] || {};
  return Object.entries(er)
    .filter(([id]) => map.has(id))
    .sort((a, b) => (a[1].d < b[1].d ? -1 : a[1].d > b[1].d ? 1 : (b[1].n || 0) - (a[1].n || 0)))
    .map(([id]) => map.get(id));
}
function temaStats(s = subj()) { return (store.get(K.temas, {}) || {})[s.key] || {}; }

// ════════════════════════ NAVEGAÇÃO ════════════════════════
const SCREENS = ['intro', 'quiz', 'result', 'treino', 'stats'];
function show(name) {
  // saindo das questões no meio: pausa o cronômetro e guarda o progresso
  if (state.screen === 'quiz' && name !== 'quiz') { pauseTimer(); saveProgress(); }
  SCREENS.forEach(n => { $('screen-' + n).hidden = n !== name; });
  state.screen = name;
  hideTip();
  window.scrollTo(0, 0);
}
function goHome() {
  pauseTimer();
  state.quizDate = null;
  renderIntro();
  show('intro');
}

function applyTheme() {
  SUBJECTS.forEach(s => document.body.classList.remove(s.theme));
  document.body.classList.add(subj().theme);
}
function selectSubject(i, { animate = true } = {}) {
  state.subjectIdx = i;
  store.setRaw(K.subject, String(i));
  applyTheme();
  if (state.screen === 'stats') renderStats();
  else renderIntro(animate);
}
function buildTabs(container, onPick) {
  container.textContent = '';
  SUBJECTS.forEach((s, i) => {
    const b = el('button', 'stab' + (i === state.subjectIdx ? ' active' : ''), s.short);
    b.type = 'button';
    b.dataset.key = s.key;
    b.title = s.full;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', String(i === state.subjectIdx));
    b.setAttribute('aria-label', s.label);
    b.addEventListener('click', () => { if (i !== state.subjectIdx) onPick(i); });
    container.appendChild(b);
  });
}

// ════════════════════════ TELA INICIAL ════════════════════════
function renderIntro(animate = false) {
  const s = subj();
  const bank = getBank(s);
  applyTheme();
  buildTabs($('subject-tabs'), i => selectSubject(i));
  $('subject-name-line').textContent = s.full;

  const h1 = $('hero-title');
  if (animate) { h1.classList.remove('subject-switch-anim'); void h1.offsetWidth; h1.classList.add('subject-switch-anim'); }

  const chips = $('info-chips');
  chips.textContent = '';
  ['Gabarito comentado', 'Renova à meia-noite', `${bank.length} questões no banco`].forEach(t => {
    const c = el('div', 'chip'); c.append(el('span', 'dot'), document.createTextNode(t)); chips.appendChild(c);
  });

  const desc = $('hero-desc');
  const btn = $('btn-start');
  const wrap = $('hero-desc-wrap');
  wrap.classList.remove('hero-content-fade'); void wrap.offsetWidth;

  const saved = loadResult(s);
  const progress = loadProgress(s);
  btn.disabled = false;
  if (!bank.length) {
    desc.textContent = 'O banco de questões desta área ainda está vazio.';
    btn.innerHTML = 'Indisponível';
    btn.disabled = true;
    btn.onclick = null;
  } else if (saved) {
    const c = saved.answers.filter(Boolean).length;
    desc.textContent = `Você fez ${c} de ${saved.answers.length} hoje. Volte amanhã para um simulado novo — ou treine por tema agora.`;
    btn.innerHTML = 'Ver resultado <span class="arrow">→</span>';
    btn.onclick = showSavedResult;
    // garante que o histórico tem o resultado de hoje (resultados salvos antes desta versão)
    const h = (store.get(K.hist, {}) || {})[s.key] || {};
    if (!h[today()]) recordHistory(s, today(), c, saved.answers.length, saved.elapsed || 0);
  } else if (progress) {
    const total = progress.questions.length;
    desc.textContent = `Você está na questão ${Math.min((progress.current || 0) + 1, total)} de ${total}. Continue de onde parou.`;
    btn.innerHTML = 'Continuar simulado <span class="arrow">→</span>';
    btn.onclick = resumeDaily;
  } else {
    desc.textContent = `${Math.min(PER_DAY, bank.length)} questões no estilo do ENEM, com resolução comentada. Sem cadastro, um simulado novo por dia.`;
    btn.innerHTML = 'Começar simulado <span class="arrow">→</span>';
    btn.onclick = startDaily;
  }
  wrap.classList.add('hero-content-fade');

  const longDate = fmtDate(today(), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  $('date-line').textContent = longDate.charAt(0).toUpperCase() + longDate.slice(1);
  renderStreakBadge();

  const discs = new Set(bank.map(q => q.disc)).size;
  $('treino-sub').textContent = bank.length
    ? `${plural(discs, 'disciplina', 'disciplinas')} · ${bank.length} questões para praticar`
    : 'Sem questões nesta área';
  const nErr = errosList(s).length;
  $('erros-sub').textContent = nErr ? `${plural(nErr, 'questão errada', 'questões erradas')} para refazer` : 'Nenhuma questão para revisar';
  $('btn-erros').disabled = !nErr;
  $('btn-treino').disabled = !bank.length;
}
function renderStreakBadge() {
  const { streak } = getStreak();
  const badge = $('streak-badge');
  if (streak > 0) {
    $('streak-count').textContent = streak;
    $('streak-label').textContent = streak === 1 ? 'dia seguido' : 'dias seguidos';
    badge.hidden = false;
    badge.title = `Sequência em ${subj().label}`;
  } else badge.hidden = true;
}

// ════════════════════════ INÍCIO DE SESSÕES ════════════════════════
function resetSession() {
  state.current = 0; state.answers = []; state.chosen = []; state.run = 0;
  state.pending = null; state.elapsed = 0;
}
function startDaily() {
  const s = subj();
  state.mode = 'daily';
  state.quizDate = today();
  state.questions = pickDaily(s, state.quizDate);
  if (!state.questions.length) return;
  resetSession();
  store.del(K.progress(s));
  beginQuiz(false);
}
function resumeDaily() {
  const p = loadProgress();
  if (!p) { startDaily(); return; }
  state.mode = 'daily';
  state.quizDate = p.quizStartDate || today();
  state.questions = p.questions;
  state.answers = p.answers;
  state.chosen = p.chosenAnswers || p.answers.map(() => null);
  state.current = Math.min(p.current || 0, p.questions.length - 1);
  state.run = p.sessionStreak || 0;
  state.pending = p.pendingAnswer ?? null;
  state.elapsed = p.elapsed || 0;
  // progresso antigo pode ter a resposta registrada sem o “pending” (ou vice-versa)
  if (state.pending === null && state.answers.length > state.current) state.pending = state.chosen[state.current] ?? null;
  beginQuiz(true);
}
function startTreino(disc = null, tema = null) {
  const s = subj();
  const pool = getBank(s).filter(q => (!disc || q.disc === disc) && (!tema || q.tema === tema));
  if (!pool.length) return;
  const vistas = new Set(((store.get(K.vistas, {}) || {})[s.key]) || []);
  const fresh = shuffle(pool.filter(q => !vistas.has(q.id)));
  const seen = shuffle(pool.filter(q => vistas.has(q.id)));
  state.mode = 'treino';
  state.treinoPick = { disc, tema };
  state.label = tema ? `${disc} · ${tema}` : disc || 'Todas as disciplinas';
  state.questions = fresh.concat(seen).slice(0, PER_SESSION).map(cloneQ);
  state.quizDate = null;
  resetSession();
  beginQuiz(false);
}
function startErros() {
  const list = errosList();
  if (!list.length) return;
  state.mode = 'erros';
  state.treinoPick = null;
  state.label = 'Revisão de erros';
  state.questions = list.slice(0, PER_SESSION).map(cloneQ);
  state.quizDate = null;
  resetSession();
  beginQuiz(false);
}

// ════════════════════════ CRONÔMETRO ════════════════════════
function tick() {
  const n = Date.now();
  if (!document.hidden) state.elapsed += (n - state.lastTick) / 1000;
  state.lastTick = n;
  $('q-timer').textContent = fmtClock(state.elapsed);
}
function startTimer() {
  pauseTimer();
  state.lastTick = Date.now();
  $('q-timer').textContent = fmtClock(state.elapsed);
  state.timer = setInterval(tick, 1000);
}
function pauseTimer() {
  if (!state.timer) return;
  tick();
  clearInterval(state.timer);
  state.timer = null;
}

// ════════════════════════ QUESTÕES ════════════════════════
function beginQuiz(resumed) {
  show('quiz');
  const modeLine = $('quiz-mode-line');
  if (state.mode === 'daily') modeLine.hidden = true;
  else { modeLine.hidden = false; modeLine.textContent = state.mode === 'erros' ? 'Revisão de erros' : `Treino · ${state.label}`; }
  buildDots();
  if (resumed) state.answers.forEach((ok, i) => markDot(i, ok));
  updateRun(false);
  renderQuestion();
}
function buildDots() {
  const c = $('progress-dots');
  c.textContent = '';
  state.questions.forEach((_, i) => {
    const d = el('div', 'pdot' + (i === state.current ? ' current' : ''));
    d.id = `pdot-${i}`;
    c.appendChild(d);
  });
}
function markDot(i, ok) {
  const d = $(`pdot-${i}`);
  if (d) d.className = 'pdot ' + (ok ? 'correct' : 'wrong');
}
function tagOf(q) {
  if (!q.disc) return subj().label;
  return q.tema && q.tema !== q.disc ? `${q.disc} · ${q.tema}` : q.disc;
}
function renderQuestion() {
  const q = state.questions[state.current];
  const total = state.questions.length;
  $('q-counter').textContent = `Questão ${state.current + 1} de ${total}`;
  $('q-source').textContent = tagOf(q);
  $('q-text').textContent = q.text;
  const cur = $(`pdot-${state.current}`);
  if (cur && !cur.classList.contains('correct') && !cur.classList.contains('wrong')) cur.className = 'pdot current';

  const qa = $('q-area');
  qa.classList.remove('fade-in'); void qa.offsetWidth; qa.classList.add('fade-in');

  const opts = $('options');
  opts.textContent = '';
  q.opts.forEach((o, i) => {
    const b = el('button', 'opt');
    b.type = 'button';
    b.append(el('span', 'opt-letter', LETTERS[i]), el('span', 'opt-text', o));
    b.setAttribute('aria-label', `Alternativa ${LETTERS[i]}: ${o}`);
    b.addEventListener('click', () => selectOpt(i));
    opts.appendChild(b);
  });

  if (state.pending !== null) {
    pauseTimer();
    paintAnswered(state.pending);
  } else {
    const fb = $('feedback-box');
    fb.className = 'feedback-box';
    $('btn-next').style.display = 'none';
    startTimer();
  }
  saveProgress();
}
function selectOpt(i) {
  if (state.pending !== null) return;
  const q = state.questions[state.current];
  const ok = i === q.ans;
  pauseTimer();
  state.pending = i;
  state.answers.push(ok);
  state.chosen.push(i);
  state.run = ok ? state.run + 1 : 0;
  recordAnswer(q, ok);
  markDot(state.current, ok);
  updateRun(true);
  paintAnswered(i);
  saveProgress();
  $('btn-next').focus({ preventScroll: true });
}
function paintAnswered(i) {
  const q = state.questions[state.current];
  const ok = i === q.ans;
  const buttons = $('options').querySelectorAll('.opt');
  buttons.forEach((b, k) => {
    b.disabled = true;
    if (k === i) b.classList.add(ok ? 'selected-correct' : 'selected-wrong');
    if (!ok && k === q.ans) b.classList.add('show-correct');
  });
  const fb = $('feedback-box');
  fb.className = 'feedback-box visible ' + (ok ? 'correct' : 'wrong');
  $('feedback-label').textContent = ok ? '✓ Correto!' : '✗ Errado';
  $('feedback-answer').textContent = ok ? '' : `Resposta correta: ${LETTERS[q.ans]}) ${q.opts[q.ans]}`;
  $('feedback-expl').textContent = q.expl;
  const next = $('btn-next');
  next.style.display = 'block';
  next.textContent = state.current < state.questions.length - 1 ? 'Próxima questão →' : 'Ver resultado →';
}
function updateRun(animate) {
  const box = $('session-streak');
  if (state.run >= 2) {
    $('session-streak-count').textContent = state.run;
    box.classList.add('visible');
    if (animate) { box.classList.remove('pop-anim'); void box.offsetWidth; box.classList.add('pop-anim'); }
  } else box.classList.remove('visible', 'pop-anim');
}
function nextQ() {
  if (state.pending === null) return;
  state.current++;
  state.pending = null;
  if (state.current >= state.questions.length) finish();
  else renderQuestion();
}
function finish() {
  pauseTimer();
  const s = subj();
  const correct = state.answers.filter(Boolean).length;
  if (state.mode === 'daily') {
    store.del(K.progress(s));
    saveResult();
    updateStreak(s);
    recordHistory(s, today(), correct, state.answers.length, state.elapsed);
  } else if (state.mode === 'treino') {
    const all = store.get(K.vistas, {}) || {};
    const list = (all[s.key] || []).filter(id => !state.questions.some(q => q.id === id));
    state.questions.forEach(q => list.push(q.id));
    all[s.key] = list.slice(-Math.max(20, Math.floor(getBank(s).length * 0.8)));
    store.set(K.vistas, all);
  }
  renderStreakBadge();
  renderResult();
}
function showSavedResult() {
  const r = loadResult();
  if (!r) { renderIntro(); return; }
  state.mode = 'daily';
  state.quizDate = today();
  state.questions = r.questions;
  state.answers = r.answers;
  state.chosen = r.chosenAnswers || r.answers.map(() => null);
  state.elapsed = r.elapsed || 0;
  renderResult();
}

// ════════════════════════ RESULTADO ════════════════════════
function getMsg(p) {
  if (p === 100) return '🏆 Perfeito! Mandou muito!';
  if (p >= 80) return '🎯 Ótimo desempenho! Quase lá.';
  if (p >= 60) return '📈 Bom resultado. Continue assim.';
  if (p >= 40) return '💪 Ainda há espaço para crescer.';
  return '📚 Revise os conteúdos e tente de novo.';
}
function renderResult() {
  show('result');
  const s = subj();
  const total = state.answers.length;
  const correct = state.answers.filter(Boolean).length;
  const p = pct(correct, total);

  $('result-label').textContent = state.mode === 'daily'
    ? `Simulado de ${s.label} — ${fmtDate(state.quizDate || today())}`
    : state.mode === 'erros' ? `${s.label} — revisão de erros` : `Treino — ${state.label}`;
  $('final-score').textContent = correct;
  $('final-denom').textContent = `/${total}`;
  $('s-correct').textContent = correct;
  $('s-wrong').textContent = total - correct;
  $('s-pct').textContent = p + '%';
  $('result-msg').textContent = getMsg(p);
  $('result-time').textContent = state.elapsed >= 1
    ? `Tempo de resposta: ${fmtDuration(state.elapsed)} · média de ${fmtDuration(state.elapsed / Math.max(1, total))} por questão`
    : '';

  // desempenho por disciplina neste simulado
  const byDisc = new Map();
  state.questions.forEach((q, i) => {
    if (i >= total) return;
    const d = q.disc || s.label;
    const e = byDisc.get(d) || [0, 0];
    byDisc.set(d, [e[0] + (state.answers[i] ? 1 : 0), e[1] + 1]);
  });
  const block = $('result-disc-block');
  const list = $('result-disc');
  list.textContent = '';
  block.hidden = byDisc.size < 2;
  for (const [d, [c, t]] of byDisc) {
    const row = el('div', 'disc-row');
    row.append(el('span', 'disc-name', d), el('span', 'disc-val', `${c} de ${t}`));
    list.appendChild(row);
  }

  // revisão
  const review = $('review');
  review.textContent = '';
  state.questions.forEach((q, i) => {
    if (i >= total) return;
    const ok = state.answers[i];
    const chosen = state.chosen[i];
    const card = el('div', `review-card ${ok ? 'correct-card' : 'wrong'}`);
    const head = el('div', 'rc-header');
    const qWrap = el('div', 'rc-q');
    qWrap.append(el('span', 'rc-tag', tagOf(q)), el('span', 'rc-q-text', `${i + 1}. ${q.text}`));
    head.append(qWrap, el('div', `rc-icon ${ok ? 'rc-icon-correct' : 'rc-icon-wrong'}`, ok ? '✓' : '✗'));
    card.appendChild(head);
    if (!ok && chosen !== null && chosen !== undefined && q.opts[chosen] !== undefined) {
      const line = el('div', 'rc-chosen', 'Sua resposta: ');
      line.appendChild(el('span', 'rc-wrong-ans', `${LETTERS[chosen]}) ${q.opts[chosen]}`));
      card.appendChild(line);
    }
    const ans = el('div', 'rc-ans', 'Gabarito: ');
    ans.appendChild(el('span', 'rc-correct-ans', `${LETTERS[q.ans]}) ${q.opts[q.ans]}`));
    card.appendChild(ans);
    if (q.expl) card.appendChild(el('div', 'rc-expl', q.expl));
    review.appendChild(card);
  });

  $('btn-share').hidden = state.mode !== 'daily';
  const again = $('btn-again');
  again.hidden = state.mode === 'daily';
  if (state.mode === 'treino') {
    again.textContent = 'Treinar de novo';
    again.onclick = () => startTreino(state.treinoPick?.disc || null, state.treinoPick?.tema || null);
  } else if (state.mode === 'erros') {
    const left = errosList().length;
    again.hidden = !left;
    again.textContent = `Revisar mais erros (${left})`;
    again.onclick = startErros;
  }
}

function shareUrl() {
  return /^https?:/.test(location.protocol) ? location.origin + location.pathname : 'https://kauanomota.github.io/SimulaDia/';
}
function shareResult() {
  const s = subj();
  const correct = state.answers.filter(Boolean).length;
  const { streak } = getStreak();
  const dots = state.answers.map(a => (a ? '🟢' : '🔴')).join('');
  const text = [
    `SimulaDia · ${s.label} · ${fmtDate(state.quizDate || today())}`,
    `${correct}/${state.answers.length} acertos`,
    dots,
    streak > 1 ? `🔥 ${streak} dias seguidos` : null,
    shareUrl(),
  ].filter(Boolean).join('\n');

  const btn = $('btn-share');
  const done = msg => {
    btn.textContent = msg;
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '↗ Compartilhar resultado'; btn.classList.remove('copied'); }, 2500);
  };
  const fallbackCopy = () => {
    const ta = el('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done('✓ Copiado!'); } catch { done('Não foi possível copiar'); }
    ta.remove();
  };
  const touch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  if (touch && navigator.share) {
    navigator.share({ text }).catch(() => {});
    return;
  }
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(() => done('✓ Copiado!'), fallbackCopy);
  else fallbackCopy();
}

// ════════════════════════ TREINO POR TEMA ════════════════════════
function groupBank(s) {
  const discs = new Map();
  getBank(s).forEach(q => {
    const d = q.disc || s.label;
    if (!discs.has(d)) discs.set(d, new Map());
    const temas = discs.get(d);
    const t = q.tema || d;
    temas.set(t, (temas.get(t) || 0) + 1);
  });
  return discs;
}
function accText(stat) {
  if (!stat || !stat[1]) return 'sem respostas ainda';
  return `${pct(stat[0], stat[1])}% de acerto em ${stat[1]}`;
}
function discStat(stats, disc) {
  let c = 0, t = 0;
  for (const [k, v] of Object.entries(stats)) if (k.split('|')[0] === disc) { c += v[0]; t += v[1]; }
  return t ? [c, t] : null;
}
function renderTreino() {
  const s = subj();
  applyTheme();
  const bank = getBank(s);
  const stats = temaStats(s);
  $('treino-desc').textContent = `${s.full} · ${bank.length} questões. Cada sessão tem até ${PER_SESSION} questões, priorizando as que você ainda não viu.`;
  const all = $('treino-all');
  all.textContent = 'Misturar todas as disciplinas →';
  all.onclick = () => startTreino();

  const list = $('treino-list');
  list.textContent = '';
  for (const [disc, temas] of groupBank(s)) {
    const total = [...temas.values()].reduce((a, b) => a + b, 0);
    const det = el('details', 'treino-disc');
    const sum = el('summary', 'treino-sum');
    const left = el('span', 'treino-sum-text');
    left.append(el('span', 'treino-disc-name', disc), el('span', 'treino-meta', `${total} questões · ${accText(discStat(stats, disc))}`));
    sum.append(left, el('span', 'treino-chev'));
    det.appendChild(sum);

    const body = el('div', 'treino-body');
    const allBtn = el('button', 'treino-tema treino-tema-all');
    allBtn.type = 'button';
    allBtn.append(el('span', 'tema-name', `Toda a disciplina`), el('span', 'tema-meta', `${total} questões`));
    allBtn.addEventListener('click', () => startTreino(disc, null));
    body.appendChild(allBtn);
    if (temas.size > 1 || ![...temas.keys()].includes(disc)) {
      for (const [tema, n] of temas) {
        const b = el('button', 'treino-tema');
        b.type = 'button';
        b.append(el('span', 'tema-name', tema), el('span', 'tema-meta', `${n} · ${accText(stats[`${disc}|${tema}`])}`));
        b.addEventListener('click', () => startTreino(disc, tema));
        body.appendChild(b);
      }
    }
    det.appendChild(body);
    list.appendChild(det);
  }
}
function openTreino() { renderTreino(); show('treino'); }

// ════════════════════════ DESEMPENHO ════════════════════════
function renderStats() {
  applyTheme();
  const hist = store.get(K.hist, {}) || {};

  // visão geral das quatro áreas
  const ov = $('stats-overview');
  ov.textContent = '';
  const table = el('div', 'ov-table');
  const head = el('div', 'ov-row ov-head');
  ['Área', 'Simulados', 'Média', 'Sequência'].forEach(t => head.appendChild(el('span', null, t)));
  table.appendChild(head);
  SUBJECTS.forEach((s, i) => {
    const days = Object.values(hist[s.key] || {});
    const c = days.reduce((a, d) => a + d.c, 0), t = days.reduce((a, d) => a + d.t, 0);
    const { streak, best } = getStreak(s);
    const row = el('div', 'ov-row' + (i === state.subjectIdx ? ' active' : ''));
    row.dataset.key = s.key;
    const name = el('span', 'ov-name');
    name.append(el('span', 'ov-dot'), document.createTextNode(s.label));
    row.append(name, el('span', null, String(days.length)), el('span', null, t ? `${pct(c, t)}%` : '—'),
      el('span', null, best ? `${streak} (recorde ${best})` : '—'));
    table.appendChild(row);
  });
  ov.appendChild(table);

  buildTabs($('stats-tabs'), i => selectSubject(i));
  const s = subj();
  const h = hist[s.key] || {};

  // últimos 14 dias
  const chart = $('days-chart');
  chart.textContent = '';
  const t0 = today();
  let doneDays = 0, sumPct = 0;
  for (let k = 13; k >= 0; k--) {
    const d = addDays(t0, -k);
    const r = h[d];
    const col = el('div', 'day-col' + (r ? '' : ' empty') + (k === 0 ? ' is-today' : ''));
    col.tabIndex = 0;
    const plot = el('div', 'day-plot');
    const bar = el('div', 'day-bar');
    if (r) {
      const p = pct(r.c, r.t);
      bar.style.height = Math.max(4, p) + '%';
      doneDays++; sumPct += p;
    }
    plot.appendChild(bar);
    const label = fmtDate(d, { day: 'numeric', month: 'short' });
    const tipText = r ? `${label} · ${r.c} de ${r.t} acertos${r.s ? ` · ${fmtDuration(r.s)}` : ''}` : `${label} · sem simulado`;
    col.setAttribute('aria-label', tipText);
    col.append(plot, el('div', 'day-label', String(parseDate(d).getDate())));
    bindTip(col, tipText);
    chart.appendChild(col);
  }
  $('days-caption').textContent = doneDays
    ? `${plural(doneDays, 'simulado feito', 'simulados feitos')} nos últimos 14 dias · média de ${Math.round(sumPct / doneDays)}% de acerto.`
    : `Nenhum simulado de ${s.label} nos últimos 14 dias.`;

  // por disciplina (simulados + treinos)
  const stats = temaStats(s);
  const discChart = $('disc-chart');
  discChart.textContent = '';
  const discRows = [...groupBank(s).keys()].map(d => [d, discStat(stats, d)]).filter(([, v]) => v);
  if (!discRows.length) discChart.appendChild(el('p', 'empty-note', 'Responda algumas questões para ver seus acertos por disciplina.'));
  discRows.forEach(([d, [c, t]]) => {
    const row = el('div', 'hbar-row');
    row.tabIndex = 0;
    const track = el('div', 'hbar-track');
    const fill = el('div', 'hbar-fill');
    fill.style.width = Math.max(2, pct(c, t)) + '%';
    track.appendChild(fill);
    row.append(el('span', 'hbar-name', d), track, el('span', 'hbar-val', `${pct(c, t)}%`));
    const tipText = `${d} · ${c} de ${t} acertos`;
    row.setAttribute('aria-label', tipText);
    bindTip(row, tipText);
    discChart.appendChild(row);
  });

  // temas mais fracos
  const weak = Object.entries(stats)
    .filter(([, v]) => v[1] >= 3)
    .map(([k, v]) => ({ disc: k.split('|')[0], tema: k.split('|')[1], c: v[0], t: v[1], p: pct(v[0], v[1]) }))
    .filter(w => w.p < 80)
    .sort((a, b) => a.p - b.p || b.t - a.t)
    .slice(0, 5);
  const wl = $('weak-list');
  wl.textContent = '';
  if (!weak.length) {
    wl.appendChild(el('p', 'empty-note', Object.keys(stats).length
      ? 'Nenhum tema abaixo de 80% de acerto (com pelo menos 3 respostas). Continue assim.'
      : 'Os temas em que você mais erra aparecerão aqui.'));
  }
  const bank = getBank(s);
  weak.forEach(w => {
    const exists = bank.some(q => q.disc === w.disc && q.tema === w.tema);
    const row = el('div', 'weak-row');
    const txt = el('div', 'weak-text');
    txt.append(el('span', 'weak-tema', w.tema), el('span', 'weak-meta', `${w.disc} · ${w.p}% de acerto em ${w.t}`));
    row.appendChild(txt);
    if (exists) {
      const b = el('button', 'weak-btn', 'Treinar');
      b.type = 'button';
      b.addEventListener('click', () => startTreino(w.disc, w.tema));
      row.appendChild(b);
    }
    wl.appendChild(row);
  });
}
function openStats() { renderStats(); show('stats'); }
function resetHistory() {
  const ok = window.confirm('Apagar sequências, estatísticas e a lista de erros deste navegador?\nO simulado de hoje continua salvo.');
  if (!ok) return;
  [K.hist, K.temas, K.erros, K.vistas, ...SUBJECTS.map(K.streak)].forEach(k => store.del(k));
  renderStats();
  renderStreakBadge();
}

// tooltip dos gráficos (mouse e teclado)
function bindTip(target, text) {
  const showIt = () => {
    const tip = $('chart-tip');
    tip.textContent = text;
    tip.hidden = false;
    const r = target.getBoundingClientRect();
    const tr = tip.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const left = Math.max(8, Math.min(r.left + r.width / 2 - tr.width / 2, vw - tr.width - 8));
    const top = r.top - tr.height - 8 < 8 ? r.bottom + 8 : r.top - tr.height - 8;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  };
  target.addEventListener('mouseenter', showIt);
  target.addEventListener('focus', showIt);
  target.addEventListener('mouseleave', hideTip);
  target.addEventListener('blur', hideTip);
}
function hideTip() { const t = $('chart-tip'); if (t) t.hidden = true; }

// ════════════════════════ CONTAGEM REGRESSIVA E VIRADA DO DIA ════════════════════════
function updateCountdown() {
  const n = now();
  const midnight = new Date(n);
  midnight.setHours(24, 0, 0, 0);
  const secs = Math.floor((midnight - n) / 1000);
  const p = x => String(x).padStart(2, '0');
  $('countdown-timer').querySelector('.cd-time').textContent =
    `${p(Math.floor(secs / 3600))}:${p(Math.floor((secs % 3600) / 60))}:${p(secs % 60)}`;
}
function purgeOldStorage() {
  if (store.raw(K.ver) !== STORAGE_VERSION) {
    // apaga só o que depende do formato (resultados e progresso); sequência e histórico ficam
    const preserve = [K.subject, K.hist, K.temas, K.erros, K.vistas];
    store.keys().forEach(k => {
      if (k && k.startsWith('sd_') && !preserve.includes(k) && !k.startsWith('sd_streak_')) store.del(k);
    });
    store.setRaw(K.ver, STORAGE_VERSION);
    return;
  }
  const t = today();
  store.keys().forEach(k => {
    if (k && (k.startsWith('sd_result_') || k.startsWith('sd_progress_')) && !k.endsWith(t)) store.del(k);
  });
}
let lastKnownDate = null;
function checkDayRollover() {
  const t = today();
  if (t === lastKnownDate) return;
  lastKnownDate = t;
  purgeOldStorage();
  updateCountdown();
  // treino e revisão continuam; o simulado do dia volta para o início (o de amanhã já está pronto)
  if (state.screen === 'quiz' && state.mode !== 'daily') return;
  if (state.screen === 'stats') { renderStats(); return; }
  if (state.screen === 'treino') return;
  pauseTimer();
  if (state.screen === 'quiz') { state.questions = []; state.current = 0; } // não grava o simulado de ontem como progresso de hoje
  state.quizDate = null;
  renderIntro();
  show('intro');
}

// ════════════════════════ INICIALIZAÇÃO ════════════════════════
function init() {
  purgeOldStorage();
  const saved = parseInt(store.raw(K.subject) || '0', 10);
  state.subjectIdx = Number.isInteger(saved) && saved >= 0 ? saved % SUBJECTS.length : 0;
  lastKnownDate = today();

  $('logo').addEventListener('click', goHome);
  document.querySelectorAll('[data-go-home]').forEach(b => b.addEventListener('click', goHome));
  $('btn-stats').addEventListener('click', openStats);
  $('btn-treino').addEventListener('click', openTreino);
  $('btn-erros').addEventListener('click', startErros);
  $('btn-next').addEventListener('click', nextQ);
  $('btn-share').addEventListener('click', shareResult);
  $('btn-redo').addEventListener('click', goHome);
  $('btn-reset').addEventListener('click', resetHistory);

  document.addEventListener('keydown', e => {
    if (state.screen !== 'quiz' || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (state.pending === null) {
      let idx = 'abcde'.indexOf(k);
      if (idx < 0 && /^[1-5]$/.test(k)) idx = Number(k) - 1;
      const q = state.questions[state.current];
      if (k.length === 1 && idx >= 0 && q && idx < q.opts.length) { e.preventDefault(); selectOpt(idx); }
    } else if (k === 'arrowright' || (k === 'enter' && !(e.target instanceof HTMLButtonElement))) {
      // Enter num botão focado já dispara o clique; tratar aqui pularia uma questão
      e.preventDefault();
      nextQ();
    }
  });
  window.addEventListener('pagehide', () => {
    if (state.screen === 'quiz' && state.timer) tick();
    if (state.screen === 'quiz') saveProgress();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') { state.lastTick = Date.now(); checkDayRollover(); }
  });
  window.addEventListener('scroll', hideTip, { passive: true });
  setInterval(checkDayRollover, 60000);
  setInterval(updateCountdown, 1000);
  updateCountdown();

  renderIntro();
  show('intro');

  // Atalhos de teste no console:
  //   _testNextDay()  simula a virada para o dia seguinte (pode chamar várias vezes)
  //   _testReset()    volta para a data real
  window._testNextDay = () => { dayOffset++; checkDayRollover(); console.log(`%c✓ Data simulada: ${today()} — rode _testReset() para voltar`, 'color:#34D399;font-weight:bold'); };
  window._testReset = () => { dayOffset = 0; checkDayRollover(); console.log(`%c✓ De volta a ${today()}`, 'color:#818CF8;font-weight:bold'); };
}

init();
