import React from 'react';

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

const Navbar = () => {
    return (
        <div>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'>Pizzeria</NavLogo>
                <MobileIcon>
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
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>
               </NavbarContainer>
           </Nav>
        </div>
    )
}

export default Navbar;