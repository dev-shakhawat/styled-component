import React from 'react'
import styled from 'styled-components';
import Container from './common/Container';
import Peragraph from './common/Peragraph';

const Footer = () => {
  return (
    <Footerbx>
        <Container>
            <FootWraper>
                <FirstBox>
                    <Footlogo src="/footlogo.png" alt="footlogo" />
                    <Text>Copyright © 2020 Nexcent ltd.</Text>
                    <Text>All rights reserved</Text>
                    <Social>
                        <Li><SocialIcon src="/insta.png" alt="insta" /></Li>
                        <Li><SocialIcon src="/web.png" alt="web" /></Li>
                        <Li><SocialIcon src="/twitter.png" alt="twitter" /></Li>
                        <Li><SocialIcon src="/youtube.png" alt="youtube" /></Li>
                    </Social>
                </FirstBox>
                <Box>
                    <BoxHead>Company</BoxHead>
                    <Ul>
                        <Li><LinkText>About us</LinkText></Li>
                        <Li><LinkText>Blog</LinkText></Li>
                        <Li><LinkText>Contact us</LinkText></Li>
                        <Li><LinkText>Pricing</LinkText></Li>
                        <Li><LinkText>Testimonials</LinkText></Li>
                    </Ul>
                </Box>
                <Box>
                    <BoxHead>Support</BoxHead>
                    <Ul>
                        <Li><LinkText>Help center</LinkText></Li>
                        <Li><LinkText>Terms of service</LinkText></Li>
                        <Li><LinkText>Legal</LinkText></Li>
                        <Li><LinkText>Privacy policy</LinkText></Li>
                        <Li><LinkText>Status</LinkText></Li>
                    </Ul>
                </Box>
                <EmailBox>
                    <BoxHead>Stay up to date</BoxHead>
                    <InputWrapper>
                        <Input type="email" placeholder='Your email address' />
                        <SendButton type="button">
                            <SendIcon src='/send.png' alt='send'/>
                        </SendButton>
                    </InputWrapper>
                </EmailBox>
            </FootWraper>
        </Container>
    </Footerbx>
  )
}

export default Footer;

const Footerbx = styled.div`
    padding: 64px   74px;
    background: #263238;
    
    @media (max-width: 1024px) {
        padding: 48px 0 54px;
    }
    
    @media (max-width: 768px) {
        padding: 40px 0 44px;
    }
    
    @media (max-width: 480px) {
        padding: 32px 5px 36px;
    }
`

const FootWraper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    
    @media (max-width: 1024px) {
        gap: 30px;
    }
    
    @media (max-width: 900px) {
        flex-wrap: wrap;
        gap: 40px;
    }
    
    @media (max-width: 768px) {
        gap: 30px;
    }
    
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 32px;
    }
    
    @media (max-width: 480px) {
        gap: 28px;
    }
`

const FirstBox = styled.div`
    width: 35%;
    
    @media (max-width: 900px) {
        width: 45%;
    }
    
    @media (max-width: 768px) {
        width: 40%;
    }
    
    @media (max-width: 600px) {
        width: 100%;
        text-align: center;
    }
`

const Footlogo = styled.img`
    margin-bottom: 40px;
    max-width: 100%;
    height: auto;
    
    @media (max-width: 1024px) {
        margin-bottom: 32px;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 28px;
    }
    
    @media (max-width: 480px) {
        margin-bottom: 24px;
        height: 32px;
        width: auto;
    }
`

const Box = styled.div`
    position: relative;
    
    @media (max-width: 900px) {
        width: calc(50% - 20px);
    }
    
    @media (max-width: 600px) {
        width: 100%;
    }
`

const EmailBox = styled(Box)`
    @media (max-width: 900px) {
        width: 100%;
        max-width: 400px;
        margin-top: 20px;
    }
    
    @media (max-width: 600px) {
        max-width: 100%;
        margin-top: 0;
    }
`

const Text = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: rgba(245, 247, 250, 0.65);
    margin: 8px 0;
    
    @media (max-width: 480px) {
        font-size: 13px;
        line-height: 18px;
    }
`

const LinkText = styled(Text)`
    transition: color 0.3s ease;
    cursor: pointer;
    
    &:hover {
        color: #4CAF4F;
    }
`

const BoxHead = styled.h4`
    font-family: "Inter", sans-serif;
    font-size: 20px;
    line-height: 28px;
    margin: 0 0 16px 0;
    padding: 0;
    font-weight: 600;
    color: white;
    
    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 14px;
    }
    
    @media (max-width: 480px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 12px;
    }
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 8px;
`

const Li = styled.li`
    list-style: none;
`

const InputWrapper = styled.div`
    position: relative;
    margin-top: 20px;
    max-width: 300px;
    
    @media (max-width: 1024px) {
        max-width: 280px;
    }
    
    @media (max-width: 900px) {
        max-width: 100%;
    }
    
    @media (max-width: 600px) {
        max-width: 100%;
    }
    
    @media (max-width: 480px) {
        margin-top: 16px;
    }
`

const Input = styled.input`
    background-color: rgba(217, 219, 225, 0.52);
    color: white;
    border: none;
    outline: none;
    padding: 12px 45px 12px 16px;
    border-radius: 8px;
    width: 80%;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    transition: all 0.3s ease;
    
    &::placeholder {
        color: rgba(245, 247, 250, 0.65);
        font-size: 14px;
    }
    
    &:focus {
        background-color: rgba(217, 219, 225, 0.7);
        box-shadow: 0 0 0 2px rgba(76, 175, 79, 0.3);
    }
    
    /* Mobile-specific styles */
    @media (max-width: 768px) {
        padding: 14px 45px 14px 16px;
        font-size: 16px;
        
        &::placeholder {
            font-size: 14px;
        }
    }
    
    @media (max-width: 480px) {
        padding: 16px 50px 16px 20px;
        font-size: 16px;
        border-radius: 10px;
        
        &::placeholder {
            font-size: 15px;
        }
    }
    
    @media (max-width: 360px) {
        padding: 14px 45px 14px 16px;
        font-size: 15px;
    }
`

const SendButton = styled.button`
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    transition: all 0.3s ease;
    border-radius: 4px;
    
    &:hover {
        transform: translateY(-50%) scale(1.1);
        background: rgba(255, 255, 255, 0.1);
    }
    
    &:active {
        transform: translateY(-50%) scale(0.95);
    }
    
    @media (max-width: 480px) {
        right: 16px;
        padding: 8px;
    }
    
    @media (max-width: 360px) {
        right: 12px;
        padding: 6px;
    }
`

const SendIcon = styled.img`
    height: 18px;
    width: auto;
    transition: transform 0.3s ease;
    
    ${SendButton}:hover & {
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        height: 20px;
    }
    
    @media (max-width: 480px) {
        height: 22px;
    }
    
    @media (max-width: 360px) {
        height: 20px;
    }
`

const Social = styled.ul`
    display: flex;
    margin-top: 40px;
    padding: 0;
    gap: 16px;
    
    @media (max-width: 1024px) {
        margin-top: 32px;
    }
    
    @media (max-width: 768px) {
        margin-top: 28px;
        gap: 12px;
    }
    
    @media (max-width: 600px) {
        justify-content: center;
        margin-top: 24px;
    }
    
    @media (max-width: 480px) {
        gap: 10px;
        margin-top: 20px;
    }
`

const SocialIcon = styled.img`
    height: 24px;
    width: auto;
    transition: transform 0.3s ease;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.1);
    }
    
    @media (max-width: 480px) {
        height: 20px;
    }
`