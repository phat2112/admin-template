import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Modal } from "antd";
import CardForm from 'Component/atom/StripeForm';
import { StripeProvider, Elements } from 'react-stripe-elements';

const PaymenPopup = ({
  handleOk,
  handleCancel,
  showModal,
  payCard,
  onShipCod,
  paymentByCard,
  setShowModal,
}) => {
  const handleResult = e => {
    if (e.token) {
      // handleSubmitPayment(e)
      setShowModal(false)
    }
  }
  return (
    <Modal
      title={payCard ? "Pay with card" : "Pay when recieve shoe"}
      visible={showModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className='payment-modal'
    >
      {payCard ? (
        // <Form onFinish={paymentByCard}>
        //   <Form.Item
        //     label="Username"
        //     name="username"
        //     rules={[{ required: true, message: "Please input your username!" }]}
        //   >
        //     <Input />
        //   </Form.Item>

        //   <Form.Item
        //     label="Credit Card"
        //     name="Credit Card"
        //     rules={[{ required: true, message: "Please input your password!" }]}
        //   >
        //     <Input />
        //   </Form.Item>
        //   <div className="payment-button">
        //     <Button type="primary" htmlType="submit">
        //       Check Out
        //     </Button>
        //   </div>
        // </Form>
        <StripeProvider apiKey={'pk_test_YCKiZNUJu6tPsynYLPvtSzhr00AZuQKESe'}>
          <Elements>
          {/* handleResult={e => handleResult(e)}  */}
            <CardForm handleResult={e => handleResult(e)}/>
          </Elements>
        </StripeProvider>
      ) : (
        <Form onFinish={onShipCod}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                type: "email",
                message: "The input is not valid E-mail!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="Address"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input your username!" },
            ]}
          >
            <Input type='number'/>
          </Form.Item>
          <div className="payment-button">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
        
      )}
    </Modal>
  );
};

PaymenPopup.propTypes = {
  showModal: PropTypes.bool,
  payCard: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleOk: PropTypes.func,
  onShipCod: PropTypes.func,
  paymentByCard: PropTypes.func,
  setShowModal: PropTypes.func,
};

export default PaymenPopup;
