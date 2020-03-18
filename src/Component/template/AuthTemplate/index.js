import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const AuthTemplate = props => {
    return (
        <div className="login">
            {props.children}
        </div>
    );
};

AuthTemplate.propTypes = {
    
};

export default AuthTemplate;