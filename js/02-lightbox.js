import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);

function createGallery(gallery) {
    
    const array = [];
    
    gallery.map(({ preview, original, description }) => {
        
    const link = document.createElement(`a`);
    link.classList.add(`gallery__item`);
    link.href = original;

    const image = document.createElement(`img`);
    image.classList.add(`gallery__image`);
    image.src = preview;
    image.alt = description
        link.append(image);

        array.push(link)
    })

    return array;
}
    
const galleryMarkup = createGallery(galleryItems);

gallery.append(...galleryMarkup);

const lightBox = new SimpleLightbox(`.gallery a`, { captionsData: `alt`, captionDelay: 250 });
lightBox.on('show.simplelightbox')
