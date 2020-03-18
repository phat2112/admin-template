import React from 'react';
import PropTypes from 'prop-types';
import RegisterPage from 'Component/atom/Register';

const Register = props => {
    const onRegister = values => {
        console.log('Received values of form: ', values);
    }
    return (
        <div>
            <RegisterPage onRegister={onRegister}/>
        </div>
    );
};

Register.propTypes = {
    
};

export default Register;