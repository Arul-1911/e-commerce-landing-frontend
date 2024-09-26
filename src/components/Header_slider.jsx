import React from "react";
import header_slider_img from "../assets/images/header-slider.jpg";

const HeaderSlider = () => {
  return (
    <>
      <div className="header-slider-container">
        <img src={header_slider_img} alt="" className="header-slider-img" />
      </div>
    </>
  );
};

export default HeaderSlider;
