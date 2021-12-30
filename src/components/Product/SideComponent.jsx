import { FilterOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Radio, Row } from "antd";
import React from "react";

import { useState } from "react";

const { Sider } = Layout;

function SideComponent() {
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const [err, setErr] = useState(false);
  const handleSubmit = () => {
    console.log(priceMin, priceMax);
    if (
      Number(priceMin) > Number(priceMax) ||
      Number(priceMin) < 0 ||
      Number(priceMax) < 0
    ) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  return (
    <div className="tabletHidden">
      <div className="product__section--title">
        <h3>
          search filter <FilterOutlined />
        </h3>
      </div>
      <Sider className="site-layout-background">
        <h3 className="side__title">Categories</h3>
        <Radio.Group defaultValue="Catus" buttonStyle="solid">
          <Radio.Button value={`Catus`}>Catus</Radio.Button>
          <Radio.Button value={`Plants`}>Plants</Radio.Button>
        </Radio.Group>
        <h3 className="side__title">Price range</h3>
        <div className="form__price--range">
          <Row>
            <Input
              type="number"
              placeholder="From"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />{" "}
            <span style={{ padding: "0 5px" }}>-</span>
            <Input
              type="number"
              placeholder="To"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </Row>
          {err ? (
            <p
              style={{ fontStyle: "italic", color: "red", paddingTop: "10px" }}
            >
              Please fill in the appropriate price
            </p>
          ) : (
            <></>
          )}
          <Row align="middle">
            <Button onClick={handleSubmit}>Apply</Button>
          </Row>
        </div>
      </Sider>
    </div>
  );
}

export default SideComponent;
