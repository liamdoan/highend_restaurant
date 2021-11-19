import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

// import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
/* background: ${({scrollNav}) => (scrollNav ? 'black' : 'transparent') }; */
background: linear-gradient(
    to right, 
    rgba(0,0,0,0.7), 
    rgba(0,0,0,0.1));
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`


export const NavLogo = styled(LinkRouter)` 
color: white;
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
margin-left: 24px;
text-decoration: none;
`
export const Logo = styled.div`
position: inherit;
`

export const Img = styled.img`
height: 100%;
width: 40px;
`

export const P = styled.p`
font-size: clamp(1.2rem, 1.8vw, 1.5rem);
font-weight: 400;
margin-left: 5px;

@media screen and (max-width: 359px) {
    display: none;
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 798px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white
}
`
export const NavMenuWrap =styled.div`
/* background-color: red; */
display: flex;
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 798px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkRouter)`
color: white;
font-weight: 300;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    /* border-bottom: 3px solid #fff; */
    color: red
}

&:hover{
    color: #dac8b9;
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-in-out;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-left: 10px;

@media screen and (max-width: 798px){
    display: none;
}
` 

export const NavBtnLink = styled(LinkRouter)`
background-color: #557a95;
white-space: nowrap;
padding: 10px 25px 14px;
color: white;
font-weight: 350;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
transition: all 0.2s ease-in-out;
background: #f0c818;
color: #010606;
}
`