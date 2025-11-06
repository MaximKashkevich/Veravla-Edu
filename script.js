// Intersection Observer для анимации при скролле
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

// Анимация для карточек ai-myths
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
    threshold: 0.2,
  }
);

const aiMythsElement = document.querySelector(".ai-myths");
if (aiMythsElement) {
  mythsObserver.observe(aiMythsElement);
}
