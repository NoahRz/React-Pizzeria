import React, { useEffect, useState } from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './styles';

import { logout } from '../../redux/auth/auth-actions';

import { connect } from 'react-redux';

import { FaShoppingCart } from 'react-icons/fa';


const Sidebar = ({ isOpen, openHandle, pizzaCart, dessertCart, drinkCart, logout, auth }) => {

    const { isAuthenticated, user } = auth; // pas sur

    const [cartCount, setCartCount] = useState(0);

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


    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon onClick={openHandle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/about" onClick={openHandle}>
                            About
                        </SidebarLink>
                        <SidebarLink to="/menus" onClick={openHandle}>
                            Menus
                        </SidebarLink>
                        <SidebarLink to="/myorder" onClick={openHandle}>
                            My order(s)
                        </SidebarLink>
                        <SidebarLink to="/reservetable" onClick={openHandle}>
                            Reserve your table
                        </SidebarLink>
                        <SidebarLink to="/cart" onClick={openHandle}>
                            <FaShoppingCart style={{ marginRight: "6" }} />{cartCount}
                        </SidebarLink>
                        <SidebarLink to="/reservetable" onClick={openHandle}>
                            Reserve your table
                        </SidebarLink>
                        {isAuthenticated ? <SidebarLink to="/" onClick={() => {
                            logout();
                            openHandle();
                        }}>Sign out </SidebarLink> : <SidebarLink to="/signin" onClick={openHandle}>Sign in </SidebarLink>}
                    </SidebarMenu>
                    <SideBtnWrap>
                        {isAuthenticated ? <SidebarRoute to="/signup" onClick={openHandle} >{`Welcome ${user.username}`}</SidebarRoute> : <SidebarRoute to="/signup" onClick={openHandle} >Sign Up</SidebarRoute>}
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
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

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);