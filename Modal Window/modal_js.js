'use strict'
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalButton = document.querySelectorAll(".modal-button");
const closeButton = document.querySelector(".close-modal");

const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let btn = 0; btn < modalButton.length; btn++) {
    modalButton[btn].addEventListener("click", openModal);
}

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);