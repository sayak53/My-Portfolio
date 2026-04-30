const sections = document.querySelectorAll('.hidden-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-section');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.hidden-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-section');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});