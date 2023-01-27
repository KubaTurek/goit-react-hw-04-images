import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { useImagesContext } from 'Context/ImagesContext';

const ImageGallery = () => {
  const { images } = useImagesContext();

  return (
    <ul className={css.gallery}>
      {images.map(picture => {
        return <ImageGalleryItem image={picture} key={picture.id}/>;
      })}
    </ul>
  );
};

export default ImageGallery;
