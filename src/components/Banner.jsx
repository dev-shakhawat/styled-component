import React from 'react'
import styled from 'styled-components';
import Container from './common/Container';
import Peragraph from './common/Peragraph';

const Banner = () => {
  return (
    <BnrContainer>
        <Container>
            <BnrWraper>
                <BnrTxt>
                    <HeaddingOne>
                        Lessons and insights 
                        <HeadClr>from 8 years</HeadClr>
                    </HeaddingOne>
                    <Peragraph pera="Where to grow your business as a photographer: site or social media?"/>
                    <Register>Register</Register>
                </BnrTxt>
                <BnrImg>
                    <Image src='/bnrimg.png' alt='bnr' />
                </BnrImg>
            </BnrWraper>
        </Container>
    </BnrContainer>
  )
}

export default Banner;

const BnrContainer = styled.div`
    padding: 196px 0 96px;
    background-color: #F5F7FA;
    
    @media (max-width: 1200px) {
        padding: 160px 0 80px;
    }
    
    @media (max-width: 768px) {
        padding: 120px 0 60px;
    }
    
    @media (max-width: 480px) {
        padding: 100px 0 40px;
    }
`

const BnrWraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    
    @media (max-width: 1024px) {
        gap: 30px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        text-align: center;
        gap: 50px;
    }
    
    @media (max-width: 480px) {
        gap: 40px;
    }
`

const BnrTxt = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 600px;
    
    @media (max-width: 768px) {
        align-items: center;
        max-width: 100%;
    }
`

const BnrImg = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    
    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
`

const HeaddingOne = styled.h1`
    color: #4D4D4D;
    font-size: 70px;
    font-weight: 600;
    line-height: 76px;
    font-family: "Inter", sans-serif;
    margin-bottom: 24px;
    
    @media (max-width: 1200px) {
        font-size: 60px;
        line-height: 66px;
    }
    
    @media (max-width: 1024px) {
        font-size: 50px;
        line-height: 56px;
    }
    
    @media (max-width: 768px) {
        font-size: 42px;
        line-height: 48px;
        margin-bottom: 20px;
    }
    
    @media (max-width: 480px) {
        font-size: 36px;
        line-height: 42px;
        margin-bottom: 16px;
    }
    
    @media (max-width: 360px) {
        font-size: 32px;
        line-height: 38px;
    }
`

const HeadClr = styled.span`
    color: #4CAF4F;
    display: block;
    
    @media (max-width: 768px) {
        display: inline;
        margin-left: 8px;
    }
    
    @media (max-width: 480px) {
        display: block;
        margin-left: 0;
        margin-top: 8px;
    }
`

const Register = styled.button`
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    background: #4CAF4F;
    padding: 14px 32px;
    border: none;
    border-radius: 6px;
    width: fit-content;
    margin-top: 32px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: #45a049;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(76, 175, 79, 0.3);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        margin-top: 28px;
        padding: 16px 36px;
        font-size: 16px;
    }
    
    @media (max-width: 480px) {
        margin-top: 24px;
        padding: 14px 32px;
        width: 100%;
        max-width: 280px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
    
    @media (max-width: 1200px) {
        max-width: 450px;
    }
    
    @media (max-width: 1024px) {
        max-width: 400px;
    }
    
    @media (max-width: 768px) {
        max-width: 350px;
    }
    
    @media (max-width: 480px) {
        max-width: 280px;
    }
    
    @media (max-width: 360px) {
        max-width: 250px;
    }
`