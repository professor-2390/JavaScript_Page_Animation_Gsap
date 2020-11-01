const hero = document.querySelector(".hero");
const logo = document.querySelector("#logo ");
const slider = document.querySelector(".slider");
const headline = document.querySelector(".headline");
const hamburger = document.querySelector(".hamburger");
const arrowdown = document.querySelector(".down");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    logo,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, ease: Power2.easeInOut },
    "-=0.5"
  )
  .fromTo(logo, 0.5, { x: 0 }, { x: 30, ease: Power2.easeInOut })
  .fromTo(
    hamburger,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, ease: Power2.easeInOut },
    "-=0.5"
  )
  .fromTo(
    headline,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, ease: Power2.easeInOut },
    "-=0.5"
  )
  .fromTo(headline, 0.5, { y: 0 }, { y: -120, ease: Power2.easeInOut })
  .fromTo(headline, 0.5, { x: 0 }, { x: -50, ease: Power2.easeInOut })
  .fromTo(
    arrowdown,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, ease: Power2.easeInOut },
    "-=0.5"
  )
  .fromTo(arrowdown, 0.5, { y: 0 }, { y: -10, ease: Power2.easeInOut });

//   Typing

var typed = new Typed(".type", {
  strings: ["World", "Nature", "Day"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
});
