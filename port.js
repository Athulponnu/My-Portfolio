document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  faders.forEach(fader => {
    observer.observe(fader);
  });
});


const slider = document.querySelector('.slider-strip');
const container = document.querySelector('.slider-container');

window.addEventListener('scroll', () => {
  const rect = container.getBoundingClientRect();
  const progress = 1 - rect.top / window.innerHeight;
  slider.style.transform = `translateX(${Math.max(0, progress * 250)}px)`;
});

