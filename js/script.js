// Helper function to load partials
function loadPartial(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    })
    .catch((err) => console.error(`Error loading ${url}:`, err));
}

// Load partials
loadPartial("header", "partials/header.html");
loadPartial("hero", "partials/hero.html");
loadPartial("steps", "partials/steps.html");
loadPartial("about", "partials/about.html");
loadPartial("testimonial", "partials/testimonial.html");
loadPartial("footer", "partials/footer.html");
