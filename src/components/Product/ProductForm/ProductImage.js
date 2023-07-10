import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Product.module.scss';

const ProductImage = ({ title, currentColor }) => {
  const getImageFileName = (title) => {
    const lowercasedTitle = title.toLowerCase();
    if (lowercasedTitle.includes('kodilla')) {
      return 'shirt-kodilla';
    } else if (lowercasedTitle.includes('react')) {
      return 'shirt-react';
    }
  };

  const imageFileName = getImageFileName(title);
  const imageUrl = `${process.env.PUBLIC_URL}/images/products/${imageFileName}--${currentColor}.jpg`;
  const altText = `${title} - ${currentColor}`;

  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} alt={altText} src={imageUrl} />
    </div>
  );
};

ProductImage.propTypes = {
  title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductImage;
