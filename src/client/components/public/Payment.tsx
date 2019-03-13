import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { StripeProvider, Elements } from 'react-stripe-elements'
import Form from './Form'; 

export default class Payment extends React.Component<
  IPaymentProps,
  IPaymentState
> {
  constructor(props: IPaymentProps) {
    super(props);
 
  }

  

  render() {
    return (
      <main className="container">
        <StripeProvider apiKey= "pk_test_rbqNXSfKjneWKRBWLErxFhpr">
            <Elements>
            <Form />
            </Elements>
        </StripeProvider>
      </main>
    );
  }
}

interface IPaymentProps extends RouteComponentProps<{  }> {}

interface IPaymentState {

}
