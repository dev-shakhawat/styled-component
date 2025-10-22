import React from 'react'
import styled from 'styled-components';
import Container from './common/Container';

const Demo = () => {
  return (
    <DemoBx>
        <Container>
            <Demotxt>Pellentesque suscipit fringilla libero eu.</Demotxt>
            <BtnBox> 
                <GoDemo href="#">
                    Got to demo  
                    <ArrowIcon src="/RightWhite.png" alt="Right" /> 
                </GoDemo>
            </BtnBox>
        </Container>
    </DemoBx>
  )
}

export default Demo;

const DemoBx = styled.div`
    margin-top: 150px;
    background: #F5F7FA;
    padding: 34px 0;
    
    @media (max-width: 1200px) {
        margin-top: 120px;
        padding: 30px 0;
    }
    
    @media (max-width: 1024px) {
        margin-top: 100px;
        padding: 28px 0;
    }
    
    @media (max-width: 768px) {
        margin-top: 80px;
        padding: 24px 0;
    }
    
    @media (max-width: 480px) {
        margin-top: 60px;
        padding: 20px 0;
    }
`

const Demotxt = styled.h2`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 64px;
    line-height: 76px;
    width: 52%;
    margin: auto;
    text-align: center;
    color: #4D4D4D;
    
    @media (max-width: 1200px) {
        font-size: 56px;
        line-height: 68px;
        width: 60%;
    }
    
    @media (max-width: 1024px) {
        font-size: 48px;
        line-height: 60px;
        width: 65%;
    }
    
    @media (max-width: 900px) {
        font-size: 42px;
        line-height: 52px;
        width: 70%;
    }
    
    @media (max-width: 768px) {
        font-size: 36px;
        line-height: 44px;
        width: 80%;
    }
    
    @media (max-width: 600px) {
        font-size: 32px;
        line-height: 40px;
        width: 85%;
    }
    
    @media (max-width: 480px) {
        font-size: 28px;
        line-height: 36px;
        width: 90%;
    }
    
    @media (max-width: 360px) {
        font-size: 24px;
        line-height: 32px;
        width: 95%;
    }
`

const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
    
    @media (max-width: 768px) {
        margin-top: 28px;
    }
    
    @media (max-width: 480px) {
        margin-top: 24px;
    }
`

const GoDemo = styled.a`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 14px 24px;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    background: #4CAF4F;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
        background: #45a049;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(76, 175, 79, 0.3);
        gap: 12px;
    }
    
    &:active {
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        padding: 16px 28px;
        font-size: 16px;
    }
    
    @media (max-width: 480px) {
        padding: 14px 24px;
        font-size: 15px;
        width: 100%;
        max-width: 200px;
        justify-content: center;
    }
`

const ArrowIcon = styled.img`
    height: 16px;
    width: auto;
    transition: transform 0.3s ease;
    
    ${GoDemo}:hover & {
        transform: translateX(3px);
    }
    
    @media (max-width: 768px) {
        height: 18px;
    }
    
    @media (max-width: 480px) {
        height: 16px;
    }
`