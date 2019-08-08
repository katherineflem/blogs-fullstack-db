import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.SFC<INavProps> = props => {
    return (
        <>
            <nav className="navbar justify-content-around">
                <form className="form-inline">
                    <NavLink to='/'className="btn btn-outline-info text-dark" type="button">Home</NavLink>
                    <NavLink to='/createblog' className="btn btn-outline-info ml-3 text-dark" type="button">Create Blog</NavLink>
                </form>
            </nav>
        </>
    )
}


export interface INavProps { }

export default Navbar

