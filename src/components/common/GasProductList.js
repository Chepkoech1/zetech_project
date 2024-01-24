// src/components/common/GasProductList.js
import React from 'react';


const GasProductList = () => {
  const products = [
    { id: 1, title: 'Gas Cylinder', description: 'Standard 12kg cooking gas cylinder', imageUrl: 'https://example.com/gas-cylinder.jpg', price: 49.99 },
    { id: 2, title: 'Gas Cartridge', description: 'Portable gas cartridge for camping', imageUrl: 'https://example.com/gas-cartridge.jpg', price: 19.99 },
    { id: 3, title: 'Cooking Gas Refill', description: 'Refill for your cooking gas cylinder', imageUrl: 'https://example.com/gas-refill.jpg', price: 29.99 },
  ];

  return (
    <div className="gas-product-list">
      {products.map(product => (
        <div key={product.id} className="gas-product-list-item">
          <img src={product.imageUrl} alt={product.title} className="gas-product-list-item-image" />
          <div className="gas-product-list-item-info">
            <h4 className="gas-product-list-item-title">{product.title}</h4>
            <p className="gas-product-list-item-description">{product.description}</p>
            <p className="gas-product-list-item-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GasProductList;
