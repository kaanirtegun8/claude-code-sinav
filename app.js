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
  classicGrades: {},
  classicShown: {},
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

  const totalQuestions = EXAMS.reduce((sum, e) => sum + e.fillInBlanks.length + e.multipleChoice.length + (e.classicQuestions ? e.classicQuestions.length : 0), 0);
  const totalExams = EXAMS.length;

  container.innerHTML = `
    <div class="hero">
      <div class="hero-badge">Aktif Sistem</div>
      <h2>Yetişkin Gelişim Psikolojisi<br>İnteraktif Sınav Platformu</h2>
      <p>${totalExams} farklı sınav, ${totalQuestions} soru. Her sınavda 4 PDF kaynaktan karışık sorular: genç yetişkinlik, orta yetişkinlik, ileri yetişkinlik ve ölüm/yas konularını kapsar. Boşluk doldurma, çoktan seçmeli ve klasik soru türleri.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${totalExams}</div>
        <div class="stat-label">Sınav</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalQuestions}</div>
        <div class="stat-label">Toplam Soru</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${completedCount}/${totalExams}</div>
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
                <span class="exam-info-value">${exam.fillInBlanks.length}</span>
                <span class="exam-info-label">Boşluk</span>
              </div>
              <div class="exam-info-item">
                <span class="exam-info-value">${exam.multipleChoice.length}</span>
                <span class="exam-info-label">Test</span>
              </div>
              ${exam.classicQuestions && exam.classicQuestions.length > 0 ? `
              <div class="exam-info-item">
                <span class="exam-info-value">${exam.classicQuestions.length}</span>
                <span class="exam-info-label">Klasik</span>
              </div>
              ` : ''}
              <div class="exam-info-item">
                <span class="exam-info-value">${exam.fillInBlanks.length + exam.multipleChoice.length + (exam.classicQuestions ? exam.classicQuestions.length : 0)}</span>
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
        ${exam.classicQuestions && exam.classicQuestions.length > 0 ? `
        <div>
          <div style="font-size: 22px; font-weight: 800; color: var(--accent);">${exam.classicQuestions.length}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Klasik / Açık Uçlu</div>
        </div>
        ` : ''}
        <div>
          <div style="font-size: 22px; font-weight: 800; color: var(--accent);">${exam.fillInBlanks.length + exam.multipleChoice.length + (exam.classicQuestions ? exam.classicQuestions.length : 0)}</div>
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
  const fbs = exam.fillInBlanks.map((q, i) => ({ ...q, _type: 'fb', _originalIndex: i }));
  const mcs = exam.multipleChoice.map((q, i) => ({ ...q, _type: 'mc', _originalIndex: i }));
  const kcs = (exam.classicQuestions || []).map((q, i) => ({ ...q, _type: 'kc', _originalIndex: i }));

  state.shuffledQuestions = {
    fillInBlanks: fbs,
    multipleChoice: mcs,
    classicQuestions: kcs
  };
  state.currentSection = 'fillInBlanks';
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.classicGrades = {};
  state.classicShown = {};
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
  const totalKC = state.shuffledQuestions.classicQuestions.length;
  const totalQuestions = totalFB + totalMC + totalKC;

  let answeredCount = 0;
  for (let i = 0; i < totalFB; i++) {
    if (state.answers[getAnswerKey('fillInBlanks', i)] !== undefined) answeredCount++;
  }
  for (let i = 0; i < totalMC; i++) {
    if (state.answers[getAnswerKey('multipleChoice', i)] !== undefined) answeredCount++;
  }
  for (let i = 0; i < totalKC; i++) {
    if (state.classicGrades[getAnswerKey('classicQuestions', i)] !== undefined) answeredCount++;
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
        ${totalKC > 0 ? `
        <button class="section-tab ${state.currentSection === 'classicQuestions' ? 'active' : ''}" data-section="classicQuestions">
          Klasik
          <span class="count">${totalKC}</span>
        </button>
        ` : ''}
      </div>

      <div class="question-card">
        <div class="question-meta">
          <div class="question-number">
            <span class="question-number-badge">${state.currentQuestionIndex + 1}</span>
            <span>/ ${questions.length}</span>
          </div>
          <span class="question-type-badge ${state.currentSection === 'fillInBlanks' ? 'fb' : (state.currentSection === 'classicQuestions' ? 'kc' : 'mc')}">
            ${state.currentSection === 'fillInBlanks' ? 'BOŞLUK DOLDURMA' : (state.currentSection === 'classicQuestions' ? 'KLASİK / AÇIK UÇLU' : 'ÇOKTAN SEÇMELİ')}
          </span>
        </div>

        <div class="question-text">${question.question}</div>

        ${state.currentSection === 'fillInBlanks'
          ? renderFillInQuestion(question, userAnswer, showFeedback)
          : (state.currentSection === 'classicQuestions'
            ? renderClassicQuestion(question, userAnswer, answerKey)
            : renderMCQuestion(question, userAnswer, showFeedback))}

        ${showFeedback && state.currentSection !== 'classicQuestions' ? renderFeedback(question, userAnswer) : ''}
      </div>

      <div class="exam-nav">
        <button class="nav-btn secondary" id="prev-btn" ${state.currentQuestionIndex === 0 && state.currentSection === 'fillInBlanks' ? 'disabled' : ''}>← Önceki</button>

        <div class="question-jumper">
          ${renderJumper(totalFB, totalMC, totalKC)}
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

function renderClassicQuestion(question, userAnswer, answerKey) {
  const isShown = state.classicShown[answerKey];
  const grade = state.classicGrades[answerKey];

  return `
    <textarea
      class="classic-input"
      id="classic-input"
      placeholder="Cevabını buraya detaylı bir şekilde yaz... Klasik soru olduğu için anahtar kavramları açıklayarak yaz."
      ${isShown ? 'disabled' : ''}
    >${escapeHtml(userAnswer || '')}</textarea>
    ${!isShown ? `
      <div class="classic-actions">
        <button class="show-answer-btn" id="show-classic-answer">Cevabı Göster ve Karşılaştır</button>
      </div>
    ` : `
      <div class="classic-answer-box">
        <div class="answer-label">Örnek Cevap</div>
        <div class="classic-answer-text">${escapeHtml(question.answer)}</div>
        ${question.keyPoints && question.keyPoints.length > 0 ? `
          <div class="classic-keypoints">
            ${question.keyPoints.map(kp => `<span class="keypoint-chip">${escapeHtml(kp)}</span>`).join('')}
          </div>
        ` : ''}
      </div>
      <div class="self-grade-section">
        <div class="self-grade-label">Cevabını örnek cevapla karşılaştır ve kendini değerlendir:</div>
        <div class="self-grade-buttons">
          <button class="grade-btn ${grade === 'correct' ? 'selected correct' : ''}" data-grade="correct">✓ Tam Doğru</button>
          <button class="grade-btn ${grade === 'partial' ? 'selected partial' : ''}" data-grade="partial">~ Kısmen Doğru</button>
          <button class="grade-btn ${grade === 'wrong' ? 'selected wrong' : ''}" data-grade="wrong">✗ Yanlış / Eksik</button>
        </div>
      </div>
    `}
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

function renderJumper(totalFB, totalMC, totalKC) {
  let total;
  if (state.currentSection === 'fillInBlanks') total = totalFB;
  else if (state.currentSection === 'multipleChoice') total = totalMC;
  else total = totalKC;
  let html = '';
  for (let i = 0; i < total; i++) {
    const ansKey = getAnswerKey(state.currentSection, i);
    let isAnswered;
    if (state.currentSection === 'classicQuestions') {
      isAnswered = state.classicGrades[ansKey] !== undefined;
    } else {
      isAnswered = state.answers[ansKey] !== undefined;
    }
    const isCurrent = i === state.currentQuestionIndex;
    let cls = '';
    if (isCurrent) cls = 'current';
    else if (isAnswered) {
      if (state.mode === 'instant' || state.currentSection === 'classicQuestions') {
        const q = state.shuffledQuestions[state.currentSection][i];
        let correct;
        if (state.currentSection === 'classicQuestions') {
          const g = state.classicGrades[ansKey];
          correct = g === 'correct';
          if (g === 'partial') cls = 'answered';
          else cls = correct ? 'correct' : 'incorrect';
        } else {
          const ans = state.answers[ansKey];
          correct = state.currentSection === 'fillInBlanks'
            ? checkFillAnswer(ans, q)
            : ans === q.correctIndex;
          cls = correct ? 'correct' : 'incorrect';
        }
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
  const hasClassic = state.shuffledQuestions.classicQuestions.length > 0;
  const isLastSection = hasClassic
    ? state.currentSection === 'classicQuestions'
    : state.currentSection === 'multipleChoice';

  if (isLastInSection && isLastSection) {
    return `<button class="nav-btn finish" id="finish-btn">Sınavı Bitir →</button>`;
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
      handleSaveCurrentAnswer(question, answerKey);
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
      } else if (state.currentSection === 'multipleChoice') {
        state.currentSection = 'fillInBlanks';
        state.currentQuestionIndex = state.shuffledQuestions.fillInBlanks.length - 1;
      } else if (state.currentSection === 'classicQuestions') {
        state.currentSection = 'multipleChoice';
        state.currentQuestionIndex = state.shuffledQuestions.multipleChoice.length - 1;
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

  // Classic: show answer button
  const showAnswerBtn = document.getElementById('show-classic-answer');
  if (showAnswerBtn) {
    showAnswerBtn.addEventListener('click', () => {
      const ta = document.getElementById('classic-input');
      if (ta) state.answers[answerKey] = ta.value;
      state.classicShown[answerKey] = true;
      render();
    });
  }

  // Classic: self-grade buttons
  document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.classicGrades[answerKey] = btn.dataset.grade;
      render();
    });
  });

  // Classic input typing (keep answer in state)
  const classicInput = document.getElementById('classic-input');
  if (classicInput) {
    classicInput.addEventListener('input', (e) => {
      state.answers[answerKey] = e.target.value;
    });
    if (!classicInput.disabled) classicInput.focus();
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
  } else if (state.currentSection === 'classicQuestions') {
    const ta = document.getElementById('classic-input');
    if (ta && !ta.disabled) {
      state.answers[answerKey] = ta.value;
    }
  }
}

function goToNext() {
  const questions = getCurrentQuestions();
  const hasClassic = state.shuffledQuestions.classicQuestions.length > 0;
  if (state.currentQuestionIndex < questions.length - 1) {
    state.currentQuestionIndex++;
  } else if (state.currentSection === 'fillInBlanks') {
    state.currentSection = 'multipleChoice';
    state.currentQuestionIndex = 0;
  } else if (state.currentSection === 'multipleChoice' && hasClassic) {
    state.currentSection = 'classicQuestions';
    state.currentQuestionIndex = 0;
  }
  render();
}

function finishExam() {
  const exam = EXAMS.find(e => e.id === state.selectedExamId);
  const fbs = state.shuffledQuestions.fillInBlanks;
  const mcs = state.shuffledQuestions.multipleChoice;
  const kcs = state.shuffledQuestions.classicQuestions;

  let fbCorrect = 0, mcCorrect = 0;
  let kcPoints = 0;
  const review = { fillInBlanks: [], multipleChoice: [], classicQuestions: [] };

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

  kcs.forEach((q, i) => {
    const key = getAnswerKey('classicQuestions', i);
    const ans = state.answers[key];
    const grade = state.classicGrades[key];
    let pts = 0;
    if (grade === 'correct') pts = 1;
    else if (grade === 'partial') pts = 0.5;
    kcPoints += pts;
    review.classicQuestions.push({
      question: q,
      userAnswer: ans,
      grade,
      points: pts,
      answered: grade !== undefined
    });
  });

  const totalCorrect = fbCorrect + mcCorrect + kcPoints;
  const totalQuestions = fbs.length + mcs.length + kcs.length;
  const percentage = Math.round((totalCorrect / totalQuestions) * 100);
  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);

  state.examResults = {
    examId: exam.id,
    examTitle: exam.title,
    fbCorrect,
    mcCorrect,
    kcPoints,
    totalCorrect: Math.round(totalCorrect * 10) / 10,
    totalQuestions,
    percentage,
    elapsed,
    review,
    grade: getGrade(percentage),
    hasClassic: kcs.length > 0
  };

  saveExamResult(exam.id, Math.round(totalCorrect * 10) / 10, totalQuestions, percentage);
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
  const answeredFB = r.review.fillInBlanks.filter(x => x.answered).length;
  const answeredMC = r.review.multipleChoice.filter(x => x.answered).length;
  const answeredKC = r.review.classicQuestions.filter(x => x.answered).length;
  const skipped = r.totalQuestions - (answeredFB + answeredMC + answeredKC);
  const wrong = Math.max(0, r.totalQuestions - r.totalCorrect - skipped);

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
        ${r.hasClassic ? `
        <div class="result-stat">
          <div class="result-stat-value">${r.kcPoints}/${r.review.classicQuestions.length}</div>
          <div class="result-stat-label">Klasik</div>
        </div>
        ` : ''}
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

        ${r.hasClassic ? `
        <h3 style="margin-top: 32px;">Klasik Sorular (${r.kcPoints}/${r.review.classicQuestions.length})</h3>
        ${r.review.classicQuestions.map((item, i) => renderReviewCard(item, i, 'kc')).join('')}
        ` : ''}
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

  if (type === 'kc') {
    if (!item.answered) {
      cls = 'wrong';
      status = '<span class="review-status skipped">DEĞERLENDİRİLMEDİ</span>';
    } else if (item.grade === 'correct') {
      cls = 'correct';
      status = '<span class="review-status correct">TAM DOĞRU (1 puan)</span>';
    } else if (item.grade === 'partial') {
      cls = '';
      status = '<span class="review-status" style="background: var(--warning-soft); color: var(--warning);">KISMEN (0.5 puan)</span>';
    } else {
      cls = 'wrong';
      status = '<span class="review-status wrong">YANLIŞ / EKSİK</span>';
    }
  } else if (!item.answered) {
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
  } else if (type === 'mc') {
    if (item.answered) {
      answerHtml += `<div class="review-answer your-answer ${item.correct ? '' : 'wrong'}">Senin cevabın: <strong>${String.fromCharCode(65 + item.userAnswer)}) ${escapeHtml(q.options[item.userAnswer])}</strong></div>`;
    }
    if (!item.correct) {
      answerHtml += `<div class="review-answer correct-answer">Doğru cevap: <strong>${String.fromCharCode(65 + q.correctIndex)}) ${escapeHtml(q.options[q.correctIndex])}</strong></div>`;
    }
  } else if (type === 'kc') {
    if (item.userAnswer && item.userAnswer.trim()) {
      answerHtml += `<div class="review-answer your-answer">Senin cevabın:<br><strong>${escapeHtml(item.userAnswer)}</strong></div>`;
    }
    answerHtml += `<div class="review-answer correct-answer">Örnek cevap:<br><strong>${escapeHtml(q.answer)}</strong></div>`;
    if (q.keyPoints && q.keyPoints.length > 0) {
      answerHtml += `<div class="classic-keypoints" style="margin-top: 8px;">${q.keyPoints.map(kp => `<span class="keypoint-chip">${escapeHtml(kp)}</span>`).join('')}</div>`;
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
