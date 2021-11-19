import styled from "styled-components";
import MenuImg from "../images/pagemenu.jpg"

export const MenuContainer = styled.div`
background: linear-gradient(to right, 
    rgba(0,0,0,0.7), 
    rgba(0,0,0,0.1)), url(${MenuImg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
color: white;
` 

export const MenuContent = styled.div`
height: calc(100vh - 80px);
max-height: 100%;
width: 100vw;
`

export const MenuItems = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color: white;
text-transform: uppercase;
line-height: 1;
/* background-color: red; */

@media screen and (max-width: 650px){
    width: 100%
}
`

export const MenuH1 = styled.h1`
    font-weight: 300;
    color: white;
    padding-top: 100px;
    
`