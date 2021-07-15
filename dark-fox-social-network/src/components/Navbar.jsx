import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.navigation} >
        <div>
            <a href='#1'>Profile</a>
        </div>
        <div>
            <a href='#2'>Message</a>
        </div>
        <div>
            <a href='#3'>News</a>
        </div>
        <div>
            <a href='#4'>Music</a>
        </div>
        <div>
            <a href='#5'>Setting</a>
        </div>
    </nav>
    )
}

export default Navbar