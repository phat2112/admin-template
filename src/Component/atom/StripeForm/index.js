import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import PropTypes from 'prop-types'
import './styles.scss'
import { Button } from 'antd'

// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    hidePostalCode: true,
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    },
  }
}

class _CardForm extends Component {
  state = {
    errorMessage: '',
  }

  handleChange = ({ error }) => {
    if (error) {
      this.setState({ errorMessage: error.message })
    } else {
      this.setState({ errorMessage: '' })
    }
  }

  handleSubmit = evt => {
    evt.preventDefault()
    if (this.props.stripe) {
      this.props.stripe.createToken().then(e => {
        if (e.error) {
          this.setState({ errorMessage: e.error.message })
        }
        return this.props.handleResult(e)
      })
    }
  }

  render() {
    return (
      <div className="CardDemo">
        <form onSubmit={this.handleSubmit}>
          <label>
            <CardElement onChange={this.handleChange} {...createOptions()} />
          </label>
          <div
            className="error"
            style={createOptions().style.invalid}
            role="alert">
            {this.state.errorMessage}
          </div>
          <div className="custom-stripe-submit-btn">
            <Button onClick={this.handleSubmit}>SUBMIT</Button>
          </div>
        </form>
      </div>
    )
  }
}

const CardForm = injectStripe(_CardForm)

_CardForm.propTypes = {
  stripe: PropTypes.object,
  handleResult: PropTypes.func,
}

export default CardForm
