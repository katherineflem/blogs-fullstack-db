import * as React from 'react'
import Navbar from './navbar'


const Header: React.SFC<IHeaderProps> = props => {
    return (
        <>
            <div className="row justify-content-center bg-dark mt-2 shadow">
                <div className="col-md-12 d-flex justify-content-center">
                    <h3 className="text-light">Foood Blog</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className='col-md-12'>
                    <Navbar />
                </div>
            </div>
        </>
    )}

export default Header

interface IHeaderProps { }