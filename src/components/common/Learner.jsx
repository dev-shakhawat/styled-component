import React from 'react'
import styled from 'styled-components';
import Container from './Container';
import Peragraph from './Peragraph';

const Learner = ({image , pera , head }) => {
  return (
     <Container>
        <MainLearner>
            <LearnerImgBx>
                <LearnerImg src={image} alt="img"/> 
            </LearnerImgBx>
            <LearnerTxtBx>
                <LearnHead>{head}</LearnHead>
                <Peragraph pera={pera} $width="600px" />
                <LearnMore href="#">Learn More</LearnMore>
            </LearnerTxtBx>
        </MainLearner>
     </Container>
  )
}

export default Learner;

const MainLearner = styled.div`
    display: flex;
    padding: 48px;
    gap: 60px;
    align-items: center;
    
    @media (max-width: 1024px) {
        padding: 40px;
        gap: 50px;
    }
    
    @media (max-width: 900px) {
        padding: 32px;
        gap: 40px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 24px;
        gap: 32px;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        padding: 20px;
        gap: 28px;
    }
    
    @media (max-width: 360px) {
        padding: 16px;
        gap: 24px;
    }
`

const LearnerImgBx = styled.div`
    width: 33%;
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }
    
    @media (max-width: 480px) {
        max-width: 300px;
    }
`

const LearnerImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    
    @media (max-width: 768px) {
        max-width: 100%;
    }
`

const LearnerTxtBx = styled.div`
    width: 66%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
    }
`

const LearnHead = styled.h2`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #4D4D4D;
    width: 70%;
    margin-bottom: 24px;
    
    @media (max-width: 1200px) {
        font-size: 32px;
        line-height: 40px;
        width: 80%;
    }
    
    @media (max-width: 1024px) {
        font-size: 28px;
        line-height: 36px;
        width: 85%;
    }
    
    @media (max-width: 900px) {
        font-size: 26px;
        line-height: 34px;
        width: 90%;
    }
    
    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
        width: 100%;
        margin-bottom: 20px;
    }
    
    @media (max-width: 480px) {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 16px;
    }
    
    @media (max-width: 360px) {
        font-size: 20px;
        line-height: 28px;
    }
`

const LearnMore = styled.a`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 14px 32px;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    background: #4CAF4F;
    color: white;
    width: fit-content;
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
        align-self: center;
        padding: 16px 36px;
        font-size: 16px;
    }
    
    @media (max-width: 480px) {
        padding: 14px 32px;
        width: 100%;
        max-width: 280px;
        text-align: center;
    }
`