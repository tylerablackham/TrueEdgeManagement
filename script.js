/* Small helpers shared by every page. You don't need to edit this. */
(function () {
  // Mobile menu open/close
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  // Fill the current year in the footer automatically
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
