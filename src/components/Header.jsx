import React, { useState,useEffect } from "react";
import LogoDark from "../assets/logod.svg";
import LogoLight from "../assets/Logol.svg";
import CartDark from "../assets/cartd.svg";
import CartLight from "../assets/cartl.svg";
import ProfileDark from "../assets/prod.svg";
import ProfileLight from "../assets/prol.svg";


const Header = () => {
  // simple toggle state
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark"); // apply dark to <html>
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      className={` w-full h-[100px] flex justify-between items-center p-4  shadow-md ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Left Logo */}
      <img src={darkMode ? LogoDark : LogoLight} alt="Logo" className="pl-[220px] " />

      {/* Menu Links */}
      <div className="flex space-x-6 m-auto font-manrope text-lg">
        <a href="#">Shop</a>
        <a href="#">Services</a>
        <a href="#">FAQ</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4 pr-[200px] text-2xl">
        <span>R100,00</span>
        <img
          src={darkMode ? CartDark : CartLight}
          alt="Cart"
          className="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <img
          src={darkMode ? ProfileDark : ProfileLight}
          alt="Profile"
          className="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Dark/Light Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        
      >
        {darkMode ? "☀️ " : "🌙 "}
      </button>
    </nav>
  );
};

export default Header;

