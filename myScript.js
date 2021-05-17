/**this is for the hamburger navigation**/

const hamburger = document.querySelector(".hamburger");
const navName = document.querySelector(".nav-menu");
const hamburgerLine = document.getElementsByClassName("line");

hamburger.addEventListener("click", () => {
  navName.classList.toggle("open");
});
hamburger.addEventListener('click', () => {
  for(let i = 0; i < hamburgerLine.length; i++) {
    if(hamburgerLine[i].style.backgroundColor=="white") {
      hamburgerLine[i].style.backgroundColor="rgb(44, 108, 126)";
    } else {
      hamburgerLine[i].style.backgroundColor="white";
    } 
  }
})

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
let hideBlog = document.querySelector(".bloginfo");
function changeSize () {
  if(changeSz.style.width === "40%"){
  changeSz.style.width="90%";
  hideBlog.style.display = "none";
} else {
  changeSz.style.width="40%";
  hideBlog.style.display = "inline";
}
}