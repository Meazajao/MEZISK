import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";

import men_banner from "./Assets/banner_mens.png";
import woman_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="mens" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={woman_banner} category="womens" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kids" />}
          />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
