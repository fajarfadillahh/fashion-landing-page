// ----- SHOW AND HIDE NAVBAR MENU -----
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ----- ANIMATIONS -----
// Home Primary
TweenMax.to(".home__primary", 2, {
  width: "100%",
  ease: Expo.easeInOut,
});

gsap.from(".home__title", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 100,
});

gsap.from(".home__img img", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: -100,
});

// Home Secondary
TweenMax.to(".home__secondary", 2.5, {
  width: "100%",
  ease: Expo.easeInOut,
});

gsap.from(".home__scroll", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  x: -100,
});

gsap.from(".home__year", {
  opacity: -1,
  duration: 2,
  delay: 1.5,
  x: 100,
});
