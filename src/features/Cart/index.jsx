import "assets/scss/cart.scss";
import CartItem from "components/Cart/CartItem";
import CartTotal from "components/Cart/CartTotal";
import BreadCrumb from "components/Product/BreadCrumb";

import { useSelector } from "react-redux";
import { selectProducts } from "redux/Product";

export default function Cart() {
  const { productList } = useSelector(selectProducts);
  const showProduct = productList.filter((item) => item.status === true);
  return (
    <div id="cart">
      <BreadCrumb className="breadcrumb" page="Cart" />
      <div style={{ marginTop: "15px", border: "1px solid #bab3b3" }}>
        <CartItem />
      </div>

      <CartTotal />
    </div>
  );
}
