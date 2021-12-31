import { Layout } from "antd";
import Header from "components/Header";
import "assets/scss/BaseLayout.scss";
import { Route, Routes } from "react-router-dom";
import { Cart, Detail, Home, Product } from "features";
import BaseFooter from "components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "redux/Product";
import { getAllCatalogs } from "redux/Catalog";
const { Content } = Layout;

export default function BaseLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCatalogs());
  }, [dispatch]);
  return (
    <div className="root-base">
      <Layout>
        <Header />
        <Content>
          <div className="head">
            <Routes>
              <Route path="/train-reactjs" element={<Home />} />
              <Route path="/train-reactjs/product" element={<Product />} />
              <Route path="/train-reactjs/product/:id" element={<Detail />} />
              <Route path="/train-reactjs/cart" element={<Cart />} />
            </Routes>
          </div>
        </Content>
        <BaseFooter />
      </Layout>
    </div>
  );
}
