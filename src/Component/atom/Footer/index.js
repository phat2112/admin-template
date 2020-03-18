import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

const Footer = props => {
  return (
    <div className="footer-container" >
      <h1>Contact</h1>
      <div className="footer-container-content">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <h2>Shop Info</h2>
            <h3>Coming Soon</h3>
          </Col>
          <Col span={161}>
            <h2> About us</h2>
            <h3>Coming Soon</h3>
          </Col>
        </Row>
      </div>
      <div className="copy-right-footer">
          <p>Copy right @</p>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
