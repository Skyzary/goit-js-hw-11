import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" width="360" height="200" />
        </a>
        <ul class="props">
          <li>Likes <span class="props-value">${likes}</span></li>
          <li>Views <span class="props-value">${views}</span></li>
          <li>Comments <span class="props-value">${comments}</span></li>
          <li>Downloads <span class="props-value">${downloads}</span></li>
        </ul>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}
