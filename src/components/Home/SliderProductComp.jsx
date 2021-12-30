import React from "react";
import { ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

export default function SliderProductComp() {
  return (
    <div className="h_product-flex">
      <div className="h_product-flex_hover">
        <Link to={`/train-reactjs/product/1`}>
          <img src={"/train-reactjs/images/product1.png"} alt="img_product" />
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
        <p>Product1</p>
        <span>$20.00</span>
      </div>
    </div>
  );
}
