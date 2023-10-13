//Toggle Class Active On The Buttone To Open The Menu In The Small Screens
var toggle = document.querySelector(".toggle-menu"),
  links = document.querySelector(".links");
toggle.onclick = function () {
  links.classList.toggle("menu-active");
};

// Creat The Slider In The Landing-Page
//Get Tht Next And Prev Button
var nextButton = document.querySelector(".right"),
  prevButton = document.querySelector(".left");
// Get The Bullits
var mainBullits = Array.from(document.querySelectorAll(".landing .bullits li"));
// Creat Click Event For Th LIs
mainBullits.forEach(li => {
  li.onclick = function () {
    currentPoistion = parseInt(li.getAttribute("data-index"));
    checker();
  };
});
// mainBullits.forEach(function (li) { });

// Get The Images
var imagesList = Array.from(document.querySelectorAll(".images img"));
// Get The Count Of Images
var imagesCount = imagesList.length;
//Creat The CurrentPosition variable
var currentPoistion = 2;
// Creat The Click Event For The next And Prev Button
nextButton.onclick = nextClick;
prevButton.onclick = prevClick;


checker();


function nextClick() {
  if (currentPoistion == imagesCount) {
    currentPoistion = 1;
    checker();
  } else {
    currentPoistion++;
    checker();
  }
  // if (nextButton.classList.contains("disabled")) {
  //   return false;
  // } else {
  //   currentPoistion++;
  //   checker();
  // }
}
function prevClick() {
  if (currentPoistion == 1) {
    currentPoistion = imagesCount;
    checker();
  }
  else {
    currentPoistion--;
    checker();
  }
  // if (prevButton.classList.contains("disabled")) {
  //   return false;
  // } else {
  //   currentPoistion--;
  //   checker();
  // }
}

function checker() {
  removeAllActive();
  //Add Class To The Image
  imagesList[currentPoistion - 1].classList.add("active");
  // Add Class Active On The Li
  mainBullits[currentPoistion - 1].classList.add("active");

  //To Add Class Disabled To The Buttons
  // Check If CurrentPosition Was The Last
  // if (currentPoistion == imagesCount) {
  //   nextButton.classList.add("disabled");
  // } else {
  //   nextButton.classList.remove("disabled");
  // }
  // if (currentPoistion == 1) {
  //   prevButton.classList.add("disabled");
  // } else {
  //   prevButton.classList.remove("disabled");
  // }
}

function removeAllActive() {
  // Remove Class Active From All Images
  for (var i = 0; i < imagesCount; i++) {
    imagesList[i].classList.remove("active");
  }
  // Remove Class Active From All Bullits
  for (var i = 0; i < imagesCount; i++) {
    mainBullits[i].classList.remove("active");
  }
}



// //Toggle class Active On The "li" In The Shuffle list
var shuffleItems = document.querySelectorAll(".portfolio .shuffle li");
shuffleItems.forEach(li => {
  //Add The Click Event On The "li"
  li.addEventListener("click", (e) => {
    // //Remove Class Active Frome all Childes
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    //Add Active Class On The "li" It Self
    e.target.classList.add("active");
  });
});








// Creat The Slider For THe Testimonials
// CreatThe CurrentPosition
var testimonialsCurrentPosition = 2;
// Get The min-Testimonials 
var allDivs = Array.from(document.querySelectorAll(".our-skills .testimonials .con .min-testimonials"));
// Get The Count Of The Divs
var divsCount = allDivs.length;
// Get The Bullits
var testimonialsBullits = Array.from(document.querySelectorAll(".our-skills .testimonials .bullits li"));
// Add Click Event To The LIs
testimonialsBullits.forEach(bullite => {
  bullite.onclick = function () {
    testimonialsCurrentPosition = parseInt(bullite.getAttribute("data-index"));
    testimonialsChecker();
  };
});
testimonialsChecker();
// Creat The Chrcker Function
function testimonialsChecker() {
  testimonialsRemoveAllActives();
  testimonialsBullits[testimonialsCurrentPosition - 1].classList.add("active");
  allDivs[testimonialsCurrentPosition - 1].classList.add("active");
}
function testimonialsRemoveAllActives() {
  for (var i = 0; i < divsCount; i++) {
    allDivs[i].classList.remove("active");
    testimonialsBullits[i].classList.remove("active");
  }
}