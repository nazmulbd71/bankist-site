"use strict";

// get element by class name and Id
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const scrollSection1 = document.getElementById("section--1");

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
