import axios from 'axios';
import css from './Searchbar.module.css';
import { useImagesContext } from 'components/context';

const Searchbar = () => {
  const { getImagesbySearch, storedImages, setPageFunction, changeIsLoading } =
    useImagesContext();

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

  const onSubmit = async event => {
    event.preventDefault();

    changeIsLoading(true);
    const enterredValue = event.target.input.value;

    if (enterredValue === '') {
      getImagesbySearch('');

      alert('You need to insert something');
      return;
    }

    event.target.input.value = '';

    const results = await fetchApi(enterredValue, 1);

    if (results.length === 0) {
      alert('There are no results, try with a different searchword');
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
