// src/components/common/FeaturedProduct.js
import React from 'react';
import GasProductList from './GasProductList';


const FeaturedProduct = () => {
  return (
    <div className="featured-product">
      <img
        src="https://example.com/featured-gas.jpg"
        alt="Featured Gas"
        className="featured-product-image"
      />
      <div className="featured-product-info">
        <h3 className="featured-product-title">Featured Cooking Gas</h3>
        <p className="featured-product-description">High-quality cooking gas for all your culinary needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <GasProductList />
      </div>
    </div>
  );
}

export default FeaturedProduct;
