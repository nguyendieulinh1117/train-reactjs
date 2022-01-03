import { Col, Row } from "antd";
import React from "react";

function Collection() {
  return (
    <section className="product__collections">
      <Row justify="center" align="middle" gutter={24}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="product__collections--item">
            <img
              src={"/train-reactjs/images/product-banner-1.png"}
              alt="banner1"
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="product__collections--item">
            <img
              src={"/train-reactjs/images/product-banner-2.png"}
              alt="banner1"
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="product__collections--item">
            <img
              src={"/train-reactjs/images/product-banner-3.png"}
              alt="banner1"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Collection;
