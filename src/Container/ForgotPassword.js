import React from 'react';
import PropTypes from 'prop-types';
import ForgotPassword from 'Component/atom/ForgotPassword';

const ForgotPasswordContainer = props => {
    const onForgotPassword = values => {

    }
    return (
        <div>
            <ForgotPassword onForgotPassword={onForgotPassword}/>
        </div>
    );
};

ForgotPasswordContainer.propTypes = {
    
};

export default ForgotPasswordContainer;