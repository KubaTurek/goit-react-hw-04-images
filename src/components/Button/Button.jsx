import css from './Button.module.css';
import { useImagesContext } from 'Context/ImagesContext';
import { fetchApi } from 'api/fetchApi';

const Button = () => {
  const {
    searchedWord,
    page,
    changeLoadMore,
    setPageFunction,
    loadMoreImages,
    changeIsLoading,
  } = useImagesContext();

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
