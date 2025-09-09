// services-counter.js
document.addEventListener("DOMContentLoaded", function () {
      // Total Details Counter
  const counters = document.querySelectorAll('.number-text-big');
  const speed = 500; // smaller = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + '+';
        }
      };
      updateCount();
    });
  };

  // Trigger animation when stats section is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect(); // run once
      }
    });
  }, { threshold: 0.3 }); // 30% visible is enough

  observer.observe(document.querySelector('.number-text-box'));

  });
  