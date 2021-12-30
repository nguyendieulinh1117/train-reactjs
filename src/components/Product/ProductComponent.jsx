import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function ProductComponent({ product }) {
  return (
    <Col xs={12} sm={8} md={8} lg={6} xl={6}>
      <div className="product__section--product">
        <div className="product__section--product--img">
          <Link to={`/train-reactjs/product/${product._id}`}>
            <img src={product.image[0]} alt={""} />
          </Link>
        </div>
        <div className="product__section--product--content">
          <Link to={`/train-reactjs/product/${product._id}`}>
            <h2>{product.product_name}</h2>
          </Link>
          <p>${product.price}</p>
        </div>
      </div>
    </Col>
  );
}

export default ProductComponent;
