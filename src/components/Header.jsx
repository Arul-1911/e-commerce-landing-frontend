import React from "react";
import { Button, Input, Select, Space } from "antd";
import { HiOutlineSearch } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-main-container">
          <div className="shopcart-img-and-text-container">
            <img
              src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
              alt=""
              className="img-logo"
            />
            <p className="deals-text">Deals</p>
            <p className="whats-new-text">What's New</p>
            <p className="delivery-text">Delivery</p>
          </div>
          <div className="header-search-container">
            <Space.Compact
              style={{
                width: "85%",
              }}
            >
              <Input
                defaultValue=""
                placeholder="Search Product"
                style={{ borderRadius: "20px 0px 0px 20px" }}
              />
              <Button className="search-bar-btn">
                <HiOutlineSearch />
              </Button>
            </Space.Compact>
          </div>
          <div className="header-account-cart-container">
            <div className="header-account-text">
              <div className="account-logo">
                <IoPersonAddOutline />
              </div>
              <div className="account-text">Account</div>
            </div>
            <div className="header-cart-container">
              <div className="cart-logo">
                <IoCartOutline />
              </div>
              <div className="cart-text">Cart</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
