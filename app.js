// ─── LÓGICA PRINCIPAL ───
// Arquivo: app.js
// Contém toda a lógica do quiz: seleção diária, streak, navegação e resultado.


function getDailyQuestions() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate();
  const indices = [...Array(BANK.length).keys()];
  let s = seed;
  for (let i = indices.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) | 0;
    const j = Math.abs(s) % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, 10).map(i => BANK[i]);
}

// ─── RESULTADO DO DIA ───
function getTodayKey() {
  return 'sd_result_' + new Date().toISOString().slice(0, 10);
}
function saveTodayResult() {
  const payload = {
    answers,
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

// ─── STREAK ───
function getStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const data = JSON.parse(localStorage.getItem('sd_streak') || '{}');
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
  localStorage.setItem('sd_streak', JSON.stringify({ streak: newStreak, last: today }));
  return newStreak;
}

let questions, current, answers, sessionStreak;

function init() {
  const d = new Date();
  document.getElementById('date-line').textContent =
    d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const { streak } = getStreak();
  if (streak > 0) {
    document.getElementById('streak-count').textContent = streak;
    document.getElementById('streak-badge').style.display = 'flex';
  }

  questions = getDailyQuestions();
  current = 0;
  answers = [];
  sessionStreak = 0;

  // Checar se já concluiu hoje
  const saved = loadTodayResult();
  if (saved) {
    questions = saved.questions;
    answers = saved.answers;
    // Trocar subtítulo do hero
    const heroP = document.querySelector('.hero p');
    if (heroP) heroP.textContent = 'Você já concluiu o simulado de hoje. Volte amanhã para um novo desafio!';
    // Substituir botão de começar por "ver resultado de hoje"
    const btnStart = document.querySelector('.btn-start');
    if (btnStart) {
      btnStart.textContent = 'Ver resultado de hoje →';
      btnStart.onclick = () => {
        document.getElementById('screen-intro').style.display = 'none';
        renderResult({ fromCache: true });
      };
    }
  }

  document.getElementById('screen-intro').style.display = 'block';
}

function startQuiz() {
  document.getElementById('screen-intro').style.display = 'none';
  document.getElementById('screen-quiz').style.display = 'block';
  buildProgressDots();
  showQ();
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
  const q = questions[current];
  const pct = (current / questions.length) * 100;
  document.getElementById('prog').style.width = pct + '%';
  document.getElementById('q-counter').textContent = `Questão ${current+1} de ${questions.length}`;
  document.getElementById('q-source').textContent = q.source;
  document.getElementById('q-text').textContent = q.text;

  // Reset feedback
  const fb = document.getElementById('feedback-box');
  fb.style.display = 'none';
  fb.className = 'feedback-box';
  document.getElementById('btn-next').style.display = 'none';

  // Animate q-area
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
}

function selectOpt(idx) {
  const q = questions[current];
  const allOpts = document.querySelectorAll('.opt');
  allOpts.forEach(o => { o.onclick = null; o.disabled = true; });

  const isCorrect = idx === q.ans;
  allOpts[idx].classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
  if (!isCorrect) allOpts[q.ans].classList.add('show-correct');

  answers.push(isCorrect);
  updateProgressDots(current, isCorrect);

  // Session streak
  if (isCorrect) {
    sessionStreak++;
  } else {
    sessionStreak = 0;
  }
  updateSessionStreak();

  // Feedback
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
  if (pct >= 80) return '🎯 Ótimo desempenho! Quase lá.';
  if (pct >= 60) return '📈 Bom resultado. Continue assim.';
  if (pct >= 40) return '💪 Ainda há espaço para crescer.';
  return '📚 Revise os conteúdos e tente amanhã.';
}

// ─── RENDERIZAR RESULTADO ───
// fromCache: true = resultado carregado do storage (não mostra botão de refazer)
function renderResult({ fromCache = false } = {}) {
  document.getElementById('screen-quiz').style.display = 'none';
  document.getElementById('screen-result').style.display = 'block';

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

  // Botão de voltar ao início — sempre visível
  const btnRedo = document.querySelector('.btn-redo');
  if (btnRedo) {
    btnRedo.style.display = 'flex';
    btnRedo.textContent = '← Voltar ao início';
    btnRedo.onclick = () => {
      document.getElementById('screen-result').style.display = 'none';
      document.getElementById('screen-intro').style.display = 'block';
    };
  }

  // Review
  const review = document.getElementById('review');
  const letters = ['A','B','C','D','E'];
  review.innerHTML = '';
  questions.forEach((q, i) => {
    const ok = answers[i];
    const div = document.createElement('div');
    div.className = `review-card ${ok ? 'correct-card' : 'wrong'}`;
    div.innerHTML = `
      <div class="rc-header">
        <div class="rc-q">${i+1}. ${q.text}</div>
        <div class="rc-icon">${ok ? '✓' : '✗'}</div>
      </div>
      <div class="rc-ans">Gabarito: <span class="highlight">${letters[q.ans]}) ${q.opts[q.ans]}</span></div>
      <div class="rc-expl">${q.expl}</div>
    `;
    review.appendChild(div);
  });
}

function showResult() {
  // Salvar resultado antes de renderizar
  saveTodayResult();

  // Atualizar streak
  const streak = updateStreak();
  document.getElementById('streak-count').textContent = streak;
  document.getElementById('streak-badge').style.display = 'flex';

  renderResult({ fromCache: false });
}

function shareResult() {
  const correct = answers.filter(Boolean).length;
  const total = answers.length;
  const { streak } = getStreak();

  const dots = answers.map(a => a ? '🟢' : '🔴').join('');
  const streakLine = streak > 1 ? `\n🔥 ${streak} dias seguidos` : '';

  const text = `SimulaDia — Matemática\n${correct}/${total} acertos hoje\n${dots}${streakLine}\nsimuladia.com`;

  const btn = document.getElementById('btn-share');

  function markCopied() {
    btn.textContent = '✓ Copiado!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '↗ Compartilhar resultado';
      btn.classList.remove('copied');
    }, 2500);
  }

  function fallbackCopy() {
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

  fallbackCopy();
}

function goHome() {
  document.getElementById('screen-quiz').style.display = 'none';
  document.getElementById('screen-result').style.display = 'none';
  document.getElementById('screen-intro').style.display = 'block';
}

init();
