import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './styles';
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Recommendation</FooterLink>
                        <FooterLink to="/">Blog</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Legal</FooterLinkTitle>
                        <FooterLink to="/">Terms & Condition</FooterLink>
                        <FooterLink to="/">Privacy Policy</FooterLink>
                        <FooterLink to="/">Cookies</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems> {/* link into the website */}
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">+123 456 789</FooterLink>
                        <FooterLink to="/">pizzeria@pizza.com</FooterLink>
                    </FooterLinkItems>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Pizzeria
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//www.github.com/" target="_blank" aria-label="GitHub">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;