/*
  UYGULAMA MANTIĞI
  ----------------
  Bu dosya, data/ klasöründeki içerikleri okuyup ekrana kart olarak çizer,
  sekmeler arası geçişi ve soru/detay etkileşimlerini yönetir.
  Yeni bir BÖLÜM eklemek isterseniz (örn. "Sınavlar"), aşağıdaki RENDERERS
  nesnesine yeni bir fonksiyon eklemeniz ve index.html'e ilgili sekme/section'ı
  eklemeniz yeterlidir.
*/

function renderDetailList(items) {
  return items
    .map((item) => {
      if (item.list) {
        return `
          <div class="modal-section">
            <h4>${item.heading}</h4>
            <ul>${item.list.map((li) => `<li>${li}</li>`).join("")}</ul>
          </div>`;
      }
      return `
        <div class="modal-section">
          <h4>${item.heading}</h4>
          <p>${item.text}</p>
        </div>`;
    })
    .join("");
}

function openModal(html) {
  document.getElementById("modal-body").innerHTML = html;
  document.getElementById("modal-overlay").classList.add("visible");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("visible");
}

const RENDERERS = {
  ozetler(container) {
    container.innerHTML = `
      <p class="section-intro">Konu başlıklarına tıklayarak detaylı özeti görüntüleyin.</p>
      <div class="grid">
        ${SUMMARY_CARDS.map(
          (card) => `
          <div class="card" data-id="${card.id}">
            <span class="tag">${card.category}</span>
            <h3>${card.title}</h3>
            <p>${card.summary}</p>
          </div>`
        ).join("")}
      </div>
    `;

    container.querySelectorAll(".card").forEach((el) => {
      el.addEventListener("click", () => {
        const card = SUMMARY_CARDS.find((c) => c.id === el.dataset.id);
        openModal(`
          <span class="modal-tag">${card.category}</span>
          <h2>${card.title}</h2>
          ${renderDetailList(card.details)}
        `);
      });
    });
  },

  sorular(container) {
    container.innerHTML = `
      <p class="section-intro">Bir şıkka tıklayarak cevabınızı kontrol edin.</p>
      ${QUESTIONS.map(
        (q) => `
        <div class="question-card" data-id="${q.id}">
          <h3>${q.question}</h3>
          <div class="options">
            ${q.options
              .map((opt, i) => `<button class="option-btn" data-index="${i}">${opt}</button>`)
              .join("")}
          </div>
          <div class="explanation">${q.explanation}</div>
        </div>`
      ).join("")}
    `;

    container.querySelectorAll(".question-card").forEach((qCard) => {
      const q = QUESTIONS.find((item) => item.id === qCard.dataset.id);
      const buttons = qCard.querySelectorAll(".option-btn");
      let answered = false;

      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (answered) return;
          answered = true;
          const chosenIndex = Number(btn.dataset.index);

          buttons.forEach((b) => {
            const idx = Number(b.dataset.index);
            if (idx === q.answerIndex) {
              b.classList.add("correct");
            } else if (idx === chosenIndex) {
              b.classList.add("incorrect");
            }
          });

          qCard.querySelector(".explanation").classList.add("visible");
        });
      });
    });
  },

  vakalar(container) {
    container.innerHTML = `
      <p class="section-intro">Vaka başlığına tıklayarak öykü, muayene ve tartışma bölümlerini görüntüleyin.</p>
      <div class="grid">
        ${CASES.map(
          (c) => `
          <div class="card" data-id="${c.id}">
            <span class="tag">${c.category}</span>
            <h3>${c.title}</h3>
            <p>${c.presentation}</p>
          </div>`
        ).join("")}
      </div>
    `;

    container.querySelectorAll(".card").forEach((el) => {
      el.addEventListener("click", () => {
        const c = CASES.find((item) => item.id === el.dataset.id);
        openModal(`
          <span class="modal-tag">${c.category}</span>
          <h2>${c.title}</h2>
          <div class="modal-section">
            <h4>Başvuru / Öykü</h4>
            <p>${c.presentation}</p>
          </div>
          <div class="modal-section">
            <h4>Muayene Bulguları</h4>
            <p>${c.examination}</p>
          </div>
          <div class="modal-section">
            <h4>Tanı</h4>
            <p>${c.diagnosis}</p>
          </div>
          <div class="modal-section">
            <h4>Tartışma</h4>
            <ul>${c.discussion.map((d) => `<li>${d}</li>`).join("")}</ul>
          </div>
        `);
      });
    });
  },

  aciller(container) {
    container.innerHTML = `
      <p class="section-intro">Acil durumun üzerine tıklayarak alarm bulgularını ve ilk yaklaşımı görüntüleyin.</p>
      <div class="grid">
        ${EMERGENCIES.map(
          (e) => `
          <div class="card emergency" data-id="${e.id}">
            <span class="tag">${e.category}</span>
            <h3>${e.title}</h3>
            <p>${e.redFlags[0]}</p>
          </div>`
        ).join("")}
      </div>
    `;

    container.querySelectorAll(".card").forEach((el) => {
      el.addEventListener("click", () => {
        const e = EMERGENCIES.find((item) => item.id === el.dataset.id);
        openModal(`
          <span class="modal-tag">${e.category}</span>
          <h2>${e.title}</h2>
          <div class="modal-section">
            <h4>Alarm Bulguları</h4>
            <ul>${e.redFlags.map((r) => `<li>${r}</li>`).join("")}</ul>
          </div>
          <div class="modal-section">
            <h4>İlk Yaklaşım</h4>
            <ul>${e.immediateAction.map((a) => `<li>${a}</li>`).join("")}</ul>
          </div>
        `);
      });
    });
  }
};

function switchSection(sectionId) {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === sectionId);
  });
  document.querySelectorAll(".section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === sectionId);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(RENDERERS).forEach((sectionId) => {
    const container = document.getElementById(sectionId);
    RENDERERS[sectionId](container);
  });

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchSection(btn.dataset.section));
  });

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
});
