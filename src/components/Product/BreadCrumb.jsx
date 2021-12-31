import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDefault } from "../../redux/Product";
import { setDefaultF } from "../../redux/Filter";
import "assets/scss/breadcrumb.scss";
function BreadCrumb({ page, item }) {
  const dispatch = useDispatch();
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={"/train-reactjs"}>Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link
          to={`/train-reactjs/${page.toLowerCase()}`}
          onClick={() => {
            dispatch(setDefault());
            dispatch(setDefaultF());
          }}
        >
          {page}
        </Link>
      </Breadcrumb.Item>
      {item && (
        <Breadcrumb.Item>
          <Link to={`/train-reactjs/product/${item._id}`}>
            {item.product_name}
          </Link>
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default BreadCrumb;
