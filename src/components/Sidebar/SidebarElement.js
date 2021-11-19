import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer =styled.div`
position: fixed;
z-index: 99;
width: 350px;
height: 100%;
background: #b1a296;
display: grid;
align-items: center;
top: 0;
transition: 0.3s ease-in-out;
right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};

@media screen and (max-width: 400px) {
    width: 100%
}

`

export const CloseIcon =styled(FaTimes)`
color: black;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
border: transparent;
font-size: 2rem;
outline: none;
cursor: pointer;
`
 
export const Menu =styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(5, 60px);
}
`

export const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
font-weight: 300;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: black;
cursor: pointer;

&:hover{
    color: #fff;
    transition: 0.2s ease-in-out;
}
`

export const BtnWrap =styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(Link)`
background: #557a95;
white-space: nowrap;
padding: 16px 64px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration: none;
font-weight: 300;
text-transform: uppercase;

&:hover{
    transition: 0.2s ease-in-out;
    background: white;
    color: #010606
}
`