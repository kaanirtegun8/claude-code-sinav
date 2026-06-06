// Yetişkin Gelişim Psikolojisi - İnteraktif Sınav Sistemi
// State Management

const STORAGE_KEY = 'psi_exam_state_v1';
const THEME_KEY = 'psi_theme_v1';

const state = {
  view: 'home',
  selectedExamId: null,
  mode: null,
  currentQuestionIndex: 0,
  currentSection: 'fillInBlanks',
  answers: {},
  startTime: null,
  showResults: false,
  examResults: {},
  shuffledQuestions: null
};

// Storage helpers
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

function saveExamResult(examId, score, total, percentage) {
  const progress = loadProgress();
  progress[examId] = {
    bestScore: Math.max(progress[examId]?.bestScore || 0, score),
    lastScore: score,
    total: total,
    percentage: Math.max(progress[examId]?.percentage || 0, percentage),
    timestamp: Date.now(),
    completed: true
  };
  saveProgress(progress);
}

// Theme management
function loadTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}

function setTheme(theme) {
  if (theme === 'light') {
    document.body.setAttribute('data-theme', 'light');
  } else {
    document.body.removeAttribute('data-theme');
  }
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = loadTheme();
  const newTheme = current === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Normalization for fill-in-blank comparison
function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[ıİiI]/g, 'i')
    .replace(/[şŞ]/g, 's')
    .replace(/[ğĞ]/g, 'g')
    .replace(/[üÜ]/g, 'u')
    .replace(/[öÖ]/g, 'o')
    .replace(/[çÇ]/g, 'c')
    .replace(/[âÂ]/g, 'a')
    .replace(/[îÎ]/g, 'i')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ');
}

function checkFillAnswer(userAnswer, question) {
  if (!userAnswer || !userAnswer.trim()) return false;
  const normalized = normalizeText(userAnswer);
  const validAnswers = [question.answer, ...(question.acceptableAnswers || [])];
  return validAnswers.some(ans => normalizeText(ans) === normalized);
}

// View renderers
function render() {
  const main = document.getElementById('main-view');
  main.innerHTML = '';

  switch (state.view) {
    case 'home':
      renderHome(main);
      break;
    case 'mode':
      renderModeSelection(main);
      break;
    case 'exam':
      renderExam(main);
      break;
    case 'results':
      renderResults(main);
      break;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHome(container) {
  const progress = loadProgress();
  const completedCount = Object.values(progress).filter(p => p.completed).length;
  const avgScore = Object.values(progress).length > 0
    ? Math.round(Object.values(progress).reduce((sum, p) => sum + (p.percentage || 0), 0) / Object.values(progress).length)
    : 0;

  container.innerHTML = `
    <div class="hero">
      <div class="hero-badge">Aktif Sistem</div>
      <h2>Yetişkin Gelişim Psikolojisi<br>İnteraktif Sınav Platformu</h2>
      <p>10 farklı sınav, 350 soru. Her sınavda 4 PDF kaynaktan karışık sorular: genç yetişkinlik, orta yetişkinlik, ileri yetişkinlik ve ölüm/yas konularını kapsar.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">10</div>
        <div class="stat-label">Sınav</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">350</div>
        <div class="stat-label">Toplam Soru</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${completedCount}/10</div>
        <div class="stat-label">Tamamlanan</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${avgScore}%</div>
        <div class="stat-label">Ortalama Başarı</div>
      </div>
    </div>

    <h3 class="section-title">Sınavlar</h3>
    <p class="section-subtitle">İstediğin sınavı seç, mod belirle ve başla</p>

    <div class="exam-grid">
      ${EXAMS.map(exam => {
        const examProgress = progress[exam.id];
        return `
          <button class="exam-card" data-exam-id="${exam.id}">
            <div class="exam-card-header">
              <span class="exam-number">SINAV ${exam.id}</span>
              <span class="exam-status ${examProgress?.completed ? 'completed' : ''}">
                ${examProgress?.completed ? 'Tamamlandı' : 'Hazır'}
              </span>
            </div>
            <h3>${exam.title}</h3>
            <p class="exam-card-desc">${exam.description}</p>
            <div class="exam-card-info">
              <div class="exam-info-item">
                <span class="exam-info-value">10</span>
                <span class="exam-info-label">Boşluk</span>
              </div>
              <div class="exam-info-item">
                <span class="exam-info-value">25</span>
                <span class="exam-info-label">Test</span>
              </div>
              <div class="exam-info-item">
                <span class="exam-info-value">35</span>
                <span class="exam-info-label">Toplam</span>
              </div>
            </div>
            ${examProgress?.completed ? `
              <div class="last-score">
                <span>En İyi Puan</span>
                <strong>${examProgress.bestScore}/${examProgress.total} (${examProgress.percentage}%)</strong>
              </div>
            ` : ''}
          </button>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('.exam-card').forEach(card => {
    card.addEventListener('click', () => {
      state.selectedExamId = parseInt(card.dataset.examId);
      state.view = 'mode';
      render();
    });
  });
}

function renderModeSelection(container) {
  const exam = EXAMS.find(e => e.id === state.selectedExamId);

  container.innerHTML = `
    <div class="mode-selection">
      <button class="back-button" id="back-home">← Sınav Seçimine Dön</button>

      <div style="margin-bottom: 8px;">
        <span class="exam-number" style="color: var(--accent-hover); font-size: 12px;">SINAV ${exam.id}</span>
      </div>
      <h2 class="section-title" style="font-size: 28px;">${exam.title}</h2>
      <p class="section-subtitle">${exam.description}</p>

      <div style="background: var(--bg-card); border: 1px solid var(--border); padding: 18px 20px; border-radius: var(--radius-lg); margin: 20px 0; display: flex; gap: 24px; flex-wrap: wrap;">
        <div>
          <div style="font-size: 22px; font-weight: 800; color: var(--accent);">${exam.fillInBlanks.length}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Boşluk Doldurma</div>
        </div>
        <div>
          <div style="font-size: 22px; font-weight: 800; color: var(--accent);">${exam.multipleChoice.length}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Çoktan Seçmeli</div>
        </div>
        <div>
          <div style="font-size: 22px; font-weight: 800; color: var(--accent);">${exam.fillInBlanks.length + exam.multipleChoice.length}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Toplam Soru</div>
        </div>
      </div>

      <h3 class="section-title" style="margin-top: 32px;">Cevap Modunu Seç</h3>
      <p class="section-subtitle">İki farklı modda sınavı çözebilirsin</p>

      <div class="mode-cards">
        <button class="mode-card" data-mode="instant">
          <div class="mode-icon">►</div>
          <h3>Anlık Geri Bildirim</h3>
          <p>Her soruyu cevapladıktan sonra hemen doğru/yanlış sonucunu ve açıklamayı gör. Öğrenmeye odaklı mod.</p>
        </button>
        <button class="mode-card" data-mode="exam">
          <div class="mode-icon">★</div>
          <h3>Sınav Modu</h3>
          <p>Tüm soruları cevapla, sonra puanını ve detaylı sonuçları gör. Gerçek sınav deneyimi için ideal.</p>
        </button>
      </div>
    </div>
  `;

  document.getElementById('back-home').addEventListener('click', () => {
    state.view = 'home';
    state.selectedExamId = null;
    render();
  });

  container.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      state.mode = card.dataset.mode;
      startExam();
    });
  });
}

function startExam() {
  const exam = EXAMS.find(e => e.id === state.selectedExamId);
  // Shuffle questions for variety
  const fbs = exam.fillInBlanks.map((q, i) => ({ ...q, _type: 'fb', _originalIndex: i }));
  const mcs = exam.multipleChoice.map((q, i) => ({ ...q, _type: 'mc', _originalIndex: i }));

  state.shuffledQuestions = {
    fillInBlanks: fbs,
    multipleChoice: mcs
  };
  state.currentSection = 'fillInBlanks';
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.startTime = Date.now();
  state.view = 'exam';
  state.examResults = {};
  render();
}

function getCurrentQuestions() {
  return state.shuffledQuestions[state.currentSection];
}

function getCurrentQuestion() {
  return getCurrentQuestions()[state.currentQuestionIndex];
}

function getAnswerKey(section, index) {
  return `${section}_${index}`;
}

function renderExam(container) {
  const exam = EXAMS.find(e => e.id === state.selectedExamId);
  const questions = getCurrentQuestions();
  const question = getCurrentQuestion();
  const answerKey = getAnswerKey(state.currentSection, state.currentQuestionIndex);
  const userAnswer = state.answers[answerKey];
  const hasAnswered = userAnswer !== undefined;
  const showFeedback = state.mode === 'instant' && hasAnswered;

  const totalFB = state.shuffledQuestions.fillInBlanks.length;
  const totalMC = state.shuffledQuestions.multipleChoice.length;
  const totalQuestions = totalFB + totalMC;

  let answeredCount = 0;
  for (let i = 0; i < totalFB; i++) {
    if (state.answers[getAnswerKey('fillInBlanks', i)] !== undefined) answeredCount++;
  }
  for (let i = 0; i < totalMC; i++) {
    if (state.answers[getAnswerKey('multipleChoice', i)] !== undefined) answeredCount++;
  }

  const progressPercent = (answeredCount / totalQuestions) * 100;

  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const ss = String(elapsed % 60).padStart(2, '0');

  container.innerHTML = `
    <div class="exam-container">
      <div class="exam-header">
        <div class="exam-header-top">
          <div class="exam-title-info">
            <h2>${exam.title}</h2>
            <p>${state.mode === 'instant' ? 'Anlık Geri Bildirim Modu' : 'Sınav Modu'}</p>
          </div>
          <div class="exam-meta">
            <div class="timer">
              <span style="font-weight: 700;">${mm}:${ss}</span>
            </div>
            <button class="exit-btn" id="exit-exam">Çıkış</button>
          </div>
        </div>
        <div class="progress-wrapper">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercent}%"></div>
          </div>
          <div class="progress-info">
            <span>${answeredCount} / ${totalQuestions} soru cevaplandı</span>
            <span>${Math.round(progressPercent)}%</span>
          </div>
        </div>
      </div>

      <div class="section-tabs">
        <button class="section-tab ${state.currentSection === 'fillInBlanks' ? 'active' : ''}" data-section="fillInBlanks">
          Boşluk Doldurma
          <span class="count">${totalFB}</span>
        </button>
        <button class="section-tab ${state.currentSection === 'multipleChoice' ? 'active' : ''}" data-section="multipleChoice">
          Çoktan Seçmeli
          <span class="count">${totalMC}</span>
        </button>
      </div>

      <div class="question-card">
        <div class="question-meta">
          <div class="question-number">
            <span class="question-number-badge">${state.currentQuestionIndex + 1}</span>
            <span>/ ${questions.length}</span>
          </div>
          <span class="question-type-badge ${state.currentSection === 'fillInBlanks' ? 'fb' : 'mc'}">
            ${state.currentSection === 'fillInBlanks' ? 'BOŞLUK DOLDURMA' : 'ÇOKTAN SEÇMELİ'}
          </span>
        </div>

        <div class="question-text">${question.question}</div>

        ${state.currentSection === 'fillInBlanks' ? renderFillInQuestion(question, userAnswer, showFeedback) : renderMCQuestion(question, userAnswer, showFeedback)}

        ${showFeedback ? renderFeedback(question, userAnswer) : ''}
      </div>

      <div class="exam-nav">
        <button class="nav-btn secondary" id="prev-btn" ${state.currentQuestionIndex === 0 && state.currentSection === 'fillInBlanks' ? 'disabled' : ''}>← Önceki</button>

        <div class="question-jumper">
          ${renderJumper(totalFB, totalMC)}
        </div>

        ${renderNextButton(answeredCount, totalQuestions)}
      </div>
    </div>
  `;

  attachExamHandlers(question, answerKey);
}

function renderFillInQuestion(question, userAnswer, showFeedback) {
  const isCorrect = showFeedback && checkFillAnswer(userAnswer, question);
  const cls = showFeedback ? (isCorrect ? 'correct' : 'incorrect') : '';

  return `
    <input
      type="text"
      class="fill-input ${cls}"
      id="fill-input"
      placeholder="Cevabınızı yazın..."
      value="${userAnswer || ''}"
      ${state.mode === 'instant' && userAnswer !== undefined ? 'disabled' : ''}
      autocomplete="off"
      autocorrect="off"
      spellcheck="false"
    />
    ${state.mode === 'instant' && userAnswer === undefined ? '<button class="nav-btn primary" id="submit-fill" style="margin-top: 14px;">Cevabı Kontrol Et</button>' : ''}
  `;
}

function renderMCQuestion(question, userAnswer, showFeedback) {
  return `
    <div class="options">
      ${question.options.map((opt, idx) => {
        let cls = '';
        const isSelected = userAnswer === idx;
        if (showFeedback) {
          if (idx === question.correctIndex) cls = 'correct';
          else if (isSelected) cls = 'incorrect';
        } else if (isSelected) {
          cls = 'selected';
        }
        return `
          <button class="option ${cls}" data-option-index="${idx}" ${state.mode === 'instant' && userAnswer !== undefined ? 'disabled' : ''}>
            <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
          </button>
        `;
      }).join('')}
    </div>
  `;
}

function renderFeedback(question, userAnswer) {
  let isCorrect;
  let correctAnswerText;

  if (state.currentSection === 'fillInBlanks') {
    isCorrect = checkFillAnswer(userAnswer, question);
    correctAnswerText = question.answer;
  } else {
    isCorrect = userAnswer === question.correctIndex;
    correctAnswerText = question.options[question.correctIndex];
  }

  return `
    <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <div class="feedback-header">
        ${isCorrect ? '✓ Doğru!' : '✗ Yanlış'}
      </div>
      ${!isCorrect ? `
        <div class="feedback-answer">
          <strong>Doğru cevap:</strong> ${correctAnswerText}
        </div>
      ` : ''}
      ${question.explanation ? `
        <div class="feedback-explanation">${question.explanation}</div>
      ` : ''}
    </div>
  `;
}

function renderJumper(totalFB, totalMC) {
  const total = state.currentSection === 'fillInBlanks' ? totalFB : totalMC;
  let html = '';
  for (let i = 0; i < total; i++) {
    const ansKey = getAnswerKey(state.currentSection, i);
    const isAnswered = state.answers[ansKey] !== undefined;
    const isCurrent = i === state.currentQuestionIndex;
    let cls = '';
    if (isCurrent) cls = 'current';
    else if (isAnswered) {
      if (state.mode === 'instant') {
        const q = state.shuffledQuestions[state.currentSection][i];
        const ans = state.answers[ansKey];
        const correct = state.currentSection === 'fillInBlanks'
          ? checkFillAnswer(ans, q)
          : ans === q.correctIndex;
        cls = correct ? 'correct' : 'incorrect';
      } else {
        cls = 'answered';
      }
    }
    html += `<button class="jump-dot ${cls}" data-jump="${i}">${i + 1}</button>`;
  }
  return html;
}

function renderNextButton(answeredCount, totalQuestions) {
  const questions = getCurrentQuestions();
  const isLastInSection = state.currentQuestionIndex === questions.length - 1;
  const isLastSection = state.currentSection === 'multipleChoice';

  if (isLastInSection && isLastSection) {
    if (answeredCount === totalQuestions || state.mode === 'instant') {
      return `<button class="nav-btn finish" id="finish-btn">Sınavı Bitir →</button>`;
    } else {
      return `<button class="nav-btn finish" id="finish-btn">Sonuçları Gör (${answeredCount}/${totalQuestions})</button>`;
    }
  }

  return `<button class="nav-btn primary" id="next-btn">Sonraki →</button>`;
}

function attachExamHandlers(question, answerKey) {
  // Exit button
  document.getElementById('exit-exam').addEventListener('click', () => {
    if (confirm('Sınavdan çıkmak istediğinize emin misiniz? İlerlemeniz kaydedilmeyecek.')) {
      state.view = 'home';
      state.selectedExamId = null;
      render();
    }
  });

  // Section tabs
  document.querySelectorAll('.section-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.currentSection = tab.dataset.section;
      state.currentQuestionIndex = 0;
      render();
    });
  });

  // Previous button
  const prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
      } else if (state.currentSection === 'multipleChoice') {
        state.currentSection = 'fillInBlanks';
        state.currentQuestionIndex = state.shuffledQuestions.fillInBlanks.length - 1;
      }
      render();
    });
  }

  // Next button
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      handleSaveCurrentAnswer(question, answerKey);
      goToNext();
    });
  }

  // Finish button
  const finishBtn = document.getElementById('finish-btn');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      handleSaveCurrentAnswer(question, answerKey);
      finishExam();
    });
  }

  // Fill in submit
  const submitFill = document.getElementById('submit-fill');
  if (submitFill) {
    submitFill.addEventListener('click', () => {
      const input = document.getElementById('fill-input');
      const val = input.value.trim();
      if (val) {
        state.answers[answerKey] = val;
        render();
      }
    });
  }

  // Fill input enter key
  const fillInput = document.getElementById('fill-input');
  if (fillInput) {
    fillInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (state.mode === 'instant' && state.answers[answerKey] === undefined) {
          const val = fillInput.value.trim();
          if (val) {
            state.answers[answerKey] = val;
            render();
          }
        } else {
          state.answers[answerKey] = fillInput.value.trim();
          goToNext();
        }
      }
    });
    fillInput.addEventListener('input', (e) => {
      if (state.mode === 'exam') {
        state.answers[answerKey] = e.target.value;
      }
    });
    if (!fillInput.disabled) fillInput.focus();
  }

  // MC option click
  document.querySelectorAll('.option').forEach(opt => {
    opt.addEventListener('click', () => {
      const idx = parseInt(opt.dataset.optionIndex);
      state.answers[answerKey] = idx;
      if (state.mode === 'instant') {
        render();
      } else {
        // In exam mode just re-render to show selection
        render();
      }
    });
  });

  // Jumper
  document.querySelectorAll('.jump-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      handleSaveCurrentAnswer(question, answerKey);
      state.currentQuestionIndex = parseInt(dot.dataset.jump);
      render();
    });
  });
}

function handleSaveCurrentAnswer(question, answerKey) {
  if (state.currentSection === 'fillInBlanks') {
    const input = document.getElementById('fill-input');
    if (input && !input.disabled) {
      const val = input.value.trim();
      if (val) {
        state.answers[answerKey] = val;
      }
    }
  }
}

function goToNext() {
  const questions = getCurrentQuestions();
  if (state.currentQuestionIndex < questions.length - 1) {
    state.currentQuestionIndex++;
  } else if (state.currentSection === 'fillInBlanks') {
    state.currentSection = 'multipleChoice';
    state.currentQuestionIndex = 0;
  }
  render();
}

function finishExam() {
  const exam = EXAMS.find(e => e.id === state.selectedExamId);
  const fbs = state.shuffledQuestions.fillInBlanks;
  const mcs = state.shuffledQuestions.multipleChoice;

  let fbCorrect = 0, mcCorrect = 0;
  const review = { fillInBlanks: [], multipleChoice: [] };

  fbs.forEach((q, i) => {
    const ans = state.answers[getAnswerKey('fillInBlanks', i)];
    const correct = ans !== undefined && checkFillAnswer(ans, q);
    if (correct) fbCorrect++;
    review.fillInBlanks.push({
      question: q,
      userAnswer: ans,
      correct,
      answered: ans !== undefined
    });
  });

  mcs.forEach((q, i) => {
    const ans = state.answers[getAnswerKey('multipleChoice', i)];
    const correct = ans !== undefined && ans === q.correctIndex;
    if (correct) mcCorrect++;
    review.multipleChoice.push({
      question: q,
      userAnswer: ans,
      correct,
      answered: ans !== undefined
    });
  });

  const totalCorrect = fbCorrect + mcCorrect;
  const totalQuestions = fbs.length + mcs.length;
  const percentage = Math.round((totalCorrect / totalQuestions) * 100);
  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);

  state.examResults = {
    examId: exam.id,
    examTitle: exam.title,
    fbCorrect,
    mcCorrect,
    totalCorrect,
    totalQuestions,
    percentage,
    elapsed,
    review,
    grade: getGrade(percentage)
  };

  saveExamResult(exam.id, totalCorrect, totalQuestions, percentage);
  state.view = 'results';
  render();
}

function getGrade(percentage) {
  if (percentage >= 90) return { letter: 'AA', label: 'Mükemmel', cls: 'aa' };
  if (percentage >= 85) return { letter: 'BA', label: 'Çok İyi', cls: 'ba' };
  if (percentage >= 75) return { letter: 'BB', label: 'İyi', cls: 'bb' };
  if (percentage >= 65) return { letter: 'CB', label: 'Orta Üstü', cls: 'cb' };
  if (percentage >= 55) return { letter: 'CC', label: 'Orta', cls: 'cc' };
  if (percentage >= 40) return { letter: 'DD', label: 'Geçer', cls: 'dd' };
  return { letter: 'FF', label: 'Kalır', cls: 'ff' };
}

function renderResults(container) {
  const r = state.examResults;
  const elapsedMin = Math.floor(r.elapsed / 60);
  const elapsedSec = r.elapsed % 60;
  const skipped = r.totalQuestions - (r.review.fillInBlanks.filter(x => x.answered).length + r.review.multipleChoice.filter(x => x.answered).length);
  const wrong = r.totalQuestions - r.totalCorrect - skipped;

  const circumference = 2 * Math.PI * 80;
  const offset = circumference * (1 - r.percentage / 100);

  container.innerHTML = `
    <div class="results-container">
      <div class="results-hero">
        <span class="grade-badge ${r.grade.cls}">${r.grade.letter} - ${r.grade.label}</span>

        <div class="score-circle">
          <svg viewBox="0 0 200 200">
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#6366f1"/>
                <stop offset="100%" stop-color="#a855f7"/>
              </linearGradient>
            </defs>
            <circle class="score-circle-bg" cx="100" cy="100" r="80"/>
            <circle class="score-circle-fill" cx="100" cy="100" r="80"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${offset}"/>
          </svg>
          <div class="score-text">
            <div>
              <div class="score-number">${r.percentage}<span style="font-size: 24px;">%</span></div>
              <div class="score-suffix">${r.totalCorrect} / ${r.totalQuestions} doğru</div>
            </div>
          </div>
        </div>

        <h2>${r.examTitle} Tamamlandı</h2>
        <p>${getMotivationalMessage(r.percentage)}</p>
      </div>

      <div class="results-stats">
        <div class="result-stat">
          <div class="result-stat-value success">${r.totalCorrect}</div>
          <div class="result-stat-label">Doğru</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value error">${wrong}</div>
          <div class="result-stat-label">Yanlış</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value warning">${skipped}</div>
          <div class="result-stat-label">Boş</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value">${elapsedMin}:${String(elapsedSec).padStart(2, '0')}</div>
          <div class="result-stat-label">Süre</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value">${r.fbCorrect}/${r.review.fillInBlanks.length}</div>
          <div class="result-stat-label">Boşluk</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value">${r.mcCorrect}/${r.review.multipleChoice.length}</div>
          <div class="result-stat-label">Test</div>
        </div>
      </div>

      <div class="results-actions">
        <button class="nav-btn primary" id="retake-btn">↻ Tekrar Çöz</button>
        <button class="nav-btn secondary" id="home-btn">Sınavlara Dön</button>
        <button class="nav-btn secondary" id="toggle-review">Detaylı İnceleme</button>
      </div>

      <div class="review-section" id="review-section" style="display: none;">
        <h3>Boşluk Doldurma Soruları (${r.fbCorrect}/${r.review.fillInBlanks.length})</h3>
        ${r.review.fillInBlanks.map((item, i) => renderReviewCard(item, i, 'fb')).join('')}

        <h3 style="margin-top: 32px;">Çoktan Seçmeli Sorular (${r.mcCorrect}/${r.review.multipleChoice.length})</h3>
        ${r.review.multipleChoice.map((item, i) => renderReviewCard(item, i, 'mc')).join('')}
      </div>
    </div>
  `;

  document.getElementById('retake-btn').addEventListener('click', () => {
    startExam();
  });

  document.getElementById('home-btn').addEventListener('click', () => {
    state.view = 'home';
    state.selectedExamId = null;
    render();
  });

  document.getElementById('toggle-review').addEventListener('click', () => {
    const sec = document.getElementById('review-section');
    sec.style.display = sec.style.display === 'none' ? 'block' : 'none';
    document.getElementById('toggle-review').textContent =
      sec.style.display === 'none' ? 'Detaylı İnceleme' : 'İncelemeyi Gizle';
  });
}

function renderReviewCard(item, index, type) {
  const q = item.question;
  let cls, status;

  if (!item.answered) {
    cls = 'wrong';
    status = '<span class="review-status skipped">BOŞ BIRAKILDI</span>';
  } else if (item.correct) {
    cls = 'correct';
    status = '<span class="review-status correct">DOĞRU</span>';
  } else {
    cls = 'wrong';
    status = '<span class="review-status wrong">YANLIŞ</span>';
  }

  let answerHtml = '';
  if (type === 'fb') {
    if (item.answered) {
      answerHtml += `<div class="review-answer your-answer ${item.correct ? '' : 'wrong'}">Senin cevabın: <strong>${escapeHtml(item.userAnswer)}</strong></div>`;
    }
    if (!item.correct) {
      answerHtml += `<div class="review-answer correct-answer">Doğru cevap: <strong>${escapeHtml(q.answer)}</strong></div>`;
    }
  } else {
    if (item.answered) {
      answerHtml += `<div class="review-answer your-answer ${item.correct ? '' : 'wrong'}">Senin cevabın: <strong>${String.fromCharCode(65 + item.userAnswer)}) ${escapeHtml(q.options[item.userAnswer])}</strong></div>`;
    }
    if (!item.correct) {
      answerHtml += `<div class="review-answer correct-answer">Doğru cevap: <strong>${String.fromCharCode(65 + q.correctIndex)}) ${escapeHtml(q.options[q.correctIndex])}</strong></div>`;
    }
  }

  return `
    <div class="review-card ${cls}">
      <div class="review-header">
        <span style="font-size: 13px; color: var(--text-muted); font-weight: 600;">Soru ${index + 1}</span>
        ${status}
      </div>
      <div class="review-question">${q.question}</div>
      ${answerHtml}
      ${q.explanation ? `<div class="review-explanation"><strong>Açıklama:</strong> ${q.explanation}</div>` : ''}
    </div>
  `;
}

function escapeHtml(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getMotivationalMessage(percentage) {
  if (percentage >= 90) return 'Olağanüstü performans! Konuya tamamen hakimsin.';
  if (percentage >= 80) return 'Harika iş! Konuya çok iyi hakimsin.';
  if (percentage >= 70) return 'İyi gidiyorsun. Birkaç eksiği toparlamak yeterli.';
  if (percentage >= 60) return 'Fena değil. Çalışmaya devam et, daha iyisini başarabilirsin.';
  if (percentage >= 40) return 'Geçti ama gelişebilir. Yanlışları gözden geçirelim.';
  return 'Üzülme, çalışarak çok daha iyiye gidebilirsin. Yanlışları gözden geçir.';
}

// Initialize
function init() {
  // Apply theme
  setTheme(loadTheme());

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Timer update every second on exam view
  setInterval(() => {
    if (state.view === 'exam') {
      const timerEl = document.querySelector('.timer span');
      if (timerEl && state.startTime) {
        const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
        const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
        const ss = String(elapsed % 60).padStart(2, '0');
        timerEl.textContent = `${mm}:${ss}`;
      }
    }
  }, 1000);

  render();
}

document.addEventListener('DOMContentLoaded', init);
