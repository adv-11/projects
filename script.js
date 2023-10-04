//animation using gsap
const main = document.querySelector("main");

let timeline = gsap.timeline();

const parallax = document.querySelectorAll(".parallax");

parallax.forEach((el) => {
  timeline.from(
    el,
    {
      top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
      duration: 2,
      ease: "power3.out",
    },
    "1"
  );
});

if (window.innerWidth >= 725) {
  main.style.maxHeight = `${window.innerWidth * 0.6}px`;
} else {
  main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

const images = [
  "solar-system.jpg",
  "pizza-carousel.jpg",
  "lux-auto.jpg",
  "pig-game.jpg",
  "portfolio.jpg",
  "guess-game.jpg",
  "quiz-game.jpg",
  "ig-clone.jpg",
  "java-gui.jpg",
];

const websites = [
  "https://adv-11.github.io/solarsystem/",
  "https://adv-11.github.io/pizza-carousel/",
  "https://adv-11.github.io/luxauto/",
  "https://adv-11.github.io/pig-game/",
  "https://adv-11.github.io/mysite/",
  "https://adv-11.github.io/guessnumber-game/",
  "https://adv-11.github.io/csb-woi8sm/",
  "https://csb-l2hycl.netlify.app/",
  "https://github.com/adv-11/ProcessScheduling-TE-SPPU",
];

const codes = [
  "https://github.com/adv-11/solarsystem",
  "https://github.com/adv-11/pizza-carousel",
  "https://github.com/adv-11/luxauto",
  "https://github.com/adv-11/pig-game",
  "https://github.com/adv-11/mysite",
  "https://github.com/adv-11/guessnumber-game",
  "https://github.com/adv-11/csb-woi8sm",
  "https://codesandbox.io/csb-l2hycl",
  "https://github.com/adv-11/ProcessScheduling-TE-SPPU",
];

const left = document.getElementById("swipe-left");
const image = document.getElementById("image");
const code = document.getElementById("code-a");
const project = document.getElementById("project-a");
const right = document.getElementById("swipe-right");
let i = 0;

left.addEventListener("click", function () {
  if (i === 0) {
    image.src = images[images.length - 1];
    code.href = codes[codes.length - 1];
    project.href = websites[websites.length - 1];
    i = images.length - 1;
  } else {
    image.src = images[i - 1];
    code.href = codes[i - 1];
    project.href = websites[i - 1];
    i -= 1;
  }
});

right.addEventListener("click", function () {
  if (i === images.length - 1) {
    image.src = images[0];
    code.href = codes[0];
    project.href = websites[0];
    i = 0;
  } else {
    image.src = images[i + 1];
    code.href = codes[i + 1];
    project.href = websites[i + 1];
    i += 1;
  }
});
