import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { useImagesContext } from './context';

const App = () => {

  const {isLoading, images, loadMore, largeImageUrl} = useImagesContext()


    return (
      <div className={css.app}>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
       
        {images.length && loadMore === true && (
          <Button />
        )}
        {isLoading && <Loader />}
        {largeImageUrl && (
          <Modal />
        )}
      </div>
    );
  }


export default App;
