import React from 'react';
import Login from 'Container/Login'
import Register from 'Container/Register';
import SneakerDetail from 'Container/ShoeItem';
import AuthTemplate from 'Container/AuthTemplate'
import DashboardContainer from 'Container/Dashboard'
import ForgotPasswordContainer from 'Container/ForgotPassword'
import RouteAdminTemplate from 'Container/AdminTemplate';
import PaymentPageContainer from 'Container/PaymentPage';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <AuthTemplate exact path='/login' component={Login}/>
          <AuthTemplate exact path='/register' component={Register}/>
          <AuthTemplate exact path='/forgot-password' component={ForgotPasswordContainer}/>
          <RouteAdminTemplate exact path='/dashboard' component={DashboardContainer}/>
          <RouteAdminTemplate exact path='/sneaker-detail/:id' component={SneakerDetail}/>
          <RouteAdminTemplate exact path='/payment/:id' component={PaymentPageContainer}/>
          <Redirect exact from="/" to="/dashboard" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
