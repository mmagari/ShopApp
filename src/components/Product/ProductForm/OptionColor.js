import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '../Product.module.scss';

const OptionColor = ({ colors, currentColor, onSelectColor }) => {
  return (
    <>
      {colors.map((color) => (
        <li key={color}>
          <button
            type="button"
            className={clsx(styles.color, styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`], {
              [styles.active]: currentColor === color,
            })}
            onClick={() => onSelectColor(color)}
          />
        </li>
      ))}
    </>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  onSelectColor: PropTypes.func.isRequired,
};

export default OptionColor;
