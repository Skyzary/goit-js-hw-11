import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('.searchbar');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'No Results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits.slice(0, 9));
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
      });
    })
    .finally(() => {
      hideLoader();
    });
});
