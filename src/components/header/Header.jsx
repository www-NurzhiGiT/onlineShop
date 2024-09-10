import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../../assets/svg/SearchInput.svg";
import Like from "../../assets/image/like.png";
import Cart from "../../assets/image/cart.png";

import "./Header.scss";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n, t } = useTranslation();
  const [active, setActive] = useState("en");

  const handleChangeLanguage = (event) => {
    const lng = event.target;
    console.log(lng);
  };

  const changeLng = (language) => {
    i18n.changeLanguage(language);
    setActive(language);
  };

  return (
    <>
      <div className="top-header">
        <div className="flex">
          <p>
            {t(
              "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
            )}
            <strong>Shop Now</strong>
          </p>
          <select onChange={handleChangeLanguage}>
            <option
              className={active === "en" ? "active" : ""}
              onClick={() => changeLng("en")}
              value="EN"
            >
              English
            </option>
            <option
              className={active === "ru" ? "active" : ""}
              onClick={() => changeLng("ru")}
              value="RU"
            >
              Russian
            </option>
            <option
              className={active === "kg" ? "active" : ""}
              onClick={() => changeLng("kg")}
              value="KG"
            >
              Kyrgyz
            </option>
          </select>
        </div>
      </div>

      <header className="header container">
        <div className="logo">
          <h1 className="logo-h1">Exclusive</h1>
        </div>

        <div className="header-menu">
          <ul>
            <li>
              <Link to="/" className="header-li-Link">
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header-li-Link">
                {t("Contact")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="header-li-Link">
                {t("About")}
              </Link>
            </li>
            <li>
              <Link to="/register" className="header-li-Link">
                {t("Sign Up")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="header-hero">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <img src={Search} alt="Search" />
          </div>
        </div>
        <div className="header-like-user">
          <Link to="/likeit" className="li-like">
            <div className="like">
              <img src={Like} alt="like" />
              <span>0</span>
            </div>{" "}
          </Link>
          <Link to="/cart">
            <div className="cart">
              <img src={Cart} alt="cart" />
              <span>0</span>
            </div>
          </Link>
        </div>
      </header>
      <hr className="header-hr" />
    </>
  );
}

export default Header;
