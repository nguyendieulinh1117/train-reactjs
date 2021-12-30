import React from "react";
import { ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

export default function SliderProductComp({ product }) {
  return (
    <div className="h_product-flex">
      <div className="h_product-flex_hover">
        <Link to={`/train-reactjs/product/${product._id}`}>
          <img src={product.image[0]} alt="img_product" />
        </Link>
        <div className="h_product-flex_sidebar">
          <div className="icon-cart icon_hidden">
            <ShoppingCartOutlined className="icon-card " />
          </div>
          <div className="icon_hidden">
            <ShoppingOutlined className="icon-card " />
          </div>
        </div>
      </div>
      <div className="h_product-flex_content">
        <p>{product.product_name}</p>
        <span>${product.price}</span>
      </div>
    </div>
  );
}
