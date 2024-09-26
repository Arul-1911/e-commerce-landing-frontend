import React from "react";
import { FiPhone } from "react-icons/fi";

const TopBar = () => {
  return (
    <>
      <header className="top-bar-main-container">
        <div className="top-bar-phone-container">
          <div className="phone-logo">
            <FiPhone />
          </div>
          <div className="phone-number">+001234567890</div>
        </div>
        <div className="top-bar-shop-now-container">
          <div className="offer-text">Get 50% Off on Selected Items</div>
          <div className="slash-text">|</div>
          <div className="shop-now-text">Shop Now</div>
        </div>
        <div className="top-bar-location-container">
          <div className="language-text">English</div>
          <div className="location-text">Location</div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
