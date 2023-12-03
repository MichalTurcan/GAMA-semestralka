//NAVIGACIA

const navE1 = document.querySelector(".navbar");
const navE2 = document.querySelector(".navbar");
const navText = document.querySelector(".nav-text");
const navText2 = document.querySelector(".nav-text2");
const navText3 = document.querySelector(".nav-text3");
const navText4 = document.querySelector(".nav-text4");

const mobile = document.querySelector(".navbar-mobile");
const comp = document.querySelector(".navbar-comp");

if (window.innerWidth >= 990) {
  comp.classList.add("visible");
  mobile.classList.add("invisible");
  comp.classList.remove("invisible");
  mobile.classList.remove("visible");

  window.addEventListener("scroll", () => {

    if (window.scrollY >= 2) {
      navE1.classList.add("navbar-scrolled");
      navText.classList.add("my-1");
      navText.classList.remove("my-3");
      navText2.classList.add("my-1");
      navText2.classList.remove("my-3");
      navText3.classList.add("my-1");
      navText3.classList.remove("my-3");
      navText4.classList.add("my-1");
      navText4.classList.remove("my-3");
      document.getElementById('logo').style.width = "2.5vh";
    } else if (window.scrollY < 2) {
      navE1.classList.remove("navbar-scrolled");
      navText.classList.add("my-3");
      navText.classList.remove("my-1");
      navText2.classList.add("my-3");
      navText2.classList.remove("my-1");
      navText3.classList.add("my-3");
      navText3.classList.remove("my-1");
      navText4.classList.add("my-3");
      navText4.classList.remove("my-1");
      document.getElementById('logo').style.width = "7vh";
    }
  })
} else {
  comp.classList.add("invisible");
  mobile.classList.add("visible");
  comp.classList.remove("visible");
  mobile.classList.remove("invisible");

  window.addEventListener("scroll", () => {

    if (window.scrollY >= 2) {
      document.getElementById("navbar_mobile").style.backgroundColor = "rgb(18, 18, 18)";
    } else if (window.scrollY < 2) {
      document.getElementById("navbar_mobile").style.backgroundColor = "transparent";
    }

  })
};


//RELOAD PAGE WIDTH
const targetWidth = 990;
let isBelowThreshold = window.innerWidth < targetWidth;
let isAboveThreshold = window.innerWidth >= targetWidth;

function reloadNavbarContent() {
  console.log('');
}

function checkWindowWidth() {
  const currentWidth = window.innerWidth;

  if (currentWidth <= targetWidth && !isBelowThreshold) {
    location.reload();
    isBelowThreshold = true;
  } else if (currentWidth > targetWidth) {
    isBelowThreshold = false;
  }

  if (currentWidth >= targetWidth && !isAboveThreshold) {
    location.reload();
    isAboveThreshold = true;
  } else if (currentWidth < targetWidth) {
    isAboveThreshold = false;
  }
}

window.addEventListener('resize', checkWindowWidth);



//GALERY
function openModal(imagePath) {
  var modalImage = document.getElementById('modalImage');
  modalImage.src = imagePath;
}


//TO TOP
let mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY >= 2) {
    mybutton.style.opacity = "100";

  } else if (window.scrollY < 2) {
    mybutton.style.opacity = "0";


  }
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// KONTAKT 
function buttonSend() {
  let notification = document.getElementById("alert");

  const meno = document.getElementById("name");
  const menoValue = meno.value;

  const priezvisko = document.getElementById("surname");
  const priezviskoValue = priezvisko.value;

  const oscislo = document.getElementById("number");
  const oscisloValue = oscislo.value;

  const email = document.getElementById("email");
  const sprava = document.getElementById("message");



  if (meno.value == "" || priezvisko.value == "" || oscislo.value == "" || email.value == "" || sprava.value == "") {
    alert("Nemaš vyplnené povinne polia");
  } else {

    document.getElementById("notification_text").innerText = " Ďakujeme " + menoValue + " " + priezviskoValue + "(" + oscisloValue + ") za tvoju správu";


    notification.style.opacity = "100";

    setTimeout(function () {
      notification.style.opacity = "0";
      meno.value = "";
      priezvisko.value = "";
      oscislo.value = "";
      email.value = "";
      sprava.value = "";
    }, 3000);
  }

}
