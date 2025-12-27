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

