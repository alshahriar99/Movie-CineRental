import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import moon from "../assets/icons/moon.svg";
import adToCard from "../assets/shopping-cart.svg";
import ring from "../assets/ring.svg";
import Sun from "../assets/icons/sun.svg";

import Card from "./card";
import { MovieContext, ThemeContext } from "../context/Context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cardData } = useContext(MovieContext);
  const { theme, setTheme } = useContext(ThemeContext);




  console.log(cardData);
  return (
    <header>
      {showCart && <Card onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setTheme(theme => !theme)}
            >
              <img src={ theme? Sun: moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCart(true)}
            >
              {cardData.length > 0 && (
                <span className="absolute top-[-12px] right-[-13px] bg-green-500 text-white text-xs rounded-full px-2 py-1">
                  {cardData.length}
                </span>
              )}
              <img src={adToCard} width="24" height="24" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
