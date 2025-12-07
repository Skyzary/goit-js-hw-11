import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47301858-8ff081a19a6e75e487e16544c';

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
}
