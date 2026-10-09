// Toggle visibility of content when clicking headings
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h2").forEach(h2 => {
    h2.addEventListener("click", () => {
      const nextElement = h2.nextElementSibling;
      if (nextElement) {
        nextElement.classList.toggle("hidden");
      }
    });
  });
});
