import React from "react";
import cashback_img from "../assets/images/cash_back_img.png";
import { what_we_offer } from "../assets/constants/data";
import { Col, Row, Card } from "antd";

const WhatWeOffer = () => {
  return (
    <>
      <div className="what-we-offer-main-container">
        <h2 style={{ margin: "10px" }}>What We Offer</h2>
        <div className="cashback-img-container">
          <img
            src={cashback_img}
            alt="cashback Image"
            className="cashback-img"
          />
        </div>
        <div className="what-we-offer-cards-container">
          <Row gutter={[19, 19]}>
            {what_we_offer.map((product) => (
              <Col key={product.id} xs={24} s={24} md={8} lg={8}>
                <div className="what-we-offer-card">
                  <div className="whate-we-offer-card-content-container">
                    <div className="offer-card-title">{product?.title}</div>
                    <div className="offer-card-sub-title">
                      {product?.subtitle}
                    </div>
                  </div>
                  <div className="what-we-offer-card-img-container">
                    <img
                      src={product?.img}
                      alt=""
                      className="what-we-offer-card-img"
                    />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
