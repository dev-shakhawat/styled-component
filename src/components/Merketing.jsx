import React from 'react'
import Container from './common/Container';
import Title from './common/Title';
import styled from 'styled-components';

const Merketing = () => {
    let MerketData = [
        {head: "Creating Streamlined Safeguarding Processes with OneRen" },
        {head: "What are your safeguarding responsibilities and how can you manage them?" },
        {head: "Revamping the Membership Model with Triathlon Australia" },
    ]
  return (
    <Market>
        <Container>
            <Title heading="Caring is the new marketing" $peramargin="30px" $Perawidth="630px" para="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​" />
            <CartBox>
               {MerketData.map((item, index) => (
               <MarketCart key={index}>
                   <MarketCartHead>{item.head}</MarketCartHead>
                   <Readmore href="#">
                       Readmore 
                       <ArrowIcon src="/Right.png" alt="Right" />
                   </Readmore>
               </MarketCart>
               ))}
            </CartBox>
        </Container>
    </Market>
  )
}

export default Merketing;

const Market = styled.div`
    margin-top: 48px;
    padding: 40px 0;
    
    @media (max-width: 768px) {
        margin-top: 32px;
        padding: 30px 0;
    }
    
    @media (max-width: 480px) {
        margin-top: 24px;
        padding: 20px 0;
    }
`

const CartBox = styled.div`
    display: flex;
    gap: 100px;
    text-align: center;
    margin-top: 190px;
    
    @media (max-width: 1200px) {
        gap: 60px;
        margin-top: 120px;
    }
    
    @media (max-width: 1024px) {
        gap: 40px;
        margin-top: 100px;
    }
    
    @media (max-width: 900px) {
        gap: 30px;
        margin-top: 80px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
        margin-top: 60px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
    
    @media (max-width: 480px) {
        gap: 24px;
        margin-top: 50px;
    }
`

const MarketCart = styled.div`
    padding: 16px;
    background: #F5F7FA;
    border-radius: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    flex: 1;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: rgba(99, 99, 99, 0.3) 0px 8px 24px 0px;
    }
    
    @media (max-width: 768px) {
        padding: 20px;
        width: 100%;
    }
    
    @media (max-width: 480px) {
        padding: 16px;
        border-radius: 16px;
    }
`

const MarketCartHead = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #717171;
    margin-bottom: 24px;
    
    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 20px;
    }
    
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 20px;
    }
    
    @media (max-width: 480px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 16px;
    }
`

const Readmore = styled.a`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4CAF4F;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
        color: #45a049;
        gap: 12px;
    }
    
    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 26px;
    }
    
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 26px;
    }
    
    @media (max-width: 480px) {
        font-size: 16px;
        line-height: 24px;
        gap: 8px;
    }
`

const ArrowIcon = styled.img`
    height: 20px;
    width: auto;
    transition: transform 0.3s ease;
    
    ${Readmore}:hover & {
        transform: translateX(3px);
    }
    
    @media (max-width: 480px) {
        height: 18px;
    }
`