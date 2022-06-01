import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);

function createGallery(gallery) {
    
    const array = [];
    
    gallery.map(({ preview, original, description }) => {const item = document.createElement(`div`);
    item.classList.add(`gallery__item`);
    const link = document.createElement(`a`);

    link.classList.add(`gallery__link`);
    link.href = original;

    const image = document.createElement(`img`);
    image.classList.add(`gallery__image`);
    image.src = preview;
    image.dataset.source = original;
    image.alt = description
    item.append(link);
        link.append(image);

        array.push(item)
    })

    return array;
    
}
    
const galleryMarkup = createGallery(galleryItems);

gallery.append(...galleryMarkup);

console.log(gallery);