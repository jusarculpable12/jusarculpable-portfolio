const btn = document.querySelector(".toggle-theme");
const body = document.querySelector("body");
  btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      body.classList.toggle("active");
});