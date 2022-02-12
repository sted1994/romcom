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
var viewSavedCoversBtn = document.querySelector(".view-saved-button");
var homeScreen = document.querySelector(".home-view");
var favCovers = document.querySelector(".saved-view");
var yourCover = document.querySelector(".user-cover");
var yourTitle = document.querySelector(".user-title");
var yourDes1 = document.querySelector(".user-desc1");
var yourDes2 = document.querySelector(".user-desc2");
var yourBookBtn = document.querySelector(".create-new-book-button");

var currentCover = [];
var savedCovers = [];

window.addEventListener("load", generateCoverImg)
randomCoverBtn.addEventListener("click", generateCoverImg);
createPersonalCover.addEventListener("click", displayForm);
viewSavedCoversBtn.addEventListener("click", displaySavedCovers);
homeBtn.addEventListener("click", displayHome);
yourBookBtn.addEventListener("click", savePersonalCover);
saveCoverBtn.addEventListener("click", saveCurrentCover);

function show(object) {
  object.classList.remove('hidden')
}

function hide(object) {
  object.classList.add('hidden')
}

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover[0])) {
    savedCovers.unshift(currentCover[0]);
  }
}

function generateCoverImg() {
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  movieImg.src = randomCover.cover;
  movieTitle.innerText = randomCover.title;
  movieDescription1.innerText = randomCover.tagline1;
  movieDescription2.innerText = randomCover.tagline2;
  currentCover.unshift(randomCover)

  if (currentCover.length > 2) {
    currentCover.pop();
    console.log(currentCover);
  }
};

function displayForm() {
  hide(displayWindow);
  show(createForm);
  hide(randomCoverBtn);
  hide(saveCoverBtn);
  show(homeBtn);
};

function savePersonalCover() {
  var cover = new Cover(yourCover.value, yourTitle.value, yourDes1.value, yourDes2.value);
  event.preventDefault();
  savedCovers.push(cover);
  movieImg.src = cover.cover;
  movieTitle.innerText = cover.title;
  movieDescription1.innerText = cover.tagline1;
  movieDescription2.innerText = cover.tagline2;
  displayHome();
};

function displaySavedCovers() {
  hide(randomCoverBtn);
  hide(saveCoverBtn);
  show(homeBtn);
  for (var i = 0; i < savedCovers.length; i++) {
    movieImg.src = savedCovers[i].cover;
    movieTitle.innerText = savedCovers[i].title;
    movieDescription1.innerText = savedCovers[i].tagline1;
    movieDescription2.innerText = savedCovers[i].tagline2;
    show(displayWindow);
  }
}

function displayHome() {
  show(displayWindow);
  show(randomCoverBtn);
  show(saveCoverBtn);
  hide(homeBtn);
  hide(createForm);
  hide(favCovers);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
