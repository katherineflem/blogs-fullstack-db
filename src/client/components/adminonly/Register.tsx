import * as React from 'react';
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { json, SetAccessToken } from '../../utils/api';
import { RouteComponentProps } from 'react-router-dom'


const Register: React.SFC<IRegisterProps> = props => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    const handleRegisterSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let result = await json('/auth/register', "POST", {
                email,
                password,
                name
            })
            if (result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role });
                if (result.role === 'guest') {
                    props.history.push('/')
                } else {
                    props.history.push('/login')
                }
            } else {
            }
        } catch (e) {
            console.log(e);
        }
    }




    return (
        <>
            <div className="container">
                <section className="row justify-content-center mt-5">
                    <form className="col-md-6 form-group shadow p-4">
                        <label>Name:</label>
                        <input
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            type="name"
                            className="form-control" />

                        <label>Email:</label>
                        <input
                            value={email}
                            type="email"
                            name="email"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            className="form-control" />

                        <label>Password:</label>
                        <input
                            value={password}
                            type="password"
                            name="password"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            className="form-control" />

                        <button
                            onClick={handleRegisterSubmit}
                            className="btn btn-outline-info mt-3 btn-block">Submit</button>
                    </form>
                </section>
            </div>
        </>
    )

}

export interface IRegisterProps extends RouteComponentProps { }


export default Register
