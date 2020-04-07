import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Button from '../Button/Button';
import SVG from '../../../assets/images/SVG/Logo';

const StripeButton = ({amount}) => {
    const PUBLISHABLE_KEY = 'pk_test_txpxeZIfM2RqWCTQuxWs1H1I003rFYxrxT';
    
    const amountInCents = amount * 100;

    const onToken = token => {
        console.log(token)
    }

    return (
        <StripeCheckout
            token={onToken}
            stripeKey={PUBLISHABLE_KEY}
            name="This is a name"
            description="This is a description"
            shippingAddress
            ComponentClass="div"
            email
            label="heres is the price for ur products"
            amount={amountInCents}
        >
            <Button>Pay now</Button>
        </StripeCheckout>
    )
}

export default StripeButton
