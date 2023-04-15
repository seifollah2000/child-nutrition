import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
import CloseIcon from '@mui/icons-material/Close';
export default function Header() {
    const [show, setShow] = useState(false)
    return (
        <header>

            <Navbar bg="light" variant="light">
                <Container>

                    <Link to="/" className='header__berand'>Child <span> Nutrition </span></Link>
                    <Nav className="navbar-nav">
                        <Link to="/profile">MY RECIPES</Link>
                        <Link to="/add">ADD A RECIPE</Link>
                        <Link to="/search">SEARCH</Link>
                        <Link to="/login">LOGIN</Link>
                        <Link to="/signup">SIGNUP</Link>
                    </Nav>
                    {/* start mobile */}
                    <div className="mobile__menu" onClick={() => setShow(true)}>
                        <MenuIcon />
                    </div>
                    {/* end mobile */}
                </Container>
            </Navbar>

            {/* menu mobile */}
            <div className={`menu__mobile ${show ? "menu__mobile-show" : "menu__mobile-unshow"}`}>
                <div className="close_menu" onClick={() => setShow(false)}>
                    <CloseIcon />
                </div>
                <div className="menu__mobile-des">
                    <div className="menu__mobile-des-head">
                        <Link to="/" className='header__berand'>Child <span> Nutrition </span></Link>
                    </div>
                    <div className="menu__mobile-des-body ">
                        <Link to="/profile">MY RECIPES</Link>
                        <Link to="/add">ADD A RECIPE</Link>
                        <Link to="/search">SEARCH</Link>
                        <Link to="/login">LOGIN</Link>
                        <Link to="/signup">SIGNUP</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
