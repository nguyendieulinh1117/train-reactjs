import { Row } from "antd";
import React from "react";

import ProductComponent from "./ProductComponent";

function ProductList() {
  return (
    <div className="product__section--list">
      <Row gutter={24}>
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </Row>
    </div>
  );
}

export default ProductList;
