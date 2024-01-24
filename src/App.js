import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
// import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/CheckoutPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import FeaturedProduct from './components/common/FeaturedProduct';
import GasProductList from './components/common/GasProductList';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Change from Switch to Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/product/:id" element={<GasProductList />}></Route>
          <Route path="/featured" element={<FeaturedProduct />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;