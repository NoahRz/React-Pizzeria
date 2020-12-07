import React, { useEffect, useState } from 'react';

import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './styles';

import Logout from './Logout';
import GuestLinks from './GuestLinks';

import { connect } from 'react-redux';



const Navbar = ({ cart, auth, openHandle }) => {

    const { isAuthenticated, user } = auth; // pas sur

    console.log("isAuthenticated:", isAuthenticated);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty
        });
        setCartCount(count);
    }, [cart, cartCount]);

    const scrollPoint = 100;

    const [scroll, setScroll] = useState(0);

    const changeNav = () => {
        if (window.scrollY >= scrollPoint) {
            setScroll(1)
        } else {
            setScroll(window.scrollY / scrollPoint);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <Nav scroll={scroll}>
                <NavbarContainer>
                    <NavLogo exact to='/'>🍕 Pizzeria</NavLogo>
                    <MobileIcon onClick={openHandle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/order">Order</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/menus">Menus</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/reservetable">Reserve your table</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/setting">Setting</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/cart">cart {cartCount} </NavLinks>
                        </NavItem>
                        <NavItem>
                            {isAuthenticated ? <Logout /> : <GuestLinks />}
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/profile">Profile</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {isAuthenticated ? <NavBtnLink to="/signup">{`Welcome ${user.username}`}</NavBtnLink> : <NavBtnLink to="/signup">Sign Up</NavBtnLink>}
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Navbar);