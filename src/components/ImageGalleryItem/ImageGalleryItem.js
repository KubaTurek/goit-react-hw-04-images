import css from './ImageGalleryItem.module.css';
import { useImagesContext } from 'ImagesContext/ImagesContext';

const ImageGalleryItem = () => {
  const { images, setuplargeImageUrl } = useImagesContext();

  const showGallery = url => {
    setuplargeImageUrl(url);
  };

  return images.map(image => {
    return (
      <li className={css.gallery__item} key={image.id}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          data-large={image.largeImageURL}
          className={css.gallery__image}
          onClick={() => showGallery(image.largeImageURL)}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
