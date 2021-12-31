import "assets/scss/button.scss";
import "assets/scss/Home/Home.scss";
import SliderProduct from "components/Home/SliderProduct";
import Banner from "components/Home/Banner";
import HeaderProduct from "components/Home/HeaderProduct";
import Button from "components/utils/Button";
import { selectProducts } from "../../redux/Product";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Layout, Spin } from "antd";
import Header from "components/Header";
import BaseFooter from "components/Footer";
const { Content } = Layout;

export default function Home() {
  const { productList } = useSelector(selectProducts);
  const { loading } = useSelector(selectProducts);
  const showProductList = productList.filter((item) => item.status === true);
  const navigate = useNavigate();
  return (
    <Layout>
      <Header />
      <Content>
        <div className="head">
          <div id="Home">
            <Banner />
            <div className="product-wrapper container_home">
              <HeaderProduct />
              {loading === "loaded" ? (
                <SliderProduct products={showProductList} />
              ) : (
                <div className="spinner--loading">
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 50 }} spin />
                    }
                  />
                </div>
              )}

              <div
                className="h_product-button"
                onClick={() => navigate("/train-reactjs/product")}
              >
                <Button title="all product >>" />
              </div>
            </div>
          </div>
        </div>
      </Content>
      <BaseFooter />
    </Layout>
  );
}
