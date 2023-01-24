import css from './Searchbar.module.css';
import { useImagesContext } from 'ImagesContext/ImagesContext';
import { fetchApi } from 'components/functions/fetchApi';

const Searchbar = () => {
  const { getImagesbySearch, storedImages, setPageFunction, changeIsLoading } =
    useImagesContext();

  const onSubmit = async event => {
    event.preventDefault();

    changeIsLoading(true);
    const enterredValue = event.target.input.value;

    if (enterredValue === '') {
      getImagesbySearch('');

      alert('You need to insert something');
      changeIsLoading(false);
      return;
    }

    event.target.input.value = '';

    const results = await fetchApi(enterredValue, 1);

    if (results.length === 0) {
      alert('There are no results, try with a different searchword');
      changeIsLoading(false);
      return;
    }

    getImagesbySearch(enterredValue);
    setPageFunction(1);
    storedImages(results);
    changeIsLoading(false);
  };

  return (
    <header className={css.search__bar}>
      <form className={css.search__form} onSubmit={onSubmit}>
        <button type="submit" className={css.search__button}>
          <span className={css.search__label}>Find</span>
        </button>

        <input
          className={css.search__input}
          type="text"
          autoComplete="off"
          autoFocus
          name="input"
          placeholder="Search images"
        />
      </form>
    </header>
  );
};

export default Searchbar;
