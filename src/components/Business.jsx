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
                    <Peragraph  pera="We reached here with our hard work and dedication"/>
                </InventTxt>
                <BusinessBox>
                  {BusinessBoxInfo.map((item , index)=>(<BusinessCounter key={index} image={item.icon} number={item.number} title={item.title}    />))}
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
`

let InventWraper = styled.div`
display: flex;
`

let InventTxt = styled.div`
width: 50%;

`

let InventHead = styled.h2`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 36px;
line-height: 20px;
`
let HeadBlack = styled(InventHead)`
color: #4D4D4D;
`

let HaedBrand = styled(InventHead)`
color: #4CAF4F;
`


let BusinessBox = styled.div`
width: 50%;
display: grid;
grid-template-columns: 50% 50%;
`