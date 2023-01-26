import css from './Modal.module.css';
import { useImagesContext } from 'Context/ImagesContext';

const Modal = () => {
  const { largeImageUrl, setuplargeImageUrl } = useImagesContext();

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setuplargeImageUrl('');
    }
  });

  const hideGallery = () => {
    setuplargeImageUrl('');
  };

  return (
    <>
      <div className={css.overlay} onClick={hideGallery}></div>
      <div className={css.modal}>
        <img className={css.image} src={largeImageUrl} alt="" />
      </div>
    </>
  );
};

export default Modal;
