import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ()=>{
    return (
    <nav className='menu'>
        <label className='logo'>GameCase</label>
        <ul className='menuItems'>
            <li>Consolas</li>
            <li>VideoJuegos</li>
            <li>Contact</li>
        </ul>
    <CartWidget />
    </nav>
    )
}

export default NavBar