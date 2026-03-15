document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Create mouse glow
  const glow = document.createElement("div");
  glow.className = "mouse-glow";
  body.appendChild(glow);

  document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });

  // Navbar scroll effect
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll);

  // Reveal on scroll
  const revealItems = document.querySelectorAll(
    ".glass-card, .fleet-card, .event-panel, .form-shell, .discord-banner, .stat-card, .mini-card, .section-heading"
  );

  revealItems.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealItems.forEach((item) => observer.observe(item));

  // Hero parallax
  const hero = document.querySelector(".hero");
  const heroOverlay = document.querySelector(".hero-overlay");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (hero) {
      hero.style.backgroundPosition = `center ${y * 0.18}px`;
    }
    if (heroOverlay) {
      heroOverlay.style.transform = `translateY(${y * 0.08}px)`;
    }
  });

  // Tiny tilt effect for cards
  const tiltCards = document.querySelectorAll(".glass-card, .fleet-card, .mini-card");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
});
