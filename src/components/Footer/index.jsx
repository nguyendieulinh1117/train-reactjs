import { Col, Layout, Row } from "antd";
import React from "react";
import "assets/scss/footer.scss";
import { Link } from "react-router-dom";
const { Footer } = Layout;
function BaseFooter() {
  return (
    <Footer>
      <Row justify="center" align="top">
        <Col span={24}>
          <div className="footer__section">
            <Row>
              <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                <div className="footer__section--logo">
                  <Link to={"/train-reactjs"}>
                    {" "}
                    <img src="/train-reactjs/logo.png" alt="logo" />
                  </Link>
                  <p>
                    © 2021 <br /> privacy policy
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <div className="footer__section--address">
                  <p>
                    usa - los angeles, 910 east e street, hihi, ca 90744
                    <br />
                    e-mail: mail@gmail.com
                  </p>
                  <p>
                    (+84)<span> 123 456 789</span>
                  </p>
                </div>
                <div className="footer__section--follow visible">
                  <div className="footer__section--icon_fb">
                    <img
                      src="/train-reactjs/images/facebook-icon.png"
                      alt="facebook"
                    />
                  </div>
                  <div className="footer__section--icon_twitter">
                    <img
                      src="/train-reactjs/images/twitter-icon.png"
                      alt="twitter"
                    />
                  </div>
                  <div className="footer__section--icon_shoppe">
                    <img
                      src="/train-reactjs/images/shopee-icon.png"
                      alt="shopee"
                    />
                  </div>
                  <div className="footer__section--icon_lazada">
                    <img
                      src="/train-reactjs/images/lazada-icon.png"
                      alt="lazada"
                    />
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                <div className="footer__section--schedule">
                  <h3>
                    tuesday - friday
                    <br />
                    <span>8:00 to 21:00</span>
                  </h3>
                  <h3>
                    saturday & sunday
                    <br />
                    <span>8:00 to 12:00</span>
                  </h3>
                  <p>closed monday</p>
                </div>
                <div className="footer__section--follow hidden">
                  <div className="footer__section--icon_fb">
                    <img src="/images/facebook-icon.png" alt="facebook" />
                  </div>
                  <div className="footer__section--icon_twiter">
                    <img src="/images/twitter-icon.png" alt="twitter" />
                  </div>
                  <div className="footer__section--icon_shoppe">
                    <img src="/images/shopee-icon.png" alt="shopee" />
                  </div>
                  <div className="footer__section--icon_lazada">
                    <img src="/images/lazada-icon.png" alt="lazada" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Footer>
  );
}

export default BaseFooter;
