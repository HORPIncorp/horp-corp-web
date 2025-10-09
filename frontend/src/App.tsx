import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  
  return (
    <Router>
      <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>&#9776;</button>
        <a href="index.html">HORP Corp Inc </a>
      </div>
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </header>

    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li><a href="index.html">Pants</a>
        </li>
        <li><a href="index.html">Shirts</a>
        </li>
      </ul>
    </aside>
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Products />} />
        <Route path="orders" element={<Orders />}></Route>
        <Route path="/order/:id" element={<OrderDetail />}></Route>
      </Routes>
    </main>
    <footer>© 2021 HORP Corp Inc</footer>
  </div>
  </Router>
    );
  }

  
  
  export default App;