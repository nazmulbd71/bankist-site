"use strict";

// get element by class name and Id
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const scrollSection1 = document.getElementById("section--1");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll("operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");

// Modal Window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// show modal button
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);

// scroll learn more button
btnScrollTo.addEventListener("click", function (e) {
  const s1Scroll = scrollSection1.getBoundingClientRect();
  scrollSection1.scrollIntoView({ behavior: "smooth" });
});

// all nav link smooth scroll
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  // guard
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // active tab
  clicked.classList.add("operations__tab--active");

  // active content area
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu Fade Animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sibLinks = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    sibLinks.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

// passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky navigation: Intersection Observer API
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const handleObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

handleObserver.observe(header);
