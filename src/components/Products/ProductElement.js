import styled from "styled-components/macro";
import { Link as LinkRouter } from 'react-router-dom'

export const ProductContainer = styled.div`
width: 100%;
min-height: 100vh;
padding: 5rem calc((100% - 1300px) /2);
background-color: #150f0f; 
color: white;
`
 
export const Heading = styled.h1`
font-size: clamp(2rem, 3vw, 5rem);
text-align: center;
margin: 0 20px 5rem 20px;
text-transform: uppercase;
font-weight: 300;
letter-spacing: 4px;
`

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0;
`

export const Card = styled.div`
/* background-color: red; */
margin: 0 2rem;
line-height: 2;
width: 300px;
`

export const Img =styled.img`
height: 250px;
min-width: 260px;
max-width: 100%;
box-shadow: 8px 8px #b1a296;
`


export const Title = styled.h2`
font-weight: 350;
font-size: 1.5rem;
text-transform: capitalize;
letter-spacing: 1.5px;
`

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align: center;
font-weight: 300;
letter-spacing: 0.2px;
`

export const Desc = styled.p`
margin-bottom: 1rem;
`

export const Price = styled.p`
margin-bottom: 1rem;
font-size: 2rem;
`

export const ButtonWrapper = styled.div`
display:flex;
justify-content: center;
`


export const Button = styled(LinkRouter)`
font-size: 1rem;
padding: 1rem 4rem;
border: none;
background: #b1a296;
color: white;
transition: 0.2s ease-out;
text-decoration: none;

&:hover{
background:transparent;
transition: 0.2s ease-out;
cursor: pointer;
color: white;
border: 1px solid white;
}
`
