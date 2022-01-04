import "assets/scss/BaseLayout.scss";
import { Route, Routes } from "react-router-dom";
import { Cart, Detail, Home, NotFound, Product } from "features";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "redux/Product";
import { getAllCatalogs } from "redux/Catalog";

import AutoLogin from "api/userApi";

export default function BaseLayout() {
  const dispatch = useDispatch();
  const { autoLogin } = AutoLogin();
  function encodedUser(token) {
    const encodedBody = token.split(".")[1];

    const { isAdmin, id } = encodedBody
      ? JSON.parse(window.atob(encodedBody))
      : {};
    return { isAdmin: isAdmin, id: id };
  }
  useEffect(() => {
    let tokenUser = localStorage.getItem("token");
    const token = tokenUser && encodedUser(tokenUser);
    tokenUser && autoLogin(token.id);
  }, []);
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCatalogs());
  }, [dispatch]);
  return (
    <>
      <div className="root-base">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
