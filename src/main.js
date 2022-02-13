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
var savedViewScreen = document.querySelector(".saved-view");
var yourCover = document.querySelector(".user-cover");
var yourTitle = document.querySelector(".user-title");
var yourDes1 = document.querySelector(".user-desc1");
var yourDes2 = document.querySelector(".user-desc2");
var yourBookBtn = document.querySelector(".create-new-book-button");
var savedCoversScreen = document.querySelector(".saved-covers-section")

var currentCover = [];
var savedCovers = [];

window.addEventListener("load", generateCoverImg)
randomCoverBtn.addEventListener("click", generateCoverImg);
createPersonalCover.addEventListener("click", displayForm);
viewSavedCoversBtn.addEventListener("click", displaySavedCovers);
homeBtn.addEventListener("click", displayHome);
yourBookBtn.addEventListener("click", savePersonalCover);
saveCoverBtn.addEventListener("click", saveCurrentCover);
savedCoversScreen.addEventListener("dblclick", deleteSavedCover);

function show(object) {
  object.classList.remove('hidden')
}

function hide(object) {
  object.classList.add('hidden')
}

function deleteSavedCover(){
  var idToDelete = parseInt(event.target.closest(".mini-cover").id)
  for (var i = 0; i < savedCovers.length; i++){
    if (savedCovers[i].id === idToDelete){
      savedCovers.splice(i,1);
      displaySavedCovers()
    }
  }
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
  }
};

function displayForm() {
  hide(displayWindow);
  show(createForm);
  hide(randomCoverBtn);
  hide(saveCoverBtn);
  show(homeBtn);
  hide(savedViewScreen);
  hide(createPersonalCover);
  show(viewSavedCoversBtn);
};

function savePersonalCover() {
  var cover = new Cover(yourCover.value, yourTitle.value, yourDes1.value, yourDes2.value);
  event.preventDefault();
  //savedCovers.push(cover);
  movieImg.src = cover.cover;
  movieTitle.innerText = cover.title;
  movieDescription1.innerText = cover.tagline1;
  movieDescription2.innerText = cover.tagline2;

  covers.unshift(cover.cover);
  titles.unshift(cover.title);
  descriptors.unshift(cover.tagline1);
  descriptors.unshift(cover.tagline2);
  displayHome();
};

function displaySavedCovers() {
  savedCoversScreen.innerHTML = '';
  hide(randomCoverBtn);
  hide(saveCoverBtn);
  show(homeBtn);
  hide(displayWindow);
  hide(createForm);
  hide(viewSavedCoversBtn);
  show(createPersonalCover);
  for (var i = 0; i < savedCovers.length; i++) {
    var currentCoverinstance = new Cover(savedCovers[i].cover, savedCovers[i].title, savedCovers[i].tagline1, savedCovers[i].tagline2)
    savedCoversScreen.innerHTML += `
      <section class="mini-cover" id=${savedCovers[i].id}>
        <img class="cover-image" src="${currentCoverinstance.cover}">
        <h2 class="cover-title">${currentCoverinstance.title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${currentCoverinstance.tagline1}</span> and <span class="tagline-2">${currentCoverinstance.tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>`
  }
    show(savedViewScreen);
}

function displayHome() {
  show(displayWindow);
  show(randomCoverBtn);
  show(saveCoverBtn);
  hide(homeBtn);
  hide(createForm);
  hide(savedViewScreen);
  show(viewSavedCoversBtn);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
