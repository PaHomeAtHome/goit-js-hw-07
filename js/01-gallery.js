import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);

function createGallery(gallery) {
    
    const array = [];
    
    gallery.map(({ preview, original, description }) => {
        
    const item = document.createElement(`div`);
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

gallery.onclick = (event) => {
    
    event.preventDefault();
    
    const div = document.createElement(`div`);
    
    const originalImg = document.createElement(`img`);
    originalImg.src = event.target.dataset.source;
    originalImg.alt = event.target.alt;
    div.append(originalImg);
    
    const instance = basicLightbox.create(div);

    instance.show()

    
};




   



