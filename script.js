function initScrollAnimations() {
  const cards = document.querySelectorAll(".advantages__card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = Array.from(cards).indexOf(card);
          const delay = index * 100;

          setTimeout(() => {
            card.classList.add("animate-in");
          }, delay);

          observer.unobserve(card);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
}

document.addEventListener("DOMContentLoaded", initScrollAnimations);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".ai-benefit__card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("ai-benefit__card--visible");
          }, index * 400);
        });
      }
    });
  },
  {
    threshold: 0.3,
  }
);

const aiBenefitElement = document.querySelector(".ai-benefit");
if (aiBenefitElement) {
  observer.observe(aiBenefitElement);
}

const mythsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".ai-myths__card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("ai-myths__card--animated");
          }, index * 200);
        });
      }
    });
  },
  {
    threshold: 0.3,
  }
);

const aiMythsElement = document.querySelector(".ai-myths");
if (aiMythsElement) {
  mythsObserver.observe(aiMythsElement);
}

// FAQ
document.addEventListener("DOMContentLoaded", function () {
  // Анимация появления блока program при скролле
  const programBlock = document.querySelector(".program");

  function checkScroll() {
    if (!programBlock) return;

    const blockPosition = programBlock.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (blockPosition < screenPosition) {
      programBlock.classList.add("visible");
    }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();

  // Обработка открытия/закрытия FAQ карточек - ОДИН обработчик
  const faqCards = document.querySelectorAll(".program__faq-card");

  faqCards.forEach((card) => {
    const header = card.querySelector(".program__faq-header");
    const toggleBtn = card.querySelector(".program__faq-toggle");

    // Вешаем обработчик ТОЛЬКО на кнопку, а не на весь header
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Останавливаем всплытие события

      // Закрываем все другие открытые карточки
      faqCards.forEach((otherCard) => {
        if (otherCard !== card && otherCard.classList.contains("active")) {
          otherCard.classList.remove("active");
          // Обновляем aria-атрибут для доступности
          const otherToggle = otherCard.querySelector(".program__faq-toggle");
          otherToggle.setAttribute("aria-expanded", "false");
        }
      });

      // Переключаем текущую карточку
      const isOpening = !card.classList.contains("active");
      card.classList.toggle("active");

      // Обновляем aria-атрибут
      toggleBtn.setAttribute("aria-expanded", isOpening ? "true" : "false");
    });

    // Дополнительно: обработчик на весь header (опционально)
    header.addEventListener("click", (e) => {
      // Если кликнули не по кнопке, то тоже открываем/закрываем
      if (e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
        toggleBtn.click(); // Имитируем клик по кнопке
      }
    });
  });
});
