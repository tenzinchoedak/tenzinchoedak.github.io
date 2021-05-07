//This is for the mobile menu onlick
function myFunction() {
  var x = document.querySelector(".nav-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}