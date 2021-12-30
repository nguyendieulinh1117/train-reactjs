import {
  CheckCircleFilled,
  FacebookFilled,
  InstagramFilled,
  MessageFilled,
  ShoppingCartOutlined,
  SkypeFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Col, Radio, Row } from "antd";

import "assets/scss/detail.scss";
import BreadCrumb from "components/Product/BreadCrumb";

import { useState } from "react";

export default function Detail() {
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(null);

  const increaseQty = () => {
    setQty(qty + 1);
  };
  const decreaseQty = () => {
    setQty(qty - 1);
  };
  const handleAddToCart = () => {};

  return (
    <div className="detail">
      <BreadCrumb page="product" />

      <Row className="pro">
        {/* hinh anh san pham */}
        <Col className="avtpro" xs={24} sm={12}>
          <img src={"../images/product1.png"} alt="" />
        </Col>
        {/* thong tin san pham */}
        <Col className="infor" xs={24} sm={12}>
          <div className="Category">
            <div className="hrCategory"></div>
            <p className="succulent">Product 123</p>
          </div>
          <div className="New_collection">
            <div className="newnewCollect">
              <div className="hrNewCollect"></div>
            </div>
            <p className="price">
              $<span>20.00</span>
            </p>
          </div>
          {/* màu số lượng  */}
          <div className="color_quantity">
            <div className="color">
              <p>color</p>
              <Radio.Group
                defaultValue={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              >
                <Radio.Button
                  className="color__item"
                  style={{ backgroundColor: "#fff" }}
                ></Radio.Button>
              </Radio.Group>
            </div>
            <span className="textQuantyti">quantity</span>
            <div className="quantity">
              <button onClick={decreaseQty} className="btn1">
                -
              </button>

              <h3 className="btn2">{qty}</h3>

              <button onClick={increaseQty} className="btn3">
                +
              </button>
            </div>
          </div>
          {/* chia sẻ  */}
          <div className="stock">
            <p>
              {" "}
              {<CheckCircleFilled className="iconV" />}
              50 in stock
            </p>
            <p>
              SHARE NOW: <MessageFilled className="icon" />{" "}
              <FacebookFilled className="icon" />{" "}
              <InstagramFilled className="icon" />{" "}
              <SkypeFilled className="icon" />{" "}
              <TwitterCircleFilled className="icon" />{" "}
            </p>
          </div>
          <div className="footerInfor">
            <div>
              <button className="btn" onClick={handleAddToCart}>
                {" "}
                <ShoppingCartOutlined className="Cart" />
                ADD TO CART
              </button>
            </div>
          </div>
        </Col>
        {/* thong tin san pham  */}
        <Col className="textD" xs={24}>
          <div className="hrtext"></div>
          <span>hihi</span>
        </Col>
      </Row>
    </div>
  );
}
