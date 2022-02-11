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
var homeScreen = document.querySelector(".home-view")
var favCovers = document.querySelector(".saved-view")
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

window.addEventListener("load", generateCoverImg)
randomCoverBtn.addEventListener("click", generateCoverImg);
createPersonalCover.addEventListener("click", displayForm);
viewSavedCoversBtn.addEventListener("click", displaySavedCovers);
homeBtn.addEventListener("click", displayHome);

  function show(object){
    object.classList.remove('hidden')
  }

  function hide(object){
    object.classList.add('hidden')
  }


function generateCoverImg(){
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
   movieImg.src = randomCover.cover;
   movieTitle.innerText = randomCover.title;
   movieDescription1.innerText = randomCover.tagline1;
   movieDescription2.innerText = randomCover.tagline2;
};

function displayForm(){
  hide(displayWindow);
  show(createForm);
  hide(randomCoverBtn);
  hide(saveCoverBtn);
  show(homeBtn);
}

function displaySavedCovers(){
  // for(var i = 0; i < savedCovers.length; i++){
  //   movieImg.src = savedCovers[i].cover;
  //   movieTitle.innerText = savedCovers[i].title;
  //   movieDescription1.innerText = savedCovers[i].tagline1;
  //   movieDescription2.innerText = savedCovers[i].tagline2;
  // }
  hide(createForm)
  hide(displayWindow);
  hide(randomCoverBtn);
  hide(saveCoverBtn);
  show(homeBtn);
}

  function displayHome(){
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
