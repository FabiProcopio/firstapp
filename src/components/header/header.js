import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/thebatmanlogo.jpg'



function Header(){
    return (
        <header>
            <img id='logo' src={Logo} alt={'logo'}/>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contact'>
                        <li>Contact</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/photos'>
                        <li>Photos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/comments'>
                        <li>Comments</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;