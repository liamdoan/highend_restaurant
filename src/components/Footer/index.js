import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer,
        FooterLinksWrapper, FooterLinkItems, FooterLinksTitle, FooterPItemsWrapper, FooterPItems, Img, P, P1,
        FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, Logo, BrandName, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElement'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
import LogoNav from "../../images/logonav.png"

const Footer = () => {
 
    const scrollHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterPItemsWrapper>
                        <FooterPItems>
                            <FooterLinksTitle>ABC Restaurant</FooterLinksTitle>
                                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt doloremque qui sint aut tempora ullam? Quibusdam dolores optio dolorem voluptatibus ipsa earum recusandae, dicta id culpa! Mollitia, provident saepe?</P>      
                        </FooterPItems>
                    </FooterPItemsWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinksTitle>Opening Hours</FooterLinksTitle>
                                    <P1>Mon - Thu: 11AM - 10PM</P1>
                                    <P1>Fri - Sat: 11AM - 11PM </P1>
                                    <P1>Sun: 11AM - 7PM</P1>
                                        
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinksTitle>Contact Us</FooterLinksTitle>
                                    <P1>ABC Restaurent</P1>
                                    <P1>Hämeenkatu 100, 33210, Tampere</P1>
                                    <P1>Tel: (+358) 123 456 789</P1>     
                            </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap> 
                        <SocialLogo to="/highend_restaurant" onClick={scrollHome}>
                            <Logo>
                                <Img src={LogoNav} alt="logo" />
                            </Logo>
                            <BrandName>ABC Restaurant</BrandName>
                        </SocialLogo>
                        <WebsiteRights>
                            &copy; {new Date().getFullYear()} All rights reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer