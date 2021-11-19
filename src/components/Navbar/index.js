import React from 'react'
import { Bars, Nav, NavIcon, NavLink, NavbarContainer, NavLogo, Logo, Img, P, MobileIcon, NavMenuWrap, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
import LogoNav from "../../images/logonav.png"

const Navbar = ({toggle}) => { 
    
    const scrollHome = () => {
        scroll.scrollToTop();
    } 

    return ( 
        <>
            <Nav> 
            {/* <Nav scrollNav={scrollNav}> */}
                <NavbarContainer>              
                    <NavLogo to="/highend_restaurant" smooth={true}
                            onClick={scrollHome}
                            duration={1000} spy={true}
                            exact='true' offset={-80}
                            >
                        <Logo>
                            <Img src={LogoNav} alt="logo" />
                        </Logo>
                        <P>ABC Restaurant</P>
                    </NavLogo>
                   
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon >
                   <NavMenuWrap>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/highend_restaurant">
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/menu">
                                Menu
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/beverages">
                                Beverages
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">
                                About us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>          
                    <NavBtn>
                        <NavBtnLink to ="/reserve">Reserve</NavBtnLink>
                    </NavBtn>
                    </NavMenuWrap>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
