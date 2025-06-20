import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      
      <Link to="/" className={styles.nav_logo} onClick={() => setMenu("shop")}>
        <img src={logo} alt="logo" />
        <p>MEZISK</p>
      </Link>

    
      <div
        className={`${styles.burger} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>

    
      <ul className={`${styles.nav_menu} ${isOpen ? styles.nav_menu_visible : ''}`}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

     
      <div className={styles.nav_login_cart}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className={styles.nav_cart_count}>0</div>
      </div>
    </nav>
  );
};

export default Navbar;
