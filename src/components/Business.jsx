import React from 'react'
import styled from 'styled-components';
import Container from './common/Container';
import Peragraph from './common/Peragraph';
import BusinessCounter from './common/BusinessCounter';

const Business = () => {

  const BusinessBoxInfo = [
    {
      icon: "member.png",
      number: 2245341,
      title: "member"
    },
    {
      icon: "club.png",
      number: 46328,
      title: "clubs"
    },
    {
      icon: "event.png",
      number: 828867,
      title: "Event Bookings"
    },
    {
      icon: "payment.png",
      number: 1926436,
      title: "Payments"
    },
  ]

  return (
    <Invent>
        <Container>
            <InventWraper>
                <InventTxt>
                    <HeadBlack>Helping a local </HeadBlack>
                    <HaedBrand>business reinvent itself</HaedBrand>
                    <Peragraph pera="We reached here with our hard work and dedication"/>
                </InventTxt>
                <BusinessBox>
                  {BusinessBoxInfo.map((item, index) => (
                    <BusinessCounter key={index} image={item.icon} number={item.number} title={item.title} />
                  ))}
                </BusinessBox>
            </InventWraper>
        </Container>
    </Invent>
  )
}

export default Business;

const Invent = styled.div`
    margin-top: 40px;
    background: #F5F7FA;
    padding: 64px 0;
    
    @media (max-width: 768px) {
        margin-top: 30px;
        padding: 48px 0;
    }
    
    @media (max-width: 480px) {
        margin-top: 20px;
        padding: 32px 0;
    }
`

const InventWraper = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;
    
    @media (max-width: 1024px) {
        gap: 60px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        gap: 32px;
    }
`

const InventTxt = styled.div`
    width: 50%;
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 600px;
    }
    
    @media (max-width: 480px) {
        max-width: 100%;
    }
`

const InventHead = styled.h2`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 16px;
    
    @media (max-width: 1024px) {
        font-size: 32px;
        line-height: 40px;
    }
    
    @media (max-width: 768px) {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 12px;
    }
    
    @media (max-width: 480px) {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 8px;
    }
`

const HeadBlack = styled(InventHead)`
    color: #4D4D4D;
    display: inline;
    
    @media (max-width: 768px) {
        display: block;
    }
`

const HaedBrand = styled(InventHead)`
    color: #4CAF4F;
    display: inline;
    margin-left: 8px;
    
    @media (max-width: 768px) {
        display: block;
        margin-left: 0;
    }
`

const BusinessBox = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    
    @media (max-width: 1024px) {
        gap: 30px;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 500px;
        gap: 24px;
    }
    
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 20px;
        max-width: 300px;
    }
    
    @media (max-width: 360px) {
        max-width: 100%;
    }
`