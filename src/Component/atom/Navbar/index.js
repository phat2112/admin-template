import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {CaretDownOutlined} from '@ant-design/icons';
import * as helper from 'Utils/helper'
import './styles.scss'

function Navbar(props) {
    return (
        <div className='navbar' id='navbar'>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1>Admin template</h1>
                    
                </div>
                <div className="admin-profile">
                    <div className="admin-profile-img"></div>
                    <p className="admin-profile-username">Super Admin</p>
                </div>
                <div className="navbar-item">
                    <div onClick={() => helper.handleDropDown('dropdown')} className="navbar-item-dropdown-toggle">
                        <h3>Applications</h3>
                        <CaretDownOutlined />
                    </div>
                    <div className="navbar-item-dropdown" id='dropdown'>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='#'>Layouts</Link>
                        <Link to='#'>Pages</Link>
                        <Link to='#'>Chart</Link>
                        <Link to='#'>Home</Link>
                    </div>
                </div>
                <div className="navbar-item">
                    <div onClick={() => helper.handleDropDown('sec-dropdown')} className="navbar-item-dropdown-toggle">
                        <h3>Templates</h3>
                        <CaretDownOutlined />
                    </div>
                    <div className="navbar-item-dropdown" id='sec-dropdown'>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='#'>Home</Link>
                        <Link to='#'>Home</Link>
                        <Link to='#'>Home</Link>
                        <Link to='#'>Home</Link>
                    </div>
                </div>
                <div className="navbar-item">
                    <div className="navbar-item-dropdown-toggle">
                        <h3>Document</h3>
                        <CaretDownOutlined />
                    </div>
                    <div className="navbar-item-dropdown" id='dropdown'>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='#'>Home</Link>
                        <Link to='#'>Home</Link>
                        <Link to='#'>Home</Link>
                        <Link to='#'>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar

