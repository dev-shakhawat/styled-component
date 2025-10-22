import React from 'react'
import Title from './common/Title'
import styled, { keyframes } from 'styled-components'
import Container from './common/Container'

const Client = () => {
    const clientImg = ["client1.png", "client2.png", "client3.png", "client4.png", "client5.png", "client6.png", "client7.png"]
    
    // Duplicate the array for seamless loop
    const duplicatedClients = [...clientImg, ...clientImg];

    return (
        <ClientSection>
            <Container>
                <Title heading="Our Clients" para="We have been working with some Fortune 500+ clients"/>
                <Clients>
                    <Clientbx>
                        {duplicatedClients.map((clientImage, index) => (
                            <ClientItem key={index} src={clientImage} alt={`client-${index}`} />
                        ))}
                    </Clientbx>
                </Clients>
            </Container>
        </ClientSection>
    )
}

export default Client

const ClientSection = styled.div`
    margin-top: 40px;
    padding: 40px 0;
    
    @media (max-width: 768px) {
        margin-top: 30px;
        padding: 30px 0;
    }
    
    @media (max-width: 480px) {
        margin-top: 20px;
        padding: 20px 0;
    }
`

const Clients = styled.div`
    position: relative;
    overflow-x: hidden;
    height: 80px;
    margin-top: 16px;
    
    @media (max-width: 1024px) {
        height: 70px;
    }
    
    @media (max-width: 768px) {
        height: 60px;
        margin-top: 12px;
    }
    
    @media (max-width: 480px) {
        height: 50px;
        margin-top: 8px;
    }
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 100px;
        height: 100%;
        z-index: 2;
    }
    
    &::before {
        left: 0;
        background: linear-gradient(90deg, #fff 0%, transparent 100%);
    }
    
    &::after {
        right: 0;
        background: linear-gradient(270deg, #fff 0%, transparent 100%);
    }
`

const Scroll = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`;

const Clientbx = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    width: max-content;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${Scroll} 30s linear infinite;
    
    @media (max-width: 1200px) {
        gap: 50px;
    }
    
    @media (max-width: 1024px) {
        gap: 40px;
    }
    
    @media (max-width: 768px) {
        gap: 30px;
    }
    
    @media (max-width: 480px) {
        gap: 25px;
    }
    
    &:hover {
        animation-play-state: paused;
    }
`

const ClientItem = styled.img`
    height: 40px;
    width: auto;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
    
    &:hover {
        filter: grayscale(0%);
        opacity: 1;
        transform: scale(1.1);
    }
    
    @media (max-width: 1024px) {
        height: 35px;
    }
    
    @media (max-width: 768px) {
        height: 30px;
    }
    
    @media (max-width: 480px) {
        height: 25px;
    }
    
    @media (max-width: 360px) {
        height: 20px;
    }
`