import * as React from "react";

import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";

class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    this.state = {
      name: "",
      amount: ""
    };
  }

  handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let { token } = await this.props.stripe.createToken({ name: this.state.name });
      let amount = this.state.amount;
      await fetch('/payment', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify( {token, amount} )
      })
      //redicrect, clearn inputs, thanks alert

    } catch (e) {
      throw e;
    }
  };

  render() {
    return (
      <main className="container">
        <form
          className="form-group mt-3 border border-primary rounded shadow-1g"
          onSubmit={this.handleSubmit}
        >
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ name: e.target.value })
            }
            className="input-group my-1 p-1 border border-dark"
          />
          <label>Amount</label>
          <input
            type="text"
            value={this.state.amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ amount: e.target.value })
            }
            className="input-group my-1 p-1 border border-dark"
          />
          <label>CC Number-- Exp. Date -- CVC</label>
          <CardElement className="p-2 border border-alert" />
          <button className="btn btn-primary border border-dark shadow mt-3">
            Submit Payment
          </button>
        </form>
      </main>
    );
  }
}

interface IFormProps extends ReactStripeElements.InjectedStripeProps {}
interface IFormState {
  name: string;
  amount: string;
}

export default injectStripe(Form);
