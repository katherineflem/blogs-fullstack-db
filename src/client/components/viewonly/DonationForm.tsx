import * as React from 'react'
import { useState } from 'react'
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'

//USER TYPES IN THEIR CC INFO INTO FORM IN CARD ELEMENT FROM STRIPES API
//ON SUBMIT, THE CC INFO IS CREATED INTO A TOKEN AND SENT TO OUR SERVER

const Form: React.SFC<IFormProps> = (props) => {

    const [name, setName] = useState<string>('')
    const [amt, setAmt] = useState<string>('')


    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let { token } = await props.stripe.createToken({ name })
            let amount = amt
            await fetch('/api/donate', {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ token, amount })//es6 syntax if the prop and value have the same name
            })
            setName('');
            setAmt('');
            alert('Thanks for your purchase!')
            //redirect, clear inputs, thank you alert
        } catch (e) {
            throw e;
        }
    }
    return (
        <>
            <main className="container">
                <form className="form-group mt-3 shadow-lg p-4"
                    onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        className="input-group my-1 border border-info"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}>
                    </input>
                    <label>Amount</label>
                    <input
                        type="text"
                        className="input-group my-1 border border-info"
                        value={amt}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmt(e.target.value)}>
                    </input>
                    <label>CC # -- Exp Date -- CVC</label>
                    <CardElement className="p-2 border border-dark" />
                    <button className=" mt-2 btn btn-outline-info">Donate</button>
                </form>
            </main>
        </>
    )
}

//bringing in whatever props.stripe provides for us in ReactStripe Elements
export interface IFormProps extends ReactStripeElements.InjectedStripeProps { }

export default injectStripe(Form)//call inject function on export