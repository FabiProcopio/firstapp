import React from "react";
import './styles.css'
import Logo from '../../assets/thebatmanlogo.jpg'
import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer>
            <img id='logo' src={Logo} alt={'Batman logo'}/>
            <span>All rights reseved Ⓒ </span>
            <span>Website created by: Fabio Procopio </span>

            <nav className='footer-navigation'>
                <ul className='footer-list'>
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
        </footer>
    )
}

export default Footer;