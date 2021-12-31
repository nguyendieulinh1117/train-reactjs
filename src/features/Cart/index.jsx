import { Layout } from "antd";
import "assets/scss/cart.scss";
import CartItem from "components/Cart/CartItem";
import CartTotal from "components/Cart/CartTotal";
import BaseFooter from "components/Footer";
import Header from "components/Header";
import BreadCrumb from "components/Product/BreadCrumb";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;
export default function Cart() {
  const navigate = useNavigate();
  return (
    <>
      {localStorage.getItem("token") ? (
        <Layout>
          <Header />
          <Content>
            <div className="head">
              <div id="cart">
                <BreadCrumb className="breadcrumb" page="Cart" />
                <div style={{ marginTop: "15px", border: "1px solid #bab3b3" }}>
                  <CartItem />
                </div>

                <CartTotal />
              </div>
            </div>
          </Content>
          <BaseFooter />
        </Layout>
      ) : (
        navigate("/login")
      )}
    </>
  );
}
