import "./styles.scss";
import { Button } from 'antd'
import PropTypes from "prop-types";
import * as helper from "Utils/helper";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PaymenPopup from "Component/atom/PopupPaymen";
import PopupConfirmPayment from "Component/atom/PopupConfirmPayment";

const PaymentPage = ({ shoeData }) => {
  const history = useHistory()
  const [showModal, setShowModal] = useState(false)
  const [showPopupConfirm, setShowPopupConfirm] = useState(false)
  const [payCard, setPayCard] = useState(false)
  const [valueUser, setValueUser] = useState({
    yourName:'',
    yourEmail: '',
    yourAddress: '',
    yourPhone: '',
    yourShoe:'',
    yourPrice: '',
  })

  const onShipCod = values => {
    console.log("Received values of form: ", values);
    if(values){
      setValueUser({
        yourName: values.username,
        yourEmail: values.Email,
        yourAddress: values.Address,
        yourPhone: values.phone,
        yourShoe: shoeData.get('name'),
        yourPrice: shoeData.get('price'),
      })
      setShowPopupConfirm(true)
      setShowModal(false)
    }
  };
  const paymentByCard = values => {
    console.log("payment card info", values);
  };

  const handleCancel = e => {
    setShowModal(false)
  }

  const setToPayOn = value => {
    setShowModal(value)
    setPayCard(value)
  }
  const setToPayOff = value => {
    setShowModal(value)
    setPayCard(!value)
  }
  const setCloseModalConfirm = e => {
    setShowPopupConfirm(false)
    setValueUser({
      yourName:'',
      yourEmail: '',
      yourAddress: '',
      yourPhone: '',
      yourShoe:'',
      yourPrice: '',
    })
  }
  const setModalConfirm = e => {
    setValueUser({
      yourName:'',
      yourEmail: '',
      yourAddress: '',
      yourPhone: '',
      yourShoe:'',
      yourPrice: '',
    })
    setShowPopupConfirm(false)
    history.push('/dashboard')
  }
  useEffect(() => {
    console.log('valueUser', valueUser)
  }, [valueUser])
  return (
    <div className="payment-container">
      <h1>Payment </h1>
      <div className="payment-option">
        <div className="payment-ship-cod">
          <h2>Your Total</h2>
          <div className="your-cart">
            {shoeData
              ? shoeData.toJS().image.map((item, index) => (
                  <div className="image-cart" key={index}>
                    <img src={helper.handleUploadImage(item.url)} alt="" />
                  </div>
                ))
              : "Coming Soon"}
              <div className="item-cart-description">
                <h4>Brand</h4>
                <p>{shoeData ? shoeData.getIn(['shoeList','brand']) : 'Coming Soon'}</p>
              </div> 
              <div className="item-cart-description">
                <h4>Name</h4>
                <p>{shoeData ? shoeData.get('name') : 'Coming Soon'}</p>
              </div> 
              <div className="item-cart-description">
                <h4>Price</h4>
                <p>{shoeData ? shoeData.get('price') : 'Coming Soon'}</p>
              </div> 
          </div>
        </div>
        <div className="payment-charge-online">
          <div className="payment-charging-option">
            <Button type="primary" onClick={() => setToPayOff(true)}>
              Pay when recieve shoe
            </Button>
            <Button type="primary" onClick={() => setToPayOn(true)}>
              Pay with card
            </Button>
          </div>
        </div>
      </div>
      <PaymenPopup onShipCod={onShipCod} paymentByCard={paymentByCard} showModal={showModal} setShowModal={setShowModal} payCard={payCard} handleCancel={handleCancel}/>
      <PopupConfirmPayment setCloseModalConfirm={setCloseModalConfirm} showPopupConfirm={showPopupConfirm} valueUser={valueUser} setModalConfirm={setModalConfirm}/>
    </div>
  );
};

PaymentPage.propTypes = {
  shoeData: PropTypes.object
};

export default PaymentPage;
