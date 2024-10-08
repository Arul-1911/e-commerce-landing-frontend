import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col, Skeleton, Modal } from "antd";
import axios from "axios";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  const fetchProducts = async (category = "") => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://e-commerce-landing-backend.onrender.com/api/products",
        {
          params: { category },
        }
      );
      setProducts(response.data);
      setLoading(false); // Stop loading once data is fetched
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category state
    fetchProducts(category); // Fetch products for the selected category
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product); // Store selected product details
    setIsModalVisible(true);
  };

  // Close the modal
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  // Style for selected category button
  const getButtonStyle = (category) => ({
    backgroundColor: selectedCategory === category ? "#003d29" : "white",
    color: selectedCategory === category ? "white" : "black",
    borderColor: selectedCategory === category ? "darkgreen" : "lightgray",
  });

  return (
    <div className="category-main-container">
      <div className="category-title-container">
        <h2>Top Categories for you!</h2>
      </div>
      <div className="category-title-btn-container">
        <Button
          onClick={() => handleCategoryClick("")}
          style={getButtonStyle("")}
        >
          All
        </Button>
        <Button
          onClick={() => handleCategoryClick("Clothing")}
          style={getButtonStyle("Clothing")}
        >
          Clothing
        </Button>
        <Button
          onClick={() => handleCategoryClick("Sports")}
          style={getButtonStyle("Sports")}
        >
          Sports
        </Button>
        <Button
          onClick={() => handleCategoryClick("Home Appliances")}
          style={getButtonStyle("Home Appliances")}
        >
          Home Appliances
        </Button>
        <Button
          onClick={() => handleCategoryClick("Electronics")}
          style={getButtonStyle("Electronics")}
        >
          Electronics
        </Button>
      </div>

      <div className="category-card-container">
        <Row gutter={[16, 16]}>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={8}>
                  <Skeleton.Image
                    active
                    // style={{ width: "400px", height: 200 }}
                    className="skeleton-img"
                  />
                  <Skeleton active paragraph={{ rows: 2 }} />
                </Col>
              ))
            : products.map((product) => (
                <Col
                  key={product._id}
                  xs={24} // Full width on extra small screens
                  sm={12} // Half width on small screens
                  md={8} // Third width on medium screens
                  lg={8} // Quarter width on large screens
                >
                  <Card
                    style={{
                      width: "100%",
                    }}
                    cover={
                      <img
                        alt={product.title}
                        src={product.image}
                        className="product-card-image"
                        onClick={() => handleCardClick(product)}
                      />
                    }
                    className="product-card"
                  >
                    <hr />
                    <Card.Meta title={product.title} />
                    <p>{`Price: $${product.price}`}</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </Card>
                </Col>
              ))}
        </Row>
      </div>

      {/* Modal to show product details */}
      {selectedProduct && (
        <Modal
          title={selectedProduct.title}
          visible={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
        >
          <div className="modal-main-container">
            <div className="modal-img-container">
              <img
                alt={selectedProduct.title}
                src={selectedProduct.image}
                className="modal-img"
              />
            </div>
            <div className="modal-desc-container">
              <p>
                <strong>Description:</strong> {selectedProduct.description}
              </p>
              <p>
                <strong>Price:</strong> ${selectedProduct.price}
              </p>
              <p>
                <strong>Category:</strong> {selectedProduct.category}
              </p>
              <p>
                <strong>Quantity:</strong> {selectedProduct.quantity}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Category;
