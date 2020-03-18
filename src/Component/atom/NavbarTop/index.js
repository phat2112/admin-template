import React from 'react'
import './styles.scss';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';
import { useHistory } from 'react-router-dom';
import * as tokenFunction from 'Utils/tokenStorage';
import {BellOutlined, DownOutlined} from '@ant-design/icons';


const { Search } = Input;

const NavbarTop = ({handleSearch}) => {
    const history = useHistory()
    const handleCss = (idValue) => {
        let idElement = document.getElementById(idValue)
        let templateContent = document.getElementById('template-content')
        let navbarTop = document.getElementById('navbar-top')
        let footer = document.getElementById('footer')
        if(idElement.style.width === '0px' ){
            idElement.style.width = '20vw';
            templateContent.style.width = '80vw';
            templateContent.style.marginLeft = '20vw';
            navbarTop.style.width = '80%';
            footer.style.width = '80vw';

        }else{
            idElement.style.width = 0;
            templateContent.style.width = '100vw';
            templateContent.style.marginLeft = '0px';
            navbarTop.style.width = '100%';
            footer.style.width = '100vw';
        }
    }
    const handleLogout = () => {
        history.push('/login')
        tokenFunction.eraseToken('token')
    }
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              Profile
            </a>
          </Menu.Item>
          <Menu.Item>
            <div onClick={() => handleLogout()}>
              Sign out
            </div>
          </Menu.Item>
        </Menu>
      );
     return (
        <div className='navbar-top' id='navbar-top'>
            <div className="navbar-top-mobile-button" onClick={() => handleCss('navbar')}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="navbar-top-search">
                <Search
                placeholder="input search text"
                onSearch={value => handleSearch(value)}
            />
            </div>
            <div className="narbar-top-user-option">
                <div className="user-message">
                    <BellOutlined />
                </div>   
                <div className="user-option">
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Admin <DownOutlined />
                        </a>
                    </Dropdown>,
                </div>
            </div>
        </div>
    )
}

NavbarTop.propTypes = {

}

export default NavbarTop

