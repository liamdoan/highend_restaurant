import styled from "styled-components";
import ReserveImg from '../images/reserve.jpg';
import { Link } from "react-router-dom";

export const Container = styled.div`
/* min-height: 692px; */
top: 0px;
bottom: 0;
left: 0;
right: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
    to right, 
    rgba(0,0,0,0.7), 
    rgba(0,0,0,0.4)), url(${ReserveImg});
height: 100%;
background-position: center;
background-size: cover;
`

export const FormWrap = styled.div`
height: 100%;
padding-top: 80px;
padding-bottom: 30px;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px){
    height: 80%
}
`

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 20px;
padding-bottom: 20px;
/* background-color: red; */


@media screen and (max-width: 480px) {
    padding: 10px
}
`

export const Form = styled.form`
background: #334a5a;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 30px 30px;
border-radius: 4px;
box-shadow: 0 1px 20px rgba(0,0,0,0.9);

@media screen and (max-width: 400px) {
    padding: 26px 15px
}
`

export const FormH1 = styled.h1`
margin-bottom: 30px;
color: white;
font-size: 20px;
font-weight: 300;
text-align: center;
text-transform: uppercase;
`

export const Mess = styled.p`
text-align: center;
font-size: clamp(12px, 2.8vw, 15px);
font-weight: 500;
color: greenyellow;
font-style: italic;
margin-bottom: 12px;
`

export const FormLabel = styled.label`
margin-bottom: 7px;
font-size: 14px;
color: white;
font-weight: 300;

::after {
    content: "*";
    color: #ff0000;
    position: absolute;
    padding-left: 5px;
    font-size: 20px;
    font-weight: 500;
}
`

export const FormInput = styled.input`
padding: 10px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`

export const FormButton = styled.button`
background: #b1a296;
padding: 10px 0;
border: none;
border-radius: 4px;
color: white;
font-size: 20px;
font-weight: 300;
cursor: pointer;
letter-spacing: 1px;

&:hover {
    background-color: #f0c818;
    transition: 0.2s ease-in-out;
    color: black;
}
`

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: white;
font-size: 12px;
font-style: italic;
`

export const Text1 = styled.span`
text-align: center;
margin-top: 10px;
color: white;
font-size: 12px;
font-style: italic;
`