import classes from './Navbar.module.css'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu, AiOutlineSetting } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { FaRegNewspaper } from 'react-icons/fa'
import { BsMusicPlayer } from 'react-icons/bs'
import { BiChat, BiLogOut } from 'react-icons/bi'
import { GiSpiderWeb } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className={classes.navigation}>
            <div className={classes.sidebar} >
                <div className={classes.logoContent}>
                    <div className={classes.logo} >
                        <i><GiSpiderWeb /></i>
                        <div className={classes.logoName}>Spider</div>
                    </div>
                </div>
                <AiOutlineMenu id={classes.btn} />
                <div>
                    <ul>
                        <li>
                            <NavLink to='/profile'>
                                <i><CgProfile /></i>
                                <span className='linksName'>Profile</span>
                            </NavLink>
                            <span className={classes.tooltip} >Profile</span>
                        </li>
                        <li>
                            <NavLink to='/friends'>
                                <i><FiUsers /></i>
                                <span className='linksName'>Friends</span>
                            </NavLink>
                            <span className={classes.tooltip} >Friends</span>
                        </li>
                        <li>
                            <NavLink to='/dialogs'>
                                <i><BiChat /></i>
                                <span className='linksName'>Message</span>
                            </NavLink>
                            <span className={classes.tooltip} >Message</span>
                        </li>
                        <li>
                            <NavLink to='/news'>
                                <i><FaRegNewspaper /></i>
                                <span className='linksName'>News</span>
                            </NavLink>
                            <span className={classes.tooltip} >News</span>
                        </li>
                        <li>
                            <NavLink to='/music'>
                                <i><BsMusicPlayer /></i>
                                <span className='linksName'>Music</span>
                            </NavLink>
                            <span className={classes.tooltip} >Music</span>
                        </li>
                        <li>
                            <NavLink to='/setting'>
                                <i><AiOutlineSetting /></i>
                                <span className='linksName'>Setting</span>
                            </NavLink>
                            <span className={classes.tooltip} >Setting</span>
                        </li>
                    </ul>
                    <div className={classes.logOut}>
                        <i><BiLogOut id={classes.logOutIcons} /></i>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar