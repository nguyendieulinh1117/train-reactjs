import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Spin } from "antd";
import "assets/scss/product.scss";
import BreadCrumb from "components/Product/BreadCrumb";
import Collection from "components/Product/Collection";
import Filter from "components/Product/Filter";
import PaginationComponent from "components/Product/PaginationComponent";
import ProductList from "components/Product/ProductList";
import SideComponent from "components/Product/SideComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterProduct, selectProducts } from "redux/Product";
export default function Product() {
  const { productList } = useSelector(selectProducts);
  const { filterProductList } = useSelector(selectProducts);

  const { loading } = useSelector(selectProducts);
  const showProductList = productList.filter((item) => item.status === true);
  const showFilterProductList = filterProductList.filter(
    (item) => item.status === true
  );

  const dispatch = useDispatch();
  //filter
  const options = useSelector((state) => state.filterState);
  const { filterStatus } = useSelector((state) => state.productState);
  console.log(options, filterStatus);
  useEffect(() => {
    dispatch(filterProduct(options));
  }, [dispatch, options]);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const indexOfLast = currentPage * pageSize;
  const indexOfFirst = indexOfLast - pageSize;
  const currentProduct = showProductList.slice(indexOfFirst, indexOfLast);
  const currentFilterProduct = showFilterProductList.slice(
    indexOfFirst,
    indexOfLast
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
                <>
                  <ProductList
                    products={
                      filterStatus ? currentFilterProduct : currentProduct
                    }
                  />
                  <PaginationComponent
                    total={
                      filterStatus
                        ? showFilterProductList.length
                        : showProductList.length
                    }
                    currentPage={currentPage}
                    pageSize={pageSize}
                    paginate={paginate}
                  />
                </>
              ) : (
                <div className="spinner--loading">
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 50 }} spin />
                    }
                  />
                </div>
              )}
            </>
          </Col>
        </Row>
      </div>
    </div>
  );
}
