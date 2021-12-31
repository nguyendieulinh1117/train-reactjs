import { Anchor, Badge, Col, Dropdown, Layout, Menu, Row } from "antd";

import React, { useEffect, useState } from "react";

import { Link as LinkRoute } from "react-router-dom";
import { useDispatch } from "react-redux";
import "assets/scss/header.scss";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { setDefault } from "../../redux/Product";
import { setDefaultF } from "redux/Filter";
import { useSelector } from "react-redux";
import { selectCarts } from "redux/Cart";
import { logout, selectUser } from "redux/User";
function Header() {
  const { Header } = Layout;
  const { cartList } = useSelector(selectCarts);
  const [show, handleShow] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector(selectUser);
  const transitionNavBar = () => {
    if (window.scrollY > 10) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => dispatch(logout())}>
        Logout
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  });
  return (
    <Header
      className={show ? "bg__change" : ""}
      style={
        show
          ? { position: "fixed", zIndex: 999, width: "100%" }
          : { width: "100%" }
      }
    >
      <Row justify="space-between" align="middle">
        <Col className="gutter-row" xs={16} sm={7} md={6} xl={6}>
          <div className="logo">
            <LinkRoute to={"/train-reactjs"}>
              <img src="/train-reactjs/logo.png" alt="tree-world-logo" />
            </LinkRoute>
          </div>
        </Col>
        <Col className="gutter-row" xs={8} sm={17} md={18} xl={18}>
          <div className="mobileHidden">
            <Anchor affix={false}>
              <div>
                <LinkRoute
                  to={"/train-reactjs"}
                  onClick={() => {
                    dispatch(setDefault());
                    dispatch(setDefaultF());
                  }}
                >
                  Home
                </LinkRoute>
              </div>

              <div>
                <LinkRoute
                  to={"/train-reactjs/product"}
                  onClick={() => {
                    dispatch(setDefault());
                    dispatch(setDefaultF());
                  }}
                >
                  Product
                </LinkRoute>
                <div
                  className={
                    show
                      ? "dropdown__menu--list bg__change"
                      : "dropdown__menu--list"
                  }
                ></div>
              </div>

              <div>
                <LinkRoute to={"/train-reactjs/cart"}>
                  <Badge
                    count={
                      cartList.length === 0
                        ? 0
                        : cartList &&
                          cartList.reduce(
                            (prev, current) => prev + current.quantity,
                            0
                          )
                    }
                  >
                    <Avatar
                      style={{
                        width: "40px",
                        height: "40px",

                        background: "transparent",
                        color: "black",
                        fontSize: "24px",
                      }}
                      icon={<ShoppingCartOutlined />}
                    />
                  </Badge>
                </LinkRoute>
              </div>
              <div>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                      width: "40px",
                      height: "40px",
                      lineHeight: "40px",
                      fontSize: "20px",
                      margin: "0 18px",
                      cursor: "pointer",
                    }}
                    icon={<UserOutlined />}
                  ></Avatar>
                </Dropdown>

                {currentUser && currentUser.username}
              </div>
            </Anchor>
          </div>
        </Col>
      </Row>
    </Header>
  );
}

export default Header;
