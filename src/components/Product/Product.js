import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import Button from '../Button/Button';
import ProductOptions from '../Product/ProductForm/ProductOptions.js';
import ProductImage from './ProductForm/ProductImage';

const Product = ({ title, basePrice, sizes, colors }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const selectedSize = sizes.find((size) => size.name === currentSize);
    if (selectedSize) {
      return basePrice + selectedSize.additionalPrice;
    }
    return basePrice;
  };

  const price = getPrice();

  const handleSelectSize = (size) => {
    setCurrentSize(size);
  };

  const handleSelectColor = (color) => {
    setCurrentColor(color);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Product Summary:');
    console.log('Name:', title);
    console.log('Price:', price);
    console.log('Selected Options:');
    console.log('Color:', currentColor);
    console.log('Size:', currentSize);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductOptions
          sizes={sizes}
          colors={colors}
          currentSize={currentSize}
          currentColor={currentColor}
          onSelectSize={handleSelectSize}
          onSelectColor={handleSelectColor}
        />
        <Button className={styles.button} type="submit" onClick={handleSubmit}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Product;
