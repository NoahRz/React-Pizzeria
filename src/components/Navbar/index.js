import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

import { FaBars, FaShoppingCart } from 'react-icons/fa';
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



const Navbar = ({ pizzaCart, dessertCart, drinkCart, auth, openHandle }) => {

    const location = useLocation();

    const { isAuthenticated, user } = auth; // pas sur

    const [cartCount, setCartCount] = useState(0);

    const [scrollOption, setScrollOption] = useState(false);

    useEffect(() => {
        if (location.pathname === "/") {
            setScrollOption(true);
        } else {
            setScrollOption(false);
        }
    }, [location])


    useEffect(() => {
        let count = 0;
        pizzaCart.forEach((item) => {
            count += item.qty
        });
        dessertCart.forEach((item) => {
            count += item.qty
        });
        drinkCart.forEach((item) => {
            count += item.qty
        });
        setCartCount(count);
    }, [pizzaCart, dessertCart, drinkCart, cartCount]);

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
            <Nav scroll={scroll} scrollOption={scrollOption}>
                <NavbarContainer>
                    <NavLogo to='/'>🍕 Pizzeria</NavLogo>
                    <MobileIcon onClick={openHandle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/menus">Menus</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/myorder">My order(s)</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/reservetable">Reserve your table</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/cart">
                                <FaShoppingCart style={{ marginRight: "6" }} />{cartCount}
                            </NavLinks>
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
        pizzaCart: state.pizzaShop.cart,
        dessertCart: state.dessertShop.cart,
        drinkCart: state.drinkShop.cart,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Navbar);