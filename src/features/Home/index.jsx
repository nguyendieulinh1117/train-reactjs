import "assets/scss/button.scss";
import "assets/scss/Home/Home.scss";
import SliderProduct from "components/Home/SliderProduct";
import Banner from "components/Home/Banner";
import HeaderProduct from "components/Home/HeaderProduct";
import Button from "components/utils/Button";
export default function Home() {
  return (
    <div id="Home">
      <Banner />
      <div className="product-wrapper container_home">
        <HeaderProduct />

        <SliderProduct />

        <div className="h_product-button">
          <Button title="all product >>" />
        </div>
      </div>
    </div>
  );
}
