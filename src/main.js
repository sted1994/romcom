var movieImg = document.querySelector(".cover-image");
var randomCoverBtn = document.querySelector(".random-cover-button");
var movieTitle = document.querySelector(".cover-title");
var movieDescription1 = document.querySelector(".tagline-1");
var movieDescription2 = document.querySelector(".tagline-2");
var createPersonalCover = document.querySelector(".make-new-button");
var createForm = document.querySelector(".form-view");
var displayWindow = document.querySelector(".main-cover");
var saveCoverBtn = document.querySelector(".save-cover-button");
var homeBtn = document.querySelector(".home-button");
var buttonBar = document.querySelector(".controls")
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


window.addEventListener("load", generateCoverImg)
randomCoverBtn.addEventListener("click", generateCoverImg);

createPersonalCover.addEventListener("click", displayForm)



function generateCoverImg(){
  movieImg.src = covers[getRandomIndex(covers)]
  movieTitle.innerText = titles[getRandomIndex(titles)]
  movieDescription1.innerText = descriptors[getRandomIndex(descriptors)]
  movieDescription2.innerText = descriptors[getRandomIndex(descriptors)]
};

function displayForm(){
  displayWindow.innerHTML = createForm.innerHTML;
  randomCoverBtn.hidden = true;
  saveCoverBtn.hidden = true;
  homeBtn.classList.remove("hidden");
  console.log(buttonBar);
  // buttonBar.innerHTML = homeBtn.innerHTML + buttonBar.innerHTML;
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}




// display home button
