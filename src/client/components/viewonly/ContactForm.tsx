import * as React from 'react'
import { useState } from 'react'

const ContactForm: React.SFC<IContactProps> = (props) => {

    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit=async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
        let response= await fetch('/api/contact', {
            method:'POST',
            headers:{
                'Content-type': "application/json"//the body will have json info in it
            },
            body:JSON.stringify({email, subject, message})
        });

        setEmail('')
        setSubject('')
        setMessage('')
        }catch(e){
            console.log(e)
        }
    }

    return (
        <>
        <div className="container mt-5">
            <form className='form-group shadow-sm p-5 bg-light border border-info'
                onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="email" />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            value={subject}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                            className="form-control"
                            placeholder="subject" />
                    </div>
                    <div className='col-md-12 mt-3 justify content-center'>
                        <textarea
                            className="form-control"
                            value={message}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                            placeholder="message">
                        </textarea>
                        <button className='btn btn-success mt-2'>Submit</button>
                    </div>
                </div>
            </form>
            </div>

        </>
    )
}

interface IContactProps { }
export default ContactForm