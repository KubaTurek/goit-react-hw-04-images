import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { useImagesContext } from '../ImagesContext/ImagesContext';

const App = () => {
  const { isLoading, images, loadMore, largeImageUrl } = useImagesContext();

  return (
    <div className={css.app}>
      <Searchbar />
      <ImageGallery />

      {images.length && loadMore === true && <Button />}
      {isLoading && <Loader />}
      {largeImageUrl && <Modal />}
    </div>
  );
};

export default App;
