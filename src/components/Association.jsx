import React from 'react'
import styled from 'styled-components';
import Container from './common/Container';
import Peragraph from './common/Peragraph';

const Association = () => {
  return (
    <AssoMain>
        <Container>
            <AssoBox>
                <Peragraph pera="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna." />
                <Name>Tim Smith</Name>
                <Peragraph pera="British Dragon Boat Racing Association" />
                <Customers>
                    <CustomerLogos>
                        <CustImg src="/customer1.png" alt="client1" />
                        <CustImg src="/client2.png" alt="client2" />
                        <CustImg src="/client3.png" alt="client3" />
                        <CustImg src="/client4.png" alt="client4" />
                        <CustImg src="/client5.png" alt="client5" />
                        <CustImg src="/client6.png" alt="client6" />
                    </CustomerLogos>
                    <Metall href="#">
                        Meet all customers 
                        <ArrowIcon src="/Right.png" alt="Right" />
                    </Metall>
                </Customers>
            </AssoBox>
        </Container>
    </AssoMain>
  )
}

export default Association;

const AssoMain = styled.div`
    padding: 33px 0;
    background: #F5F7FA;
    
    @media (max-width: 768px) {
        padding: 25px 0;
    }
    
    @media (max-width: 480px) {
        padding: 20px 0;
    }
`

const AssoBox = styled.div`
    padding: 0 17% 0 30%;
    
    @media (max-width: 1200px) {
        padding: 0 15% 0 25%;
    }
    
    @media (max-width: 1024px) {
        padding: 0 12% 0 20%;
    }
    
    @media (max-width: 768px) {
        padding: 0 8%;
    }
    
    @media (max-width: 480px) {
        padding: 0 5%;
    }
    
    @media (max-width: 360px) {
        padding: 0 3%;
    }
`

const Name = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4CAF4F;
    margin: 16px 0 8px 0;
    
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
        margin: 14px 0 6px 0;
    }
    
    @media (max-width: 480px) {
        font-size: 16px;
        line-height: 22px;
        margin: 12px 0 4px 0;
    }
`

const Customers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
        margin-top: 28px;
    }
    
    @media (max-width: 480px) {
        gap: 20px;
        margin-top: 24px;
    }
`

const CustomerLogos = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
    flex-wrap: wrap;
    
    @media (max-width: 1200px) {
        gap: 30px;
    }
    
    @media (max-width: 1024px) {
        gap: 25px;
    }
    
    @media (max-width: 768px) {
        gap: 20px;
        justify-content: center;
    }
    
    @media (max-width: 480px) {
        gap: 15px;
    }
    
    @media (max-width: 360px) {
        gap: 12px;
    }
`

const CustImg = styled.img`
    height: 40px;
    width: auto;
    object-fit: contain;
    
    @media (max-width: 1024px) {
        height: 35px;
    }
    
    @media (max-width: 768px) {
        height: 32px;
    }
    
    @media (max-width: 480px) {
        height: 28px;
    }
    
    @media (max-width: 360px) {
        height: 24px;
    }
`

const Metall = styled.a`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4CAF4F;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    white-space: nowrap;
    
    &:hover {
        color: #45a049;
        transform: translateX(4px);
    }
    
    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 24px;
    }
    
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 22px;
    }
    
    @media (max-width: 480px) {
        font-size: 15px;
        line-height: 20px;
    }
`

const ArrowIcon = styled.img`
    height: 20px;
    width: auto;
    
    @media (max-width: 768px) {
        height: 18px;
    }
    
    @media (max-width: 480px) {
        height: 16px;
    }
`