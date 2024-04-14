import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Navbar = () => {
    const cartItems = useSelector((store) => (store.cart.items));
    const [login, setLogin] = useState(false);

    const handleLoginClick = () => {
        setLogin(!login)
    }

    return (
        <div className="navbar">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <ul className="nav_items">
                <li className="nav_list_item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/cart">Cart ({cartItems.length})</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="#" onClick={handleLoginClick}>
                        {login ? 'Logout' : "Login"}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;