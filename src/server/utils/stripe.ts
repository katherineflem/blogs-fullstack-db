import * as stripeLoader from 'stripe'
import secretKey from '../config'


//create new instance of stripe loader that takes in the SECRET KEY
const stripe = new stripeLoader(secretKey);//use config and env variables because you DO NOT WANT THIS HARDCODED HERE


//CHARGE FUNCTION
export const charge = (token:string, amt:number) => {
    return stripe.charges.create({
        //see stripe documentation
        amount: amt * 100,
        currency: 'usd',
        source: token, //token represents the card info that user entered on the front end 
        description: 'Statement Desc'
    });
};

