/**this is for the hamburger navigation**/

const hamburger = document.querySelector(".hamburger");
const navName = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navName.classList.toggle("open");
});