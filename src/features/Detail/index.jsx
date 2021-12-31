import {
  CheckCircleFilled,
  FacebookFilled,
  InstagramFilled,
  LoadingOutlined,
  MessageFilled,
  ShoppingCartOutlined,
  SkypeFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Col, InputNumber, Layout, Radio, Row, Spin } from "antd";

import "assets/scss/detail.scss";
import BreadCrumb from "components/Product/BreadCrumb";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct, selectProducts } from "redux/Product";
import { addCart } from "redux/Cart";
import Header from "components/Header";
import BaseFooter from "components/Footer";
const { Content } = Layout;
export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(selectProducts);
  const { loading } = useSelector(selectProducts);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const increaseQty = () => {
    setQty(qty + 1);
  };
  const decreaseQty = () => {
    setQty(qty - 1);
  };
  const handleAddToCart = () => {
    if (color === null) {
      toast.warning("You've not chosen color", {
        position: "bottom-left",
        autoClose: 2000,
      });
    } else {
      dispatch(addCart({ product, quantity: qty, pickColor: color }));
    }
  };

  return (
    <Layout>
      <Header />
      <Content>
        <div className="head">
          <div className="detail">
            {loading === "loaded" ? (
              <>
                <BreadCrumb page="product" item={product} />

                <Row className="pro">
                  {/* hinh anh san pham */}
                  <Col className="avtpro" xs={24} sm={12}>
                    <img src={product.image && product.image[0]} alt="" />
                  </Col>
                  {/* thong tin san pham */}
                  <Col className="infor" xs={24} sm={12}>
                    <div className="Category">
                      <div className="hrCategory"></div>
                      <p className="succulent">{product.product_name}</p>
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
                          {product.color &&
                            product.color.map((item, index) => (
                              <Radio.Button
                                className="color__item"
                                key={index}
                                value={item}
                                style={{ backgroundColor: item }}
                              ></Radio.Button>
                            ))}
                        </Radio.Group>
                      </div>
                      <span className="textQuantyti">quantity</span>
                      <div className="quantity">
                        {qty > 1 ? (
                          <button onClick={decreaseQty} className="btn1">
                            -
                          </button>
                        ) : (
                          <button disabled className="btn1">
                            -
                          </button>
                        )}

                        <InputNumber
                          defaultValue={qty}
                          value={qty}
                          min={1}
                          onChange={(e) => {
                            setQty(e);
                          }}
                        />

                        {qty < product.inventory ? (
                          <button onClick={increaseQty} className="btn3">
                            +
                          </button>
                        ) : (
                          <button disabled className="btn3">
                            +
                          </button>
                        )}
                      </div>
                    </div>
                    {/* chia sẻ  */}
                    <div className="stock">
                      <p>
                        {" "}
                        {<CheckCircleFilled className="iconV" />}
                        {product.inventory} in stock
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
                        {product.inventory > 0 ? (
                          <button className="btn" onClick={handleAddToCart}>
                            {" "}
                            <ShoppingCartOutlined className="Cart" />
                            ADD TO CART
                          </button>
                        ) : (
                          <button className="btn">SOLD OUT</button>
                        )}
                      </div>
                    </div>
                  </Col>
                  {/* thong tin san pham  */}
                  <Col className="textD" xs={24}>
                    <div className="hrtext"></div>
                    <span>{product.description}</span>
                  </Col>
                </Row>
              </>
            ) : loading === "error" ? (
              navigate("/train-reactjs")
            ) : (
              <div className="spinner--loading">
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
                />
              </div>
            )}
          </div>
        </div>
      </Content>
      <BaseFooter />
    </Layout>
  );
}
