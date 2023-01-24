import axios from 'axios';

export const fetchApi = async (searchedWord, page) => {
  const newUrl =
    'https://pixabay.com/api/?q=' +
    searchedWord +
    '&page=' +
    page +
    '&key=31180890-6e7b1107714fce14b72fdcb4e&image_type=photo&orientation=horizontal&per_page=12';

  try {
    const response = await axios.get(newUrl);
    return response.data.hits;
  } catch (error) {
  } finally {
  }
};
