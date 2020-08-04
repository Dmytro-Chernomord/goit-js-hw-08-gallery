import img from "./gallery-items.js";

const galleryArr = img
  .map(
    (el) =>
      `<li class="gallery__item"><a class="gallery__link" href="${el.original}"><img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"/></a></li>`
  )
  .join("");

// Refs
const ulRef = document.querySelector(".js-gallery");
const modalDivRef = document.querySelector(".js-lightbox");
const closeModalButtonRef = document.querySelector(
  "button[data-action=close-lightbox]"
);
const showImageRef = document.querySelector(".lightbox__image");
const backdoropRef = document.querySelector(".lightbox__content");

// Eventlistner
ulRef.addEventListener("click", openModal);
closeModalButtonRef.addEventListener("click", closeModal);
backdoropRef.addEventListener("click", backdropClose);

//Function
function backdropClose() {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
function closeOnEscape() {
  if (event.key === "Escape") {
    closeModal();
  }
}
function closeModal() {
  modalDivRef.classList.remove("is-open");
  window.removeEventListener("keyup", closeOnEscape);

  showImageRef.src = "";
}
function openModal() {
  event.preventDefault();
  window.addEventListener("keyup", closeOnEscape);
  const img = event.target.dataset.source;
  showImageRef.src = img;
  if (event.target !== event.currentTarget) {
    modalDivRef.classList.add("is-open");
  }
}

const galleryInsert = ulRef.insertAdjacentHTML("beforeend", galleryArr);
