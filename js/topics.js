document.querySelectorAll("[data-topic]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.body.classList.add("lines-reset");

    const destination = link.getAttribute("href");

    setTimeout(() => {
      window.location.href = destination;
    }, 750);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const floaters = document.querySelectorAll(".floating-athlete");
  const topics = document.querySelector(".topics-grid");

  if (!topics) return;

  function updateFloaters() {
    const rect = topics.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const inView =
      rect.top < viewportHeight * 0.6 &&
      rect.bottom > viewportHeight * 0.4;

    floaters.forEach(el => {
      el.classList.toggle("show", inView);
    });
  }

  window.addEventListener("scroll", updateFloaters);
  updateFloaters(); // run once on load
});

document.addEventListener('DOMContentLoaded', () => {
  const trainingImages = document.querySelectorAll('.training-image img');

  const colorObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-color');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.7
    }
  );

  trainingImages.forEach(img => colorObserver.observe(img));
});



document.querySelectorAll('.drill-card').forEach(card => {
  card.addEventListener('click', () => {
    const flipped = card.classList.contains('flipped');

    if (flipped) {
      card.classList.remove('flipped');
      card.classList.add('colored'); // stays color
    } else {
      card.classList.add('flipped');
    }
  });
});


const cards = document.querySelectorAll(".athlete-card");
const overlay = document.getElementById("athleteOverlay");

const overlayMain = overlay.querySelector(".overlay-main");
const overlaySecondary = overlay.querySelector(".overlay-secondary");
const overlayName = overlay.querySelector(".overlay-name");
const overlayDescription = overlay.querySelector(".overlay-description");

cards.forEach(card => {
  card.addEventListener("click", () => {
    overlayMain.src = card.dataset.main;
    overlaySecondary.src = card.dataset.secondary;
    overlayName.textContent = card.dataset.name;
    overlayDescription.textContent = card.dataset.description;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});


const backButton = document.querySelector(".overlay-back");

backButton.addEventListener("click", e => {
  e.stopPropagation(); // prevent overlay click-close
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});
