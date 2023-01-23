import { createContext, useContext, useState } from 'react';

export const ImagesContext = createContext();

export const useImagesContext = () => useContext(ImagesContext);

export const ImagesPrivider = ({ children }) => {
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
        images,
        page,
        searchedWord,
        isLoading,
        largeImageUrl,
        loadMore,
        storedImages,
        getImagesbySearch,
        setPageFunction,
        setuplargeImageUrl,
        changeIsLoading,
        changeLoadMore,
        loadMoreImages,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
