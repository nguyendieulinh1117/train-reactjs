import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { selectCarts } from "redux/Cart";

export default function CartTotal() {
  const { cartList } = useSelector(selectCarts);
  const dispatch = useDispatch();

  //    useEffect(() => {
  //       dispatch(getTotals());
  //    }, [cartItems]);

  return (
    <div className="cart__total">
      <Row className="cart__total--bottom" align="middle">
        <Col md={16}>
          <div className="total--left"></div>
        </Col>
        <Col md={8}>
          <div className="total--right">
            <span className="total__all">
              Total:{" "}
              <span className="price">
                $
                {cartList && cartList.length > 0
                  ? cartList.reduce(
                      (prev, current) =>
                        prev + current.product.price * current.quantity,
                      0
                    )
                  : 0}
              </span>
            </span>
            <Link to="/">
              <button className="cart__button">Buy now</button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
