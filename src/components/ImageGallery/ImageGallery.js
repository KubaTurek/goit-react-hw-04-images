import css from './ImageGallery.module.css';
import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul className={css.gallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
