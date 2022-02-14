# `Tedesco's & Meier's RomCom`

A custom Romance Novel Generator!
___
## `Motivation`

Who hasn't gone through life and felt like that have lost the urge that helps them keep moving forward? Well, my partner and I felt that the best way to help people stoke the embers that keep you moving was proper motivation!



## `Build Status`

Build status of Tedesco's & Meier's RomCom:


 _Finished_

## `Code Style`

>* HTML
>* Css
>* JavaScript

## `Built with loving care provided by`

* [Atom](https://atom.io/)
* [GitHub](https://github.com/)

## `Features`
1. Randomly generate Romance Novel covers.

2. Make your own romance novel via a picture, quote, and title of your choice

3. Save your favorite cover to browse through whenever you want

4. Share with your friends and help them keep moving forward


## `Code Example`
```
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
```

## `Installation`

>If this App sounds like something you or your friends would be intrested in:
* Simply empty your savings account and send your contribution and your first born to
>
>`WWW.don'tDOthis/youRsigningAWAYYourSoul4A_$=imp-leAPP`

---
# `Credits`
This has been a @sted1994 & @mmeier274 Collaboration project

None of this would be possible without the support and teachings from the esteemed Turing school.

![alt text](https://user-images.githubusercontent.com/70342126/145727688-458ce081-3783-4453-8341-677401cd81b4.png)


If intrested in learning to code and create under Turing tutelage feel free to sign-up for classes [Here](https://turing.edu/)
