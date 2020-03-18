import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from "antd";
import { useHistory } from 'react-router-dom'
import { MailOutlined } from "@ant-design/icons";



const ForgotPassword = ({onForgotPassword}) => {
    const history = useHistory()
    const handleLinkLogin = () => {
      history.push('/login')
    }
    return (
        <div className="login-form-container">
        <h1>Forgot Password</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onForgotPassword}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!"
              },
              {
                type: "email",
                message: "The input is not valid E-mail!"
              }
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
            </Form.Item>
          
          <Form.Item className='option-button'>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
            <Button
              type="primary"
              className="login-form-button"
              onClick={() => handleLinkLogin()}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
};

ForgotPassword.propTypes = {
    onForgotPassword: PropTypes.func,
};

export default ForgotPassword;