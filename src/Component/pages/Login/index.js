import React,{useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import * as tokenStorage from 'Utils/tokenStorage'
import { useHistory } from 'react-router-dom'
import './styles.scss'

const LoginPage = ({login, token}) => {
    const history = useHistory()
    let tokenValue = tokenStorage.getToken('token')
    if(tokenValue){
      history.push('/dashboard')
    }
    const [isRememberMe, setRememberMe] = useState(false)
    const onFinish = values => {
        console.log('Received values of form: ', values);
        const data ={
            email: values.username,
            password: values.password
        }
        login(data)
        if(values.remember){
          setRememberMe(true)
        }
        if(token.token && isRememberMe){
            tokenStorage.setToken('token',token.token,14)
        }
    }

    return (
        <div className="login-form-container">
          <h1>Login</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
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
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="/forgot-password">
                Forgot password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <Link to="/register">register now!</Link>
            </Form.Item>
          </Form>
        </div>
    );
}
LoginPage.propTypes = {
    login: PropTypes.func
}

export default LoginPage;
