import css from './Modal.module.css';
import { useImagesContext } from 'components/context';

const Modal = () => {
  const { largeImageUrl, setuplargeImageUrl } = useImagesContext();

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setuplargeImageUrl('');
    }
  });

  const hideGallery = event => {
    if (event.target.nodeName === 'DIV') {
      setuplargeImageUrl('');
    }
  };

  return (
    <div className={css.overlay} onClick={hideGallery}>
      <div className={css.modal}>
        <img className={css.image} src={largeImageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
