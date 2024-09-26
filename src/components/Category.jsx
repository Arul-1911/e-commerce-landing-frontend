import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "antd";
import axios from "axios";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://e-commerce-landing-backend.onrender.com/api/products"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Call async function inside useEffect
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="category-main-container">
      <div className="category-title-container">
        <h2>Top Categories for you!</h2>
      </div>
      <div className="category-title-btn-container">
        <Button>All</Button>
        <Button>Clothing</Button>
        <Button>Sports</Button>
        <Button>Home Appliances</Button>
        <Button>Electronics</Button>
      </div>
      <div className="category-card-container">
        <Row gutter={[16, 16]}>
          {products.map((product) => (
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
                  // backgroundColor: "gray",
                }}
                cover={
                  <img
                    alt={product.title}
                    src={product.image}
                    className="product-card-image"
                  />
                }
                loading={loading}
              >
                <hr />
                <Card.Meta
                  title={product.title}
                  // description={`Price: $${product.price}`}
                />
                <p>{`Price: $${product.price}`}</p>
                <Button>Add to Cart</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Category;
