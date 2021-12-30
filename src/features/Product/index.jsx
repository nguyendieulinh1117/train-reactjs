import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Spin } from "antd";
import "assets/scss/product.scss";
import BreadCrumb from "components/Product/BreadCrumb";
import Collection from "components/Product/Collection";
import Filter from "components/Product/Filter";
import PaginationComponent from "components/Product/PaginationComponent";
import ProductList from "components/Product/ProductList";
import SideComponent from "components/Product/SideComponent";
import { useSelector } from "react-redux";
import { selectProducts } from "redux/Product";
export default function Product() {
  const { productList } = useSelector(selectProducts);
  const { loading } = useSelector(selectProducts);
  return (
    <div className="product">
      <BreadCrumb page="Product" />

      <Collection />
      <div className="product__section">
        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <SideComponent />
          </Col>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Filter />

            <>
              {loading === "loaded" ? (
                <ProductList products={productList} />
              ) : (
                <div className="spinner--loading">
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 50 }} spin />
                    }
                  />
                </div>
              )}
              <PaginationComponent total={10} currentPage={1} pageSize={3} />
            </>
          </Col>
        </Row>
      </div>
    </div>
  );
}
