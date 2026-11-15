// SUKHAN storefront — collection filtering and gentle reveal.
(function () {
  "use strict";

  // Scent-family filters
  var chips = document.querySelectorAll(".chip");
  var cards = document.querySelectorAll(".card");

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      var filter = chip.getAttribute("data-filter");
      cards.forEach(function (card) {
        var show = filter === "all" || card.getAttribute("data-family") === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  // Reveal-on-scroll (disabled when the user prefers reduced motion)
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(".card, .section-head, .steps li, .about-inner");
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  }
})();
