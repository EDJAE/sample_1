(function () {
  "use strict";

  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  const yearEl = document.getElementById("year");
  const form = document.getElementById("cta-form");
  const emailInput = document.getElementById("email");
  const formMessage = document.getElementById("form-message");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function onScroll() {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 8);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest(".nav-link")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("click", function (event) {
    if (!nav || !navToggle) return;
    if (!nav.classList.contains("open")) return;
    if (nav.contains(event.target) || navToggle.contains(event.target)) return;
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  const counters = document.querySelectorAll("[data-count]");
  function animateCounter(el) {
    const target = Number(el.getAttribute("data-count")) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = value.toLocaleString("en-US") + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window && counters.length) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  } else {
    counters.forEach(function (el) {
      const target = Number(el.getAttribute("data-count")) || 0;
      const suffix = el.getAttribute("data-suffix") || "";
      el.textContent = target.toLocaleString("en-US") + suffix;
    });
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const value = emailInput.value.trim();

      emailInput.classList.remove("invalid");
      formMessage.classList.remove("success", "error");
      formMessage.textContent = "";

      if (!isValidEmail(value)) {
        emailInput.classList.add("invalid");
        formMessage.classList.add("error");
        formMessage.textContent = "Please enter a valid email address.";
        emailInput.focus();
        return;
      }

      formMessage.classList.add("success");
      formMessage.textContent = "Thanks! Check " + value + " to finish setting up your workspace.";
      form.reset();
    });

    emailInput.addEventListener("input", function () {
      emailInput.classList.remove("invalid");
      if (formMessage.classList.contains("error")) {
        formMessage.classList.remove("error");
        formMessage.textContent = "";
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    });
  });
})();
