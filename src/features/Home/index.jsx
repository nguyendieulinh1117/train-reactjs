import "assets/scss/button.scss";
import "assets/scss/Home/Home.scss";
import SliderProduct from "components/Home/SliderProduct";
import Banner from "components/Home/Banner";
import HeaderProduct from "components/Home/HeaderProduct";
import Button from "components/utils/Button";
import { selectProducts } from "../../redux/Product";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
export default function Home() {
  const { productList } = useSelector(selectProducts);
  const { loading } = useSelector(selectProducts);
  const showProductList = productList.filter((item) => item.status === true);
  return (
    <div id="Home">
      <Banner />
      <div className="product-wrapper container_home">
        <HeaderProduct />
        {loading === "loaded" ? (
          <SliderProduct products={showProductList} />
        ) : (
          <div className="spinner--loading">
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
            />
          </div>
        )}

        <div className="h_product-button">
          <Button title="all product >>" />
        </div>
      </div>
    </div>
  );
}
