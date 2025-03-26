import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className={styles.navbar}>
      <div className={styles.nav_logo}>
        <img src={logo} className={styles.logo_pic} alt="logo" />
        <p>MEZISK</p>
      </div>

      <ul className={styles.nav_menu}>
        <li onClick={() => setMenu("shop")}>
          <Link style={{textDecoration: 'none'}} to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{textDecoration: 'none'}} to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{textDecoration: 'none'}} to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{textDecoration: 'none'}} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className={styles.nav_login_cart}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} className={styles.cart_icon_pic} alt="cart icon" />
        </Link>
        <div className={styles.nav_cart_count}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
