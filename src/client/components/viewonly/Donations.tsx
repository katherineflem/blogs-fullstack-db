import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements'
import DonationForm from './DonationForm'
const donationsPage = () => {
    return (
        <>
            <StripeProvider apiKey='pk_test_fR7JlA7VFQLR9AHe0Ma63zdT00slHZVoGw'>
                <Elements>
                    <DonationForm/>
                </Elements>
            </StripeProvider>/
        </>
    )
}

export default donationsPage