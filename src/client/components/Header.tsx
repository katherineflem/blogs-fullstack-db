import * as React from 'react'
import Navbar from './navbar'
import { NavLink } from 'react-router-dom';



const Header: React.SFC<IHeaderProps> = props => {

// const handleLogoutButton=  (e:React.MouseEvent<HTMLButtonElement>)=>{
//     e.preventdefault()
//     localStorage.clear();
//     props.history.replace('/')
// }




    return (
        <>
            <div className="row bg-dark mt-2 shadow">
                <div className="col-sm-4 d-inline-flex justify-content-left">
                    <NavLink to='/login' className="text-light">Login</NavLink>
                </div>
                <div className="col-sm-4 d-inline-flex justify-content-center">
                    <h3 className="text-light">Foood Blog</h3>
                </div>
                <div className="col-sm-4 d-inline-flex justify-content-end">
                    <NavLink 
                    to='/login'
                    onClick={()=>localStorage.clear()}
                    className="text-light">Logout</NavLink>

                </div>
            </div>
            <div className="row justify-content-center">
                <div className='col-md-12 bg-light'>
                    <Navbar />
                </div>
            </div>
        </>
    )
}


export default Header

interface IHeaderProps {}