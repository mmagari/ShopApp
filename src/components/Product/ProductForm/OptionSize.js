import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '../Product.module.scss';

const OptionSize = ({ sizes, currentSize, onSelectSize }) => {
  return (
    <>
      {sizes.map((size) => (
        <li key={size.name}>
          <button
            type="button"
            className={clsx({ [styles.active]: currentSize === size.name })}
            onClick={() => onSelectSize(size.name)}
          >
            {size.name}
          </button>
        </li>
      ))}
    </>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  currentSize: PropTypes.string.isRequired,
  onSelectSize: PropTypes.func.isRequired,
};

export default OptionSize;
