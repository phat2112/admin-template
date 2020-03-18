import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import LoginPage from 'Component/pages/Login'
import { AuthSelectors } from 'Stores/auth/Selectors'
import { AuthActions } from 'Stores/auth/Actions'
import { connect } from 'react-redux'

const Login = ({login, token}) => {
    return (
        <div>
            <LoginPage login ={login} token={token}/>
        </div>
    )

}
Login.propTypes = {
    login: PropTypes.func,
};
const mapStateToProps = state => ({
    token: AuthSelectors.authToken(state)
})
const mapDispatchToProps = dispatch => ({
    login: userValue => dispatch(AuthActions.handleLogin(userValue))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
