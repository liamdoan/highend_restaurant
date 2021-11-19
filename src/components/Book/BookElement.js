import styled from "styled-components";
import ReservePic from '../../images/reserve.jpg';
import { Link as LinkRouter } from 'react-router-dom'


export const BookContainer = styled.div`
background: linear-gradient(
    to right,  
    rgba(0,0,0,0.7), 
    rgba(0,0,0,0.5)), url(${ReservePic}); 
height: 100vh;
max-height: 500px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
text-align: center;
padding: 0 1rem;

h1{
    font-size: clamp(2rem, 3vw, 5rem);
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 4px;
    opacity: 95%;
}
p{
    font-size: clamp(1.2rem, 1.5vw, 2rem);
    margin-bottom: 30px;
    padding: 0 80px 30px 80px;
    /* opacity: 95%; */
    letter-spacing: 1px;
    font-weight: 300;

    @media screen and (max-width: 540px){
        padding: 0 0px 30px
    }
}
`

export const Button = styled(LinkRouter)`
font-size: clamp(1rem, 3vw, 1.2rem);
padding: 1rem 2.5rem;
border: none;
background: #557a95;
color: #fff;
transition: 0.2s ease-out;
font-weight: 300;
letter-spacing: 1px;
text-decoration: none;
/* opacity: 90%; */

&:hover{
    color: black;
    background: #f0c818;
    transition: 0.2s ease-out;
    cursor: pointer;
}
`

