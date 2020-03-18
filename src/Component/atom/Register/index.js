import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import { useHistory } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const RegisterPage = ({ onRegister }) => {
  const history = useHistory()
  const handleLinkLogin = () => {
    history.push('/login')
  }
  return (
    <div className="login-form-container">
      <h1>Register</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onRegister}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!"
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
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
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
          hasFeedback
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!"
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              }
            })
          ]}
        >
          <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Confirm Password"
              type="password"
          />
        </Form.Item>
        <Form.Item className='option-button'>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
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

RegisterPage.propTypes = {
    onRegister: PropTypes.func,
};

export default RegisterPage;
