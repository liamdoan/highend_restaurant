import React from 'react'
import {SidebarContainer, Icon, CloseIcon, 
        Menu, SidebarLink, BtnWrap, SidebarRoute} from './SidebarElement'
import { animateScroll as scroll} from 'react-scroll'

const Sidebar = ({isOpen, toggle}) => {

 
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <Menu>
                <SidebarLink to="/highend_restaurant" >Home</SidebarLink>
                <SidebarLink to="/menu" >Menu</SidebarLink>
                <SidebarLink to="/beverages" >Beverages</SidebarLink>
                <SidebarLink to="/about" >About us</SidebarLink>
                <SidebarLink to="/contact" >Contact</SidebarLink>
            </Menu>
            <BtnWrap>
                <SidebarRoute to="/reserve">Reserve table</SidebarRoute>
            </BtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
 