import PropTypes from 'prop-types';
import styles from '../Product.module.scss';
import OptionSize from './OptionSize';
import OptionColor from './OptionColor';
import Button from '../../Button/Button';

const ProductOptions = ({ sizes, colors, currentSize, currentColor, onSelectSize, onSelectColor }) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          <OptionSize
            sizes={sizes}
            currentSize={currentSize}
            onSelectSize={onSelectSize}
          />
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          <OptionColor
            colors={colors}
            currentColor={currentColor}
            onSelectColor={onSelectColor}
          />
        </ul>
      </div>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductOptions.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  onSelectSize: PropTypes.func.isRequired,
  onSelectColor: PropTypes.func.isRequired,
};

export default ProductOptions;
