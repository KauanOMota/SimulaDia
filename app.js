// ─── LÓGICA PRINCIPAL ───
// app.js — quiz engine com multi-matéria, tabs e banco isolado por área

// ─── SUBJECTS ───
const SUBJECTS = [
  {
    key: 'mat',
    label: 'Matemática',
    labelShort: 'Mat',
    themeClass: 'subject-mat',
    accentColor: '#818CF8',
    heroTitle: 'O simulado<br>de <em>hoje</em> está pronto.',
    heroDesc: '10 questões reais. Sem cadastro. Novo simulado todo dia.',
    resultLabel: 'SimulaDia — Matemática',
    bankFile: 'questions_mat.js',
    bankVar: 'BANK_MAT',
  },
  {
    key: 'lin',
    label: 'Linguagens',
    labelShort: 'Lin',
    themeClass: 'subject-lin',
    accentColor: '#FB923C',
    heroTitle: 'O simulado<br>de <em>hoje</em> está pronto.',
    heroDesc: '10 questões reais. Sem cadastro. Novo simulado todo dia.',
    resultLabel: 'SimulaDia — Linguagens',
    bankFile: 'questions_lin.js',
    bankVar: 'BANK_LING',
  },
  {
    key: 'hum',
    label: 'Humanas',
    labelShort: 'Hum',
    themeClass: 'subject-hum',
    accentColor: '#34D399',
    heroTitle: 'O simulado<br>de <em>hoje</em> está pronto.',
    heroDesc: '10 questões reais. Sem cadastro. Novo simulado todo dia.',
    resultLabel: 'SimulaDia — Ciências Humanas',
    bankFile: 'questions_hum.js',
    bankVar: 'BANK_HUM',
  },
  {
    key: 'nat',
    label: 'Natureza',
    labelShort: 'Nat',
    themeClass: 'subject-nat',
    accentColor: '#38BDF8',
    heroTitle: 'O simulado<br>de <em>hoje</em> está pronto.',
    heroDesc: '10 questões reais. Sem cadastro. Novo simulado todo dia.',
    resultLabel: 'SimulaDia — Ciências da Natureza',
    bankFile: 'questions_nat.js',
    bankVar: 'BANK_NAT',
  },
];

let currentSubjectIdx = 0;

// ─── BANCO DE QUESTÕES ───
// Retorna o BANK da matéria atual, com fallback para BANK (legado)
function getBank() {
  const s = SUBJECTS[currentSubjectIdx];
  // Tenta a variável específica da matéria (ex: BANK_MAT)
  if (typeof window[s.bankVar] !== 'undefined') return window[s.bankVar];
  // Fallback: usa BANK global (compatibilidade com questions.js legado)
  if (typeof BANK !== 'undefined') return BANK;
  return [];
}

// ─── GERADOR DE QUESTÕES SEM REPETIÇÃO ───
// Mantém uma fila de índices embaralhados no localStorage por matéria.
// Cada dia consome os próximos 10 da fila. Quando a fila tem menos de 10,
// gera nova rodada embaralhada evitando repetir as últimas da rodada anterior.

function getQueueKey() {
  return 'sd_queue_' + SUBJECTS[currentSubjectIdx].key;
}

// LCG determinístico — embaralha array com seed numérico
function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed | 0;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) | 0;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Gera nova rodada tentando evitar que as primeiras 10 repitam
// o tail (últimas questões da rodada anterior)
function newRound(bankSize, tailIndices) {
  const baseSeed = Date.now();
  const avoidCount = Math.min(tailIndices.length, Math.floor(bankSize / 2));
  const tail = new Set(tailIndices.slice(-avoidCount));
  for (let attempt = 0; attempt < 20; attempt++) {
    const shuffled = seededShuffle([...Array(bankSize).keys()], baseSeed + attempt);
    const overlap = shuffled.slice(0, 10).filter(x => tail.has(x)).length;
    if (overlap === 0) return shuffled;
  }
  // fallback: aceita qualquer embaralhamento
  return seededShuffle([...Array(bankSize).keys()], baseSeed);
}

function loadQueue() {
  try { return JSON.parse(localStorage.getItem(getQueueKey())) || null; }
  catch { return null; }
}
function saveQueue(q) {
  localStorage.setItem(getQueueKey(), JSON.stringify(q));
}

function getDailyQuestions() {
  const bank = getBank();
  if (!bank.length) return [];

  const todayStr = new Date().toISOString().slice(0, 10);
  const subjectKey = SUBJECTS[currentSubjectIdx].key;
  const dayToken = todayStr + '_' + subjectKey;

  // Carrega ou inicializa a fila persistente por matéria
  let queue = loadQueue();

  // Reinicia se o banco mudou de tamanho (novas questões adicionadas)
  if (!queue || queue.bankSize !== bank.length) {
    queue = { bankSize: bank.length, indices: [], tail: [], usedToday: null, todayIndices: [] };
  }

  // Idempotente: se já escolhemos questões hoje, retorna as mesmas
  if (queue.usedToday === dayToken && queue.todayIndices && queue.todayIndices.length === 10) {
    return queue.todayIndices.map(i => bank[i]);
  }

  // Se há resultado finalizado ou progresso parcial de hoje, usa as questões deles
  // sem consumir a fila (a fila já foi consumida quando esse simulado começou)
  const savedResult = loadTodayResult();
  if (savedResult && savedResult.questions) return savedResult.questions;
  const savedProgress = loadProgress();
  if (savedProgress && savedProgress.questions) return savedProgress.questions;

  // Abastece a fila se necessário
  if (queue.indices.length < 10) {
    const newIndices = newRound(bank.length, queue.tail || []);
    // Em bancos pequenos (< 20), concatena em vez de substituir para não perder restantes
    queue.indices = [...queue.indices, ...newIndices].slice(0, bank.length);
  }

  // Consome as próximas 10
  const todayIndices = queue.indices.splice(0, 10);
  queue.tail = todayIndices;
  queue.usedToday = dayToken;
  queue.todayIndices = todayIndices;

  saveQueue(queue);
  return todayIndices.map(i => bank[i]);
}

// ─── STORAGE KEYS (isolados por matéria) ───
// Sempre usam a data real do dia — quizStartDate nunca influencia as chaves de storage
function getTodayKey() {
  const key = SUBJECTS[currentSubjectIdx].key;
  return `sd_result_${key}_` + new Date().toISOString().slice(0, 10);
}
function getProgressKey() {
  const key = SUBJECTS[currentSubjectIdx].key;
  return `sd_progress_${key}_` + new Date().toISOString().slice(0, 10);
}
function getStreakKey() {
  return `sd_streak_${SUBJECTS[currentSubjectIdx].key}`;
}

function saveTodayResult() {
  const payload = {
    answers,
    chosenAnswers,
    questions: questions.map(q => ({
      text: q.text, source: q.source, opts: q.opts, ans: q.ans, expl: q.expl
    }))
  };
  localStorage.setItem(getTodayKey(), JSON.stringify(payload));
}
function loadTodayResult() {
  try { return JSON.parse(localStorage.getItem(getTodayKey())); }
  catch { return null; }
}

// Salva progresso parcial após cada resposta
function saveProgress() {
  const payload = {
    current,
    answers,
    chosenAnswers,
    sessionStreak,
    quizStartDate,
    pendingAnswer, // alternativa marcada mas ainda não avançada
    questions: questions.map(q => ({
      text: q.text, source: q.source, opts: q.opts, ans: q.ans, expl: q.expl
    }))
  };
  localStorage.setItem(getProgressKey(), JSON.stringify(payload));
}
// Carrega progresso parcial (simulado em andamento)
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(getProgressKey())); }
  catch { return null; }
}
// Remove progresso parcial (ao finalizar ou ao trocar de matéria)
function clearProgress() {
  localStorage.removeItem(getProgressKey());
}

// ─── STREAK (por matéria) ───
function getStreak() {
  const today = new Date().toISOString().slice(0, 10); // streak sempre usa data real
  const data = JSON.parse(localStorage.getItem(getStreakKey()) || '{}');
  return { streak: data.streak || 0, last: data.last || null, today };
}
function updateStreak() {
  const { streak, last, today } = getStreak();
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  let newStreak;
  if (last === today) {
    newStreak = streak;
  } else if (last === yesterday) {
    newStreak = streak + 1;
  } else {
    newStreak = 1;
  }
  localStorage.setItem(getStreakKey(), JSON.stringify({ streak: newStreak, last: today }));
  return newStreak;
}

let questions, current, answers, chosenAnswers, sessionStreak;
let pendingAnswer = null; // índice da alternativa marcada antes de avançar
// Data capturada no início de cada simulado — evita troca de dia a meia-noite
let quizStartDate = null;
function getSessionDate() {
  // Durante um simulado ativo, usa a data em que ele começou
  // Na tela inicial (fora de um simulado), usa a data atual
  return quizStartDate || new Date().toISOString().slice(0, 10);
}

// ─── TABS DE MATÉRIA ───
function buildSubjectTabs() {
  const container = document.getElementById('subject-tabs');
  container.innerHTML = '';
  SUBJECTS.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'stab' + (i === currentSubjectIdx ? ' active' : '');
    btn.textContent = s.labelShort;
    btn.dataset.idx = i;
    btn.onclick = () => {
      if (i === currentSubjectIdx) return;
      currentSubjectIdx = i;
      localStorage.setItem('sd_subject', i);
      // Reseta apenas o estado em memória — NÃO limpa o progresso salvo no storage,
      // para que o usuário possa retomar cada matéria de onde parou ao voltar à tab
      current = 0;
      answers = [];
      chosenAnswers = [];
      sessionStreak = 0;
      quizStartDate = null;
      buildSubjectTabs();
      applySubjectTheme(i, true);
      loadSubjectData();
    };
    container.appendChild(btn);
  });
}

// ─── CARREGAR DADOS DA MATÉRIA ───
function loadSubjectData() {
  questions = getDailyQuestions();
  current = 0;
  answers = [];
  chosenAnswers = [];
  sessionStreak = 0;

  const { streak } = getStreak();
  if (streak > 0) {
    document.getElementById('streak-count').textContent = streak;
    document.getElementById('streak-badge').style.display = 'flex';
  } else {
    document.getElementById('streak-badge').style.display = 'none';
  }

  const heroP = document.getElementById('hero-desc');
  const btnStart = document.getElementById('btn-start');
  const s = SUBJECTS[currentSubjectIdx];

  // Fade out content, swap, fade in — so layout stays put
  const heroDescWrap = document.getElementById('hero-desc-wrap') || heroP.parentElement;
  heroDescWrap.classList.remove('hero-content-fade');
  void heroDescWrap.offsetWidth;

  const saved = loadTodayResult();
  const progress = loadProgress();
  if (saved) {
    // Simulado já finalizado hoje
    questions = saved.questions;
    answers = saved.answers;
    chosenAnswers = saved.chosenAnswers || answers.map(() => null);
    heroP.textContent = 'Você já concluiu o simulado de hoje. Volte amanhã para um novo desafio!';
    btnStart.innerHTML = 'Ver resultado <span class="arrow">→</span>';
    btnStart.onclick = () => {
      document.getElementById('screen-intro').style.display = 'none';
      renderResult({ fromCache: true });
    };
  } else if (progress) {
    // Simulado em andamento — progresso parcial salvo (validado como sendo de hoje)
    const done = progress.answers.length;
    const total = progress.questions.length;
    heroP.textContent = `Você está na questão ${done + 1} de ${total}. Continue de onde parou!`;
    btnStart.innerHTML = 'Continuar simulado <span class="arrow">→</span>';
    btnStart.onclick = resumeQuiz;
  } else {
    heroP.textContent = s.heroDesc;
    btnStart.innerHTML = 'Começar simulado <span class="arrow">→</span>';
    btnStart.onclick = startQuiz;
  }

  heroDescWrap.classList.add('hero-content-fade');
}

// ─── APLICAR TEMA ───
function applySubjectTheme(idx, animate = false) {
  const s = SUBJECTS[idx];

  SUBJECTS.forEach(sub => document.body.classList.remove(sub.themeClass));
  document.body.classList.add(s.themeClass);

  // Atualiza indicador legado (ainda no DOM)
  const labelEl = document.getElementById('subject-label');
  if (labelEl) labelEl.textContent = s.label;

  // Atualiza nome completo da matéria abaixo das tabs
  const nameLineEl = document.getElementById('subject-name-line');
  if (nameLineEl) nameLineEl.textContent = s.label;

  // Cor do "hoje" no título
  const heroTitle = document.getElementById('hero-title');

  if (animate) {
    heroTitle.classList.remove('subject-switch-anim');
    void heroTitle.offsetWidth;
    heroTitle.innerHTML = s.heroTitle;
    heroTitle.classList.add('subject-switch-anim');
  } else {
    heroTitle.innerHTML = s.heroTitle;
  }

  // Aplica a cor do "hoje" via CSS var
  document.documentElement.style.setProperty('--subject-accent', s.accentColor);

  localStorage.setItem('sd_subject', idx);
}

function updateDateLine() {
  const d = new Date();
  document.getElementById('date-line').textContent =
    d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

// ─── CRONÔMETRO DE RENOVAÇÃO ───
function getSecondsUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return Math.floor((midnight - now) / 1000);
}

function updateCountdown() {
  const el = document.getElementById('countdown-timer');
  if (!el) return;
  const secs = getSecondsUntilMidnight();
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  const pad = n => String(n).padStart(2, '0');
  el.querySelector('.cd-time').textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function initCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function purgeOldStorage() {
  // Remove resultados e progressos de dias anteriores do localStorage
  const today = new Date().toISOString().slice(0, 10);
  const keysToDelete = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k) continue;
    if ((k.startsWith('sd_result_') || k.startsWith('sd_progress_')) && !k.endsWith(today)) {
      keysToDelete.push(k);
    }
  }
  keysToDelete.forEach(k => localStorage.removeItem(k));
}

function init() {
  purgeOldStorage(); // limpa dados de dias anteriores na inicialização
  updateDateLine();
  initCountdown();

  const savedSubject = parseInt(localStorage.getItem('sd_subject') || '0', 10);
  currentSubjectIdx = isNaN(savedSubject) ? 0 : savedSubject % SUBJECTS.length;

  buildSubjectTabs();
  applySubjectTheme(currentSubjectIdx, false);
  loadSubjectData();

  document.getElementById('screen-intro').style.display = 'block';

  // Detecta virada de dia tanto por intervalo quanto por retorno de sleep (visibilitychange)
  let lastKnownDate = new Date().toISOString().slice(0, 10);

  function checkDayRollover() {
    const today = new Date().toISOString().slice(0, 10);
    if (today === lastKnownDate) return;
    lastKnownDate = today;

    // Dia virou: zera quizStartDate e atualiza tela inicial se visível
    quizStartDate = null;
    updateDateLine();
    updateCountdown(); // atualiza cronômetro imediatamente

    const onIntro = document.getElementById('screen-intro').style.display !== 'none';
    if (onIntro) loadSubjectData();
  }

  setInterval(checkDayRollover, 60_000);

  // visibilitychange cobre o caso de o dispositivo ter dormido entre dias
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') checkDayRollover();
  });
}

function startQuiz() {
  quizStartDate = new Date().toISOString().slice(0, 10);
  questions = getDailyQuestions();
  current = 0;
  answers = [];
  chosenAnswers = [];
  sessionStreak = 0;
  clearProgress(); // garante que não há progresso parcial de outro dia
  pendingAnswer = null;
  document.getElementById('prog').style.width = '0%';
  document.getElementById('screen-intro').style.display = 'none';
  document.getElementById('screen-quiz').style.display = 'block';
  buildProgressDots();
  showQ();
}

// Restaura simulado em andamento a partir do progresso salvo
function resumeQuiz() {
  const progress = loadProgress();
  if (!progress) { startQuiz(); return; }

  quizStartDate  = progress.quizStartDate || new Date().toISOString().slice(0, 10);
  questions      = progress.questions;
  current        = progress.current;
  answers        = progress.answers;
  chosenAnswers  = progress.chosenAnswers || progress.answers.map(() => null);
  sessionStreak  = progress.sessionStreak;
  pendingAnswer  = progress.pendingAnswer ?? null;

  document.getElementById('screen-intro').style.display = 'none';
  document.getElementById('screen-quiz').style.display = 'block';

  // Reconstrói os dots e marca os já respondidos
  buildProgressDots();
  answers.forEach((correct, i) => updateProgressDots(i, correct));

  // Restaura barra de progresso
  document.getElementById('prog').style.width = (current / questions.length * 100) + '%';

  // Restaura streak visual
  updateSessionStreak();

  if (pendingAnswer !== null) {
    // Usuário já havia respondido esta questão mas não avançou — restaura estado visual
    showQAnswered(pendingAnswer);
  } else {
    showQ();
  }
}

// Renderiza a questão atual já respondida (estado pós-seleção, pré-avanço)
function showQAnswered(selectedIdx) {
  const q = questions[current];
  const pct = (current / questions.length) * 100;
  document.getElementById('prog').style.width = pct + '%';
  document.getElementById('q-counter').textContent = `Questão ${current+1} de ${questions.length}`;
  document.getElementById('q-source').textContent = q.source;
  document.getElementById('q-text').textContent = q.text;

  const qa = document.getElementById('q-area');
  qa.classList.remove('fade-in');
  void qa.offsetWidth;
  qa.classList.add('fade-in');

  const letters = ['A','B','C','D','E'];
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  const isCorrect = selectedIdx === q.ans;
  q.opts.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.disabled = true;
    btn.onclick = null;
    if (i === selectedIdx) btn.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
    if (!isCorrect && i === q.ans) btn.classList.add('show-correct');
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${o}</span>`;
    opts.appendChild(btn);
  });

  const fb = document.getElementById('feedback-box');
  fb.style.display = 'block';
  fb.className = 'feedback-box ' + (isCorrect ? 'correct' : 'wrong');
  document.getElementById('feedback-label').textContent = isCorrect ? '✓ Correto!' : '✗ Errado';
  document.getElementById('feedback-answer').textContent = isCorrect
    ? '' : `Resposta correta: ${letters[q.ans]}) ${q.opts[q.ans]}`;
  document.getElementById('feedback-expl').textContent = q.expl;

  const btn = document.getElementById('btn-next');
  btn.style.display = 'block';
  btn.textContent = current < questions.length - 1 ? 'Próxima questão →' : 'Ver resultado →';
}

function buildProgressDots() {
  const container = document.getElementById('progress-dots');
  container.innerHTML = '';
  questions.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'pdot' + (i === 0 ? ' current' : '');
    dot.id = `pdot-${i}`;
    container.appendChild(dot);
  });
}

function updateProgressDots(idx, correct) {
  const dot = document.getElementById(`pdot-${idx}`);
  if (dot) dot.className = 'pdot ' + (correct ? 'correct' : 'wrong');
  const next = document.getElementById(`pdot-${idx + 1}`);
  if (next) next.className = 'pdot current';
}

function showQ() {
  pendingAnswer = null; // limpa alternativa pendente ao entrar em nova questão
  const q = questions[current];
  const pct = (current / questions.length) * 100;
  document.getElementById('prog').style.width = pct + '%';
  document.getElementById('q-counter').textContent = `Questão ${current+1} de ${questions.length}`;
  document.getElementById('q-source').textContent = q.source;
  document.getElementById('q-text').textContent = q.text;

  const fb = document.getElementById('feedback-box');
  fb.style.display = 'none';
  fb.className = 'feedback-box';
  document.getElementById('btn-next').style.display = 'none';

  const qa = document.getElementById('q-area');
  qa.classList.remove('fade-in');
  void qa.offsetWidth;
  qa.classList.add('fade-in');

  const letters = ['A','B','C','D','E'];
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  q.opts.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${o}</span>`;
    btn.onclick = () => selectOpt(i);
    opts.appendChild(btn);
  });

  saveProgress(); // persiste current atualizado (mesmo sem resposta ainda)
}

function selectOpt(idx) {
  const q = questions[current];
  const allOpts = document.querySelectorAll('.opt');
  allOpts.forEach(o => { o.onclick = null; o.disabled = true; });

  const isCorrect = idx === q.ans;
  allOpts[idx].classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
  if (!isCorrect) allOpts[q.ans].classList.add('show-correct');

  pendingAnswer = idx; // marca alternativa selecionada antes de avançar
  answers.push(isCorrect);
  chosenAnswers.push(idx);
  updateProgressDots(current, isCorrect);

  if (isCorrect) sessionStreak++;
  else sessionStreak = 0;
  updateSessionStreak();
  saveProgress(); // persiste resposta e pendingAnswer

  const fb = document.getElementById('feedback-box');
  fb.style.display = 'block';
  fb.className = 'feedback-box ' + (isCorrect ? 'correct' : 'wrong');

  const letters = ['A','B','C','D','E'];
  document.getElementById('feedback-label').textContent = isCorrect ? '✓ Correto!' : '✗ Errado';
  document.getElementById('feedback-answer').textContent = isCorrect
    ? '' : `Resposta correta: ${letters[q.ans]}) ${q.opts[q.ans]}`;
  document.getElementById('feedback-expl').textContent = q.expl;

  const btn = document.getElementById('btn-next');
  btn.style.display = 'block';
  btn.textContent = current < questions.length - 1 ? 'Próxima questão →' : 'Ver resultado →';
}

function updateSessionStreak() {
  const el = document.getElementById('session-streak');
  const count = document.getElementById('session-streak-count');

  if (sessionStreak >= 2) {
    count.textContent = sessionStreak;
    el.classList.add('visible');
    el.classList.remove('pop-anim');
    void el.offsetWidth;
    el.classList.add('pop-anim');
  } else {
    el.classList.remove('visible', 'pop-anim');
  }
}

function nextQ() {
  current++;
  if (current >= questions.length) showResult();
  else showQ();
}

function getMsg(pct) {
  if (pct === 100) return '🏆 Perfeito! Mandou muito!';
  if (pct >= 80)  return '🎯 Ótimo desempenho! Quase lá.';
  if (pct >= 60)  return '📈 Bom resultado. Continue assim.';
  if (pct >= 40)  return '💪 Ainda há espaço para crescer.';
  return '📚 Revise os conteúdos e tente amanhã.';
}

function renderResult({ fromCache = false } = {}) {
  document.getElementById('screen-quiz').style.display = 'none';
  document.getElementById('screen-intro').style.display = 'none';
  document.getElementById('screen-result').style.display = 'block';

  const s = SUBJECTS[currentSubjectIdx];
  const resultLabelEl = document.getElementById('result-label');
  if (resultLabelEl) {
    const dateStr = new Date(getSessionDate() + 'T12:00:00').toLocaleDateString('pt-BR', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    resultLabelEl.textContent = `Simulado de ${s.label} — ${dateStr}`;
  }

  const correct = answers.filter(Boolean).length;
  const wrong = answers.length - correct;
  const pct = Math.round(correct / answers.length * 100);

  document.getElementById('final-score').textContent = correct;
  document.getElementById('s-correct').textContent = correct;
  document.getElementById('s-wrong').textContent = wrong;
  document.getElementById('s-pct').textContent = pct + '%';
  document.getElementById('result-msg').textContent = getMsg(pct);

  const { streak } = getStreak();
  document.getElementById('streak-count').textContent = streak;
  document.getElementById('streak-badge').style.display = 'flex';

  const btnRedo = document.querySelector('.btn-redo');
  if (btnRedo) {
    btnRedo.style.display = 'flex';
    btnRedo.textContent = '← Voltar ao início';
    btnRedo.onclick = () => {
      quizStartDate = null; // libera a data fixada ao voltar do resultado
      document.getElementById('screen-result').style.display = 'none';
      document.getElementById('screen-intro').style.display = 'block';
      loadSubjectData(); // garante que btn-start reflita o estado correto
    };
  }

  const review = document.getElementById('review');
  const letters = ['A','B','C','D','E'];
  review.innerHTML = '';
  questions.forEach((q, i) => {
    const ok = answers[i];
    const chosen = chosenAnswers ? chosenAnswers[i] : null;
    const div = document.createElement('div');
    div.className = `review-card ${ok ? 'correct-card' : 'wrong'}`;

    const wrongLine = (!ok && chosen !== null && chosen !== undefined)
      ? `<div class="rc-chosen">Sua resposta: <span class="rc-wrong-ans">${letters[chosen]}) ${q.opts[chosen]}</span></div>`
      : '';

    div.innerHTML = `
      <div class="rc-header">
        <div class="rc-q">${i+1}. ${q.text}</div>
        <div class="rc-icon ${ok ? 'rc-icon-correct' : 'rc-icon-wrong'}">${ok ? '✓' : '✗'}</div>
      </div>
      ${wrongLine}
      <div class="rc-ans">Gabarito: <span class="rc-correct-ans">${letters[q.ans]}) ${q.opts[q.ans]}</span></div>
      <div class="rc-expl">${q.expl}</div>
    `;
    review.appendChild(div);
  });
}

function showResult() {
  clearProgress(); // simulado concluído — descarta progresso parcial
  saveTodayResult();
  const streak = updateStreak();
  document.getElementById('streak-count').textContent = streak;
  document.getElementById('streak-badge').style.display = 'flex';
  renderResult({ fromCache: false });
}

function shareResult() {
  const correct = answers.filter(Boolean).length;
  const total = answers.length;
  const { streak } = getStreak();
  const s = SUBJECTS[currentSubjectIdx];

  const dots = answers.map(a => a ? '🟢' : '🔴').join('');
  const streakLine = streak > 1 ? `\n🔥 ${streak} dias seguidos` : '';
  const dateStr = new Date(getSessionDate() + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  const text = `${s.resultLabel} · ${dateStr}\n${correct}/${total} acertos\n${dots}${streakLine}\nsimuladia.com`;

  const btn = document.getElementById('btn-share');
  function markCopied() {
    btn.textContent = '✓ Copiado!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '↗ Compartilhar resultado';
      btn.classList.remove('copied');
    }, 2500);
  }
  navigator.clipboard.writeText(text).then(markCopied).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    markCopied();
  });
}

function goHome() {
  // Zera quizStartDate ao voltar para home — nunca deve influenciar a tela inicial
  quizStartDate = null;
  document.getElementById('screen-quiz').style.display = 'none';
  document.getElementById('screen-result').style.display = 'none';
  document.getElementById('screen-intro').style.display = 'block';
  updateDateLine();
  loadSubjectData();
}

// ─── LEGADO: switchSubject mantido por compatibilidade com botão no HTML ───
function switchSubject() {
  currentSubjectIdx = (currentSubjectIdx + 1) % SUBJECTS.length;
  localStorage.setItem('sd_subject', currentSubjectIdx);
  current = 0;
  answers = [];
  chosenAnswers = [];
  sessionStreak = 0;
  quizStartDate = null;
  buildSubjectTabs();
  applySubjectTheme(currentSubjectIdx, true);
  loadSubjectData();
}

init();