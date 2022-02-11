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
var buttonBar = document.querySelector(".controls");
var viewSavedCoversBtn = document.querySelector(".view-saved-button");
var favoriteCovers = document.querySelector(".saved-view");
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

window.addEventListener("load", generateCoverImg)
randomCoverBtn.addEventListener("click", generateCoverImg);
createPersonalCover.addEventListener("click", displayForm);
viewSavedCoversBtn.addEventListener("click", displaySavedCovers);

function generateCoverImg(){
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
   movieImg.src = randomCover.cover;
   movieTitle.innerText = randomCover.title;
   movieDescription1.innerText = randomCover.tagline1;
   movieDescription2.innerText = randomCover.tagline2;
};

function displayForm(){
  displayWindow.innerHTML = createForm.innerHTML;
  randomCoverBtn.hidden = true;
  saveCoverBtn.hidden = true;
  homeBtn.classList.remove("hidden");
}

function displaySavedCovers(){
  favoriteCovers.setAttribute("src", undefined);
  displayWindow.innerHTML = favoriteCovers.innerHTML;
  favoriteCovers.src = savedCovers[0].cover;
  console.log(favoriteCovers);
  favoriteCovers.classList.remove("hidden")
  randomCoverBtn.hidden = true;
  homeBtn.classList.remove("hidden");
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
