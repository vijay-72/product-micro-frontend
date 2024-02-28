import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/products/all`
      );
      console.log(response.data);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <h1 className="text-center mt-5 mb-4">Product Catalog</h1>
      <Row className="justify-content-center">
        {products.map((productItem) => (
          <Col xs={12} sm={6} md={4} lg={3} key={productItem.id}>
            <ProductCard productItem={productItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Product;
