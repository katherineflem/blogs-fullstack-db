import * as React from 'react';
import { useState } from 'react';
import { json, SetAccessToken } from '../../utils/api';
import { NavLink} from 'react-router-dom'
import {RouteComponentProps} from 'react-router-dom'
const Login: React.SFC<ILoginProps> = props => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')

    const handleLoginSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let result = await json('/auth/login', "POST", {
                email,
                password
            });
            if (result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role });
                if (result.role === 'guest') {
                    props.history.push('/')
                } else {
                    props.history.push('/login')

                }
            } else {
                //checking a login status
                //check your credentials
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="container">
            <h1 className="text-center">Login</h1>
                <section className="row justify-content-center mt-5">
                    <form className="col-md-6 form-group shadow p-4">
                        <label>Email:</label>
                        <input
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            type="email"
                            className="form-control" />

                        <label>Password:</label>
                        <input
                            value={password}
                            type="password"
                            name="password"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            className="form-control" />

                        <button
                            onClick={handleLoginSubmit}
                            className="btn btn-outline-info mt-3 btn-block">Login</button>
                        <NavLink to="/register" className="btn btn-outline-info btn-block">Register</NavLink>
    
                    </form>
                </section>
            </div>
        </>

    );
}

export interface ILoginProps extends RouteComponentProps { }

export default Login
