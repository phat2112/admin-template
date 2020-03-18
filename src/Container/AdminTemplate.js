import React from "react";
import * as tokenStorage from "Utils/tokenStorage";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import AdminTemplate from 'Component/template/AdminTemplate'

const RouteAdminTemplate = ({ component: Component, ...rest }) => {
  const RouterrContext = React.createContext();
  const history = useHistory();
  const token = tokenStorage.getToken("token");
  if (!token) {
    history.push("/login");
  }
  return (
    <RouterrContext.Provider>
      <Route
        {...rest}
        render={({ location, history, ...props }) => (
          <AdminTemplate>
            <Component location={location} history={history} {...props} />
          </AdminTemplate>
        )}
      />
    </RouterrContext.Provider>
  );
};

export default RouteAdminTemplate;
