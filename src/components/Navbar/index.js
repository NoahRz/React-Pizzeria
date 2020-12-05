import React, {useEffect, useState} from 'react';

import {FaBars} from 'react-icons/fa';
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

import { connect } from 'react-redux';

const Navbar = ({ cart, openHandle}) => {

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
        if(window.scrollY>=scrollPoint){
            setScroll(1)
        }else {
            setScroll(window.scrollY/scrollPoint);
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
                <MobileIcon onClick= {openHandle}>
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
                        <NavLinks to="/signin">Sign In</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/setting">Setting</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/cart">cart {cartCount} </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>
               </NavbarContainer>
           </Nav>
        </>
    )
}

const mapStateToProps = state => {
     return {
         cart : state.shop.cart
     }
}

export default connect(mapStateToProps)(Navbar);