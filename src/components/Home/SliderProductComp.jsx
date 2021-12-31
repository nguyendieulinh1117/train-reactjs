import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "redux/Cart";

export default function SliderProductComp({ product }) {
  const dispatch = useDispatch();
  const handleToCart = () => {
    dispatch(addCart({ product, quantity: 1, pickColor: product.color[0] }));
    toast.success(`${product.product_name} added to cart`, {
      position: "bottom-left",
      autoClose: 2000,
    });
  };
  return (
    <div className="h_product-flex">
      <div className="h_product-flex_hover">
        <Link to={`/train-reactjs/product/${product._id}`}>
          <img src={product.image[0]} alt="img_product" />
        </Link>
        <div className="h_product-flex_sidebar">
          {product.inventory > 0 ? (
            <div className="icon-cart icon_hidden" onClick={handleToCart}>
              <ShoppingCartOutlined className="icon-card " />
            </div>
          ) : (
            <div className="icon-cart icon_hidden">Sold out</div>
          )}
        </div>
      </div>
      <div className="h_product-flex_content">
        <p>{product.product_name}</p>
        <span>${product.price}</span>
      </div>
    </div>
  );
}
