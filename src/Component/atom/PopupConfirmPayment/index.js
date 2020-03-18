import './styles.scss'
import './styles.scss';
import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { HeartFilled } from '@ant-design/icons';

const PopupConfirmPayment = ({showPopupConfirm, setCloseModalConfirm, setModalConfirm, valueUser}) => {
    return (
        <Modal
          title={"Confirm Cart"}
          visible={showPopupConfirm}
          onOk={setModalConfirm}
          onCancel={setCloseModalConfirm}
          okText={'Confirm'}
          className='conform-popup'
        >
            <div className='user-info'>
                <h4>Your Name:</h4>
                <p>{valueUser ? valueUser.yourName : 'none'}</p>
            </div>
            <div className='user-info'>
                <h4>Your Address:</h4>
                <p>{valueUser ? valueUser.yourAddress : 'none'}</p>
            </div>
            <div className='user-info'>
                <h4>Your Email:</h4>
                <p>{valueUser ? valueUser.yourEmail : 'none'}</p>
            </div>
            <div className='user-info'>
                <h4>Your Phone:</h4>
                <p>{valueUser ? valueUser.yourPhone : 'none'}</p>
            </div>
            <h4>{valueUser ? (`You have just bought ${valueUser.yourShoe} with ${valueUser.yourPrice}. please confirm and we will ship COD  to you. Thanks for choosing us `) : 'none'} <HeartFilled style={{ color: '#FF0033'}}/></h4>
        </Modal>
    );
};

PopupConfirmPayment.propTypes = {
    showPopupConfirm: PropTypes.bool,
};

export default PopupConfirmPayment;