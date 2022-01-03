import { Radio, Row, Select } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortPrice } from "redux/Filter";
import { setFilter } from "redux/Product";
import { useNavigate } from "react-router-dom";
import query from "query-string";

const { Option } = Select;
function Filter() {
  const [sort, setSort] = useState("default");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let parsed = query.parse(window.location.search);
  const options = useSelector((state) => state.filterState);

  const changePrice = (value) => {
    console.log(value);
    setSort(value);
    dispatch(setFilter());
    dispatch(sortPrice(value));
    parsed.price = true;
    parsed.order = value;
    navigate(`/train-reactjs/product/?${query.stringify(parsed)}`);
  };

  return (
    <div className="product__section--filter">
      <Row justify="space-between" align="middle">
        <div>
          <Select
            defaultValue=""
            value={options.order}
            placeholder="PRICE"
            onChange={changePrice}
          >
            <Option value="asc">Low to High</Option>
            <Option value="desc">High to Low</Option>
          </Select>
        </div>
      </Row>
    </div>
  );
}

export default Filter;
