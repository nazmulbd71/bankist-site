"use strict";

// get element by class name and Id
const modal = document.querySelector(".modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// Modal Window
const openModal = function () {
  modal.classList.remove("hidden");
};

// show modal button
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
