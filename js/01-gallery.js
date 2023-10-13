import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryRef = document.querySelector('.gallery');

const makeMarkupGallery = (galleryItems) => {
    const markup = galleryItems.map(({preview, description, original}) => `<li class='gallery__item'><img src=${preview}  alt=${description}  data-original=${original} class='gallery__image'></li>
    `)
    galleryRef.insertAdjacentHTML('beforeend', markup.join(''))
}

makeMarkupGallery(galleryItems);

galleryRef.addEventListener('click', (event) => {
    console.dir(event.target)
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.original} width="800" height="600">
`)
    instance.show()
})
