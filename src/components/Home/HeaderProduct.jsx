import React from "react";
import "assets/scss/Home/HeaderProduct.scss";
import { Col, Row } from "antd";
function HeaderProduct() {
  return (
    <Row className="h_product">
      <Col className="h_product-title" xs={24} sm={10} md={8}>
        <h1>Choose your product from our collection</h1>
      </Col>
    </Row>
  );
}

export default HeaderProduct;
