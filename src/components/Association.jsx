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
                    <CustImg src="/customer1.png" alt="client1" />
                    <CustImg src="/client2.png" alt="client2" />
                    <CustImg src="/client3.png" alt="client3" />
                    <CustImg src="/client4.png" alt="client4" />
                    <CustImg src="/client5.png" alt="client5" />
                    <CustImg src="/client6.png" alt="client5" />
                    <Metall>Meet all customers <CustImg src="/Right.png" alt="Rught" /></Metall>
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
`

let AssoBox = styled.div`
padding: 0 17% 0 30%;
`

let Name = styled.h3`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 2px;
color: #4CAF4F;
`

let Customers = styled.div`
display: flex;
justify-content: space-between;
`

let CustImg = styled.img`
height: 40px;
`

let Metall = styled.a`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 2px;
color: #4CAF4F;
display: flex;
align-items: center;
`