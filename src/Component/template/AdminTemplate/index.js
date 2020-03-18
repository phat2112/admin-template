import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Navbar from 'Component/atom/Navbar'
import NavbarTop from 'Component/atom/NavbarTop'
import './styles.scss'
import Footer from 'Component/atom/Footer'

export const AdminContext = React.createContext(null)
const AdminTemnplate = (props) => {
    const [valueFind, setValueFind] = useState('')
    
    const handleSearch = value => {
        setValueFind(value)
    }
    
    return (
        <div className='admin-template'>
            <div className="admin-template-navbar">
                <Navbar />
            </div>
            <div className="admin-template-content" id='template-content'>
                <NavbarTop handleSearch={handleSearch}/>
                <AdminContext.Provider value={valueFind}>
                    <div className="admin-content">
                        {props.children}
                    </div>
                </AdminContext.Provider>   
                <div className="footer" id='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
AdminTemnplate.propTypes = {
    props: PropTypes.any,
}
export default AdminTemnplate
