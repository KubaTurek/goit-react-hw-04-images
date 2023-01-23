import { Watch } from 'react-loader-spinner';
import css from './Loader.module.css';
import { useImagesContext } from './../context';

const Loader = () => {
  const { isLoading } = useImagesContext();

  if (isLoading) {
    return (
      <div className={css.overlay}>
        <Watch />
      </div>
    );
  }
};

export default Loader;
