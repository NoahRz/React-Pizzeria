import React from 'react';
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

const Sidebar = ({isOpen, openHandle}) => {
    return (
        <div>
            <SidebarContainer isOpen= {isOpen}>
                <Icon  onClick={openHandle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/about">
                            About
                        </SidebarLink>
                        <SidebarLink to="/order">
                            Order
                        </SidebarLink>
                        <SidebarLink to="/menus">
                            Menus
                        </SidebarLink>
                        <SidebarLink to="/reservetable">
                            Reserve your table
                        </SidebarLink>
                        <SidebarLink to="/signin">
                            Sign in
                        </SidebarLink>
                        <SidebarLink to="/setting">
                            Setting
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/sign">Sign Up</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar;