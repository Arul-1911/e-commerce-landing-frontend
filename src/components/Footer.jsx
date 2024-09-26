import React from "react";
import { Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <div className="footer-section">
              <h3>About Us</h3>
              <p>
                We are a leading e-commerce platform providing top-quality
                products across multiple categories, including electronics,
                fashion, home appliances, and more.
              </p>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>
                <MailOutlined /> support@example.com
              </p>
              <p>
                <PhoneOutlined /> +1 234 567 890
              </p>
              <div className="footer-social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookOutlined />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterOutlined />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramOutlined />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your E-commerce Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
