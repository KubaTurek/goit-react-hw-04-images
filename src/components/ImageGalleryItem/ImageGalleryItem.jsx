import css from './ImageGalleryItem.module.css';
import { useImagesContext } from 'Context/ImagesContext';

const ImageGalleryItem = ({ image }) => {
  const { setuplargeImageUrl } = useImagesContext();

  const showGallery = url => {
    setuplargeImageUrl(url);
  };
  return (
    <li key={image.id} className={css.gallery__item}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        data-large={image.largeImageURL}
        className={css.gallery__image}
        onClick={() => showGallery(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
