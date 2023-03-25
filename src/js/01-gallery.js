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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join("");
}

const onClick = (e) => {
  e.preventDefault();

  const source = e.target.dataset.source;
  if (!source) return;

  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`);

  instance.show();
};
gallery.addEventListener("click", onClick);

// закриття вікна esc
