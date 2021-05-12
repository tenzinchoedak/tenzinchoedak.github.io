/**this is for the hamburger navigation**/

const hamburger = document.querySelector(".hamburger");
const navName = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navName.classList.toggle("open");
});

/**this is for the readmore function*/

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

/**this is for when click change size the image of blogs*/
let changeSz = document.querySelector(".blogpic");
function changeSize () {
  if(changeSz.style.width === "40%"){
  changeSz.style.width="75%";
} else {
  changeSz.style.width="40%";
}
}