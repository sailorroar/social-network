import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={classes.navigation} >
            <div>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'>Message</NavLink>
            </div>
            <div>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div>
                <NavLink to='/setting'>Setting</NavLink>
            </div>
        </nav>
    )
}

export default Navbar