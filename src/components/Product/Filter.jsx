import { Radio, Row, Select } from "antd";
import React from "react";
import { useState } from "react";

const { Option } = Select;
function Filter() {
  const [sort, setSort] = useState("default");

  const changePrice = (value) => {
    console.log(value);
    setSort(value);
  };
  const changeSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  return (
    <div className="product__section--filter">
      <Row justify="space-between" align="middle">
        <div>
          <Radio.Group
            defaultValue="default"
            buttonStyle="solid"
            value={sort}
            onChange={changeSort}
          >
            <Radio.Button value="default">Default Sorting</Radio.Button>

            <Select placeholder="PRICE" onChange={changePrice}>
              <Option value="asc">Low to High</Option>
              <Option value="desc">High to Low</Option>
            </Select>
          </Radio.Group>
        </div>
      </Row>
    </div>
  );
}

export default Filter;
