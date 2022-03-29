import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className='menu'>
            <NavLink to= {`/`} className="logo">GameCase</NavLink>
            <ul className='menuItems'>
            <NavLink
                to= {`/category/consola`}
                className={({isActive})=>
            isActive ? 'ActiveOption' :'Option'
            }
                >
                    Consolas
            </NavLink>
            <NavLink
                to= {`/category/videojuegos`}
                className= {({isActive})=>
            isActive ? 'ActiveOption' :'Option'
            }
                >
                    Videojuegos
            </NavLink>
            <NavLink
                to= {`/contact`}
                className={({isActive})=>
            isActive ? 'ActiveOption' :'Option'
            }
                >
                    Contact
            </NavLink>
            </ul>
            <NavLink to= {`/cart`} className="Cart">
            <CartWidget />
            </NavLink>
        
        </nav>
        )
    }
    
    export default Navbar