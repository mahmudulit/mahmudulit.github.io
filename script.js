// ===== Menu (mobile) =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // close menu on link click
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// ===== Year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ===== Typing effect =====
const typingEl = document.getElementById("typing");
const words = [
  "Digital Marketer",
  "Performance Ads Specialist",
  "Meta Ads Expert",
  "Growth-focused Marketer"
];

let w = 0, i = 0, deleting = false;

function tick() {
  if (!typingEl) return;

  const word = words[w];
  if (!deleting) {
    i++;
    typingEl.textContent = word.slice(0, i);
    if (i === word.length) {
      deleting = true;
      setTimeout(tick, 900);
      return;
    }
  } else {
    i--;
    typingEl.textContent = word.slice(0, i);
    if (i === 0) {
      deleting = false;
      w = (w + 1) % words.length;
    }
  }
  setTimeout(tick, deleting ? 45 : 70);
}
tick();
