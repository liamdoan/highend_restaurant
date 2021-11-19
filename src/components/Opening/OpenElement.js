import styled from "styled-components";
import ImgBg from '../../images/foodbg.jpg';
import { Link as LinkRouter } from 'react-router-dom'


export const OpenContainer= styled.div`
background: linear-gradient(
    to right, 
    rgba(0,0,0,0.7), 
    rgba(0,0,0,0.1)), url(${ImgBg});
height: 100vh;
background-position: center;
background-size: cover;
`

export const OpenContent = styled.div`
/* height: calc(100vh - 0px); */
max-height: 100%;
width: 97vw;
padding: 0rem calc((100vw - 1300px) / 2);
`

export const OpenItems = styled.div`
/* background-color: pink; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color: white;
/* text-transform: uppercase; */
line-height: 1;
/* font-weight: bold; */

@media screen and (max-width: 650px){
    width: 100%
}
`

export const OpenH1 = styled.h1`
font-size: clamp(2.5rem, 10vw, 5rem);
margin-top: 80px;
padding-bottom: 5px;
margin-bottom: 1rem;
box-shadow: 3px 5px #b1a296;
letter-spacing: 4px;
text-transform: uppercase;
font-weight: 300;
opacity: 95%;

`

export const OpenP=styled.p`
font-size: clamp(1rem, 3vw, 2rem);
margin-bottom: 2rem;
text-transform: uppercase;
opacity: 95%;
`

export const OpenBtn = styled(LinkRouter)`
font-size: clamp(0.9rem, 3vw, 1.2rem);
padding: 1rem 3rem;
border: 1px solid white;
background: transparent;
color: white;
transition: 0.2s ease-out;
text-transform: uppercase;
text-decoration: none;
/* opacity: 95%; */

&:hover{
    background: #f0c818;
    transition: 0.2s ease-out;
    color: black;
    cursor: pointer;
    border: none;
}
`