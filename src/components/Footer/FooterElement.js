import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
background-color: black;
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
padding: 5px;
display: flex;
flex-wrap: wrap;
justify-content: center;
/* Wrapper1 */
/* background-color: blue; */

@media screen and (max-width: 820px){
padding-top: 32px;
flex-direction: column;
}
`
export const FooterLinksWrapper = styled.div`
display: flex;
/* Wrapper2 */
/* background-color: green; */

@media screen and (max-width: 820px){
    flex-direction: row;
}
`

export const FooterLinkItems = styled.div`
/* Wrapper3 */
/* background-color: purple; */
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin: 16px;
text-align: left;
width: 200px;
box-sizing: border-box;
color: white;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%
}
`

export const FooterPItemsWrapper = styled.div`
display: flex;
/* Wrapper4 */
/* background-color: pink; */
justify-content: center;
margin-bottom: 10px;
`

export const FooterPItems = styled.div`
/* Wrapper5 */
/* background-color: orange; */
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin: 16px;
text-align: left;
width: 380px;
box-sizing: border-box;
color: white;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%
}
`

export const FooterLinksTitle = styled.h1`
font-size: 14px;
margin-bottom: 16px;
text-transform: uppercase;
letter-spacing: 0.2px;
`

export const P = styled.p`
color: white;
font-size: 14px;
font-weight: 300;
letter-spacing: 0.2px;
`
export const P1 = styled.p`
color: white;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: clamp(12px, 2vw, 14px);
font-weight: 300;
letter-spacing: 0.1px;
`

// export const FooterLink = styled(Link)`
// color: white;
// text-decoration: none;
// margin-bottom: 0.5rem;
// font-size: 14px;

// &:hover{
//     color: #01bf71;
//     transition: 0.3s ease-in-out;
// }
// `

export const SocialMedia=styled.div`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

 @media screen and (max-width: 820px) {
     flex-direction: column;
 }
`

export const SocialLogo = styled(Link)`
color: white;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`

export const WebsiteRights = styled.div`
color: white;
margin-bottom: 16px;
`

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

export const SocialIconLink = styled.a`
color: white;
font-size: 24px;

&:hover{
    color: #b1a296;
    transition: 0.3s ease-in-out;
}
`


