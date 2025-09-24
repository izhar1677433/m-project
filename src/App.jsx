import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LostPassword from "./components/lostpassword";
import SentPassword from "./components/SentPassword";
import NotmatchPassword from "./components/NotmatchPassword";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lostpassword" element={<LostPassword />} />
          <Route path="/sentpassword" element={<SentPassword />} />
          <Route path="/notmatchpassword" element={<NotmatchPassword />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
