const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuNav.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuNav.classList.remove('open');
        menuOpen = false;
    }
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("mbtn");

function myFunction() {
  if (window.pageYOffset > 0) {
    menuBtn.classList.remove('open');
    menuNav.classList.remove('open');
    menuOpen = false;
  } 
}