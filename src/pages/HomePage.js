// src/pages/HomePage.js
import React from 'react';
import FeaturedProduct from '../components/common/FeaturedProduct';  // You'll need to create this component
import ProductList from '../components/common/GasProductList';  // You'll need to create this component

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Gas Delivery</h1>
        <p>Your one-stop solution for hassle-free gas delivery.</p>
      </header>

      <section id="featured">
        <h2>Featured Product</h2>
        <FeaturedProduct /> {/* FeaturedProduct component goes here */}
      </section>

      <section id="products">
        <h2>Explore Our Products</h2>
        <ProductList /> {/* ProductList component goes here */}
      </section>
    </div>
  );
}

export default HomePage;
