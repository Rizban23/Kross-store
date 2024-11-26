import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import ShopCart from "./pages/ShopCart";
import Profile from "./pages/Profile";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  // Состояние для хранения товаров в корзине
  const [cart, setCart] = useState([]);

  // Функция для добавления товара в корзину
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={<Home handleAddToCart={handleAddToCart} />} // Передаем функцию добавления
          />
          <Route
            path="/shopcart"
            element={<ShopCart cart={cart} />} // Передаем корзину в компонент
          />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
