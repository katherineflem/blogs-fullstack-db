import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.SFC<INavProps> = props => {
    return (
        <>
            <nav className="navbar justify-content-around">
                <form className="form-inline">
                    <NavLink to='/'className="btn text-info" type="button">Home</NavLink>
                    <NavLink to='/createblog' className="btn ml-3 text-info" type="button">Create Blog</NavLink>
                    <NavLink to='/donate' className="btn ml-3 text-info" type="button">Donate</NavLink>
                </form>
            </nav>
        </>
    )
}


export interface INavProps { }

export default Navbar

