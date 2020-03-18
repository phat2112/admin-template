import React from 'react';
import PropTypes from 'prop-types';
import { Route } from "react-router-dom";
import AuthTemplatePage from 'Component/template/AuthTemplate'

const AuthTemplate = ({ component: Component, ...rest }) => {
    const AuthContext = React.createContext(null)
    return (
        <AuthContext.Provider>
        <Route
          {...rest}
          render={({ location, history, ...props }) => (
            <AuthTemplatePage>
              <Component location={location} history={history} {...props} />
            </AuthTemplatePage>
          )}
        />
      </AuthContext.Provider>
    )
};

AuthTemplate.propTypes = {
    
};

export default AuthTemplate;