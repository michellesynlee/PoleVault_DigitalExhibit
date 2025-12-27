document.addEventListener("DOMContentLoaded", () => {
  const bubka = document.getElementById("bubkaPop");
  const triggerSection = document.querySelector(".about-divider");

  if (!bubka || !triggerSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bubka.classList.add("show");
        } else {
          bubka.classList.remove("show");
        }
      });
    },
    {
      rootMargin: "-60% 0px -10% 0px", // 👈 THIS is the key
      threshold: 0,
    }
  );

  observer.observe(triggerSection);
});