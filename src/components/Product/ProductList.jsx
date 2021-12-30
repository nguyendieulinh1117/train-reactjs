import { Row } from "antd";
import React from "react";

import ProductComponent from "./ProductComponent";

function ProductList({ products }) {
  return (
    <div className="product__section--list">
      <Row gutter={24}>
        {products &&
          products.length > 0 &&
          products.map((item, index) => (
            <ProductComponent key={index} product={item} />
          ))}
      </Row>
    </div>
  );
}

export default ProductList;
