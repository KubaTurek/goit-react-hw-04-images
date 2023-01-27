import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ImagesContext = createContext();

export const useImagesContext = () => useContext(ImagesContext);

export const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState('1');
  const [searchedWord, setsearchedWord] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [largeImageUrl, setlargeImageUrl] = useState();
  const [loadMore, setloadMore] = useState(true);

  const storedImages = currentImages => {
    setImages(currentImages);
  };

  const changeIsLoading = value => {
    setisLoading(value);
  };

  const getImagesbySearch = searchedImages => {
    setsearchedWord(searchedImages);
  };

  const setPageFunction = page => {
    setPage(page);
  };

  const setuplargeImageUrl = url => {
    setlargeImageUrl(url);
  };

  const changeLoadMore = () => {
    setloadMore(!loadMore);
  };

  const loadMoreImages = loadImages => {
    setImages([...images, ...loadImages]);
  };

  return (
    <ImagesContext.Provider
      value={{
        storedImages,
        getImagesbySearch,
        setPageFunction,
        setuplargeImageUrl,
        changeIsLoading,
        changeLoadMore,
        loadMoreImages,
        page,
        searchedWord,
        isLoading,
        largeImageUrl,
        loadMore,
        images,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

ImagesProvider.propTypes = {
  children: PropTypes.node,
};

ImagesContext.Provider.propTypes = {
  value: PropTypes.objectOf({
    storedImages: PropTypes.func,
    getImagesbySearch: PropTypes.func,
    setPageFunction: PropTypes.func,
    setuplargeImageUrl: PropTypes.func,
    changeIsLoading: PropTypes.func,
    changeLoadMore: PropTypes.func,
    loadMoreImages: PropTypes.func,
    page: PropTypes.number,
    searchedWord: PropTypes.string,
    isLoading: PropTypes.bool,
    largeImageUrl: PropTypes.string,
    loadMore: PropTypes.bool,
    images: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      )
    ),
  }),
};
