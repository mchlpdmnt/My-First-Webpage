document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  const container = document.querySelector(".container");
  const navbar = document.querySelector(".navbar");

  h1.addEventListener("click", () => {
    h1.classList.add("move-up");
    container.classList.add("show");
    navbar.classList.add("show");
  });
});
