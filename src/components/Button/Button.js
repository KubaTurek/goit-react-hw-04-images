import axios from 'axios';
import css from './Button.module.css';
import { useImagesContext } from 'components/context';

const Button = () => {
  const {
    searchedWord,
    page,
    changeLoadMore,
    setPageFunction,
    loadMoreImages,
    changeIsLoading,
  } = useImagesContext();

  const fetchApi = async (searchedWord, page) => {
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

  const handleLoadMore = async () => {
    changeIsLoading(true);
    const results = await fetchApi(searchedWord, page + 1);

    if (results.length < 12) {
      changeLoadMore();
    }
    setPageFunction(page + 1);
    loadMoreImages(results);
    changeIsLoading(false);
  };

  return (
    <button type="button" className={css.button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export default Button;
