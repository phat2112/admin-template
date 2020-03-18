import './styles.scss';
import { Card } from "antd";
import PropTypes from "prop-types";
import React,{useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import {
  LikeFilled,
  HeartFilled,
  ShoppingCartOutlined
} from "@ant-design/icons";

const SneakerItem = ({ title, img, idShoe }) => {
    const history = useHistory()
    const [isClick, setClick] = useState(false)
    const handleLinkToPay = value => {
      history.push(`/payment/${value}`)
    }
    const handleToggleClass = (e, classEle, classEffect) => {
      let classElement = document.getElementById(classEle);
        if (e) {
          classElement.classList.toggle(classEffect)
        } 
        else{
          classElement.classList.remove(classEffect)
        }
    }
  return (
    <div className="top-sneaker-item">
      <Card title={title} style={{ width: 300 }}>
        <div className="top-sneaker-img">
          <img src={img} alt="" />
        </div>
        <div className="top-sneaker-item-option">
          <div
            id={idShoe}
            className="top-sneaker-item-option-icon icon-like"
            onClick={e => handleToggleClass(e, `${idShoe}`, 'like-icon')}
          >
            <LikeFilled/>
          </div>
          <div
            id={idShoe}
            className="top-sneaker-item-option-icon icon-heart"
            onClick={e => handleToggleClass(e, `${idShoe}`, 'heart-icon')}
          >
            <HeartFilled/>
          </div>
          <div className="top-sneaker-item-option-icon icon-cart" onClick={() => handleLinkToPay(idShoe)}>
            <ShoppingCartOutlined />
          </div>
        </div>
      </Card>
    </div>
  );
};

SneakerItem.propTypes = {};

export default SneakerItem;
