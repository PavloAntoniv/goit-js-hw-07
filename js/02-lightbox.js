import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryEl = createGaleryImg(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryEl);

function createGaleryImg(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li> `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "img",
});

const closeLightbox = () => {
  instance.close();
  window.removeEventListener("keydown", handleEscape);
};

const handleEscape = (e) => {
  if (e.code === "Escape") {
    closeLightbox();
  }
};

window.addEventListener("keydown", handleEscape);
