import { Radio, Row, Select } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortPrice } from "redux/Filter";
import { setFilter } from "redux/Product";
const { Option } = Select;
function Filter() {
  const [sort, setSort] = useState("default");
  const dispatch = useDispatch();
  const changePrice = (value) => {
    console.log(value);
    setSort(value);
    dispatch(setFilter());
    dispatch(sortPrice(value));
  };

  return (
    <div className="product__section--filter">
      <Row justify="space-between" align="middle">
        <div>
          <Select placeholder="PRICE" onChange={changePrice}>
            <Option value="asc">Low to High</Option>
            <Option value="desc">High to Low</Option>
          </Select>
        </div>
      </Row>
    </div>
  );
}

export default Filter;
