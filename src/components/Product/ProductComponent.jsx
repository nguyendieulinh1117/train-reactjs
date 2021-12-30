import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function ProductComponent() {
  return (
    <Col xs={12} sm={8} md={8} lg={6} xl={6}>
      <div className="product__section--product">
        <div className="product__section--product--img">
          <Link to={`/train-reactjs/product/1`}>
            <img src={"images/product1.png"} alt={""} />
          </Link>
        </div>
        <div className="product__section--product--content">
          <Link to={`/train-reactjs/product/1`}>
            <h2>Product 1</h2>
          </Link>
          <p>$20.00</p>
        </div>
      </div>
    </Col>
  );
}

export default ProductComponent;
