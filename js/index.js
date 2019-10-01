// Your code goes here
// * [x] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [x] `scroll`
// * [ ] `select`
// * [x] `dblclick`

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

// ## Stretch Task:

// * [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

// ## Stretch assignment

// * [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.

const changeSize = document.querySelector(".img-content");
changeSize.addEventListener("click", () => {
  changeSize.style.transform = "scale(2.0)";
  changeSize.style.transition = "all 1s";
});

// const changeSizeTwo = document.querySelector(".img-content");
// changeSizeTwo.addEventListener("keydown", () => {
//   changeSizeTwo.style.transform = "scale(3.0)";
//   changeSizeTwo.style.transition = "all 1s";
// });

const changeBgColor = document.querySelector("body");
changeBgColor.addEventListener("dblclick", () => {
  changeBgColor.style.backgroundColor = "tan";
});

const changeImg = document.querySelector(".topPic");
changeImg.addEventListener("click", () => {
  changeImg.src = "img/destination.jpg";
});

const growHeaders = document.querySelector(".header");
window.addEventListener("scroll", () => {
  growHeaders.style.fontSize = "9rem";
  changeSize.style.transition = "all 1s";
});

document.querySelectorAll("a").forEach(el => {
  el.addEventListener("click", event => {
    event.preventDefault();
  });
});

const growBottomPic = document.querySelector(".content-destination img");
growBottomPic.addEventListener("mouseover", () => {
  growBottomPic.style.display = "none";
  // growBottomPic.style.display = "none";
  // growBottomPic.style.transform = "scale(1.5)";
  event.stopPropagation();
});

window.addEventListener("keydown", () => {
  growBottomPic.style.display = "none";
  // growBottomPic.style.display = "none";
  // growBottomPic.style.transform = "scale(1.5)";
  event.stopPropagation();
});

// document.querySelector(".bottomPic")(el => {
//   el.addEventListener("dblclick", event => {
//     el.style.transform = "scale(1.5)";
//     event.stopPropagation();
//   });
// });
