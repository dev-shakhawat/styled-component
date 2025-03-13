import React from 'react'
import Container from './common/Container';
import Title from './common/Title';
import styled from 'styled-components';

const Merketing = () => {
    let MerketData = [
        {head: "Creating Streamlined Safeguarding Processes with OneRen" , },
        {head: "What are your safeguarding responsibilities and how can you manage them?" , },
        {head: "Revamping the Membership Model with Triathlon Australia" , },
    ]
  return (
    <Market>
        <Container>
            <Title heading="Caring is the new marketing" $peramargin="30px" $Perawidth="630px"  para="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​" />
            <CartBox>
               {MerketData.map((item , index)=>(
               <MarketCart key={index}>
                   <MarketCartHead>{item.head}</MarketCartHead>
                   <Readmore>Readmore <img src="/Right.png" alt="Right" /> </Readmore>
               </MarketCart>
               ))}
            </CartBox>
        </Container>
    </Market>
  )
}

export default Merketing;

let Market = styled.div`
margin-top: 48px
`
let CartBox = styled.div`
display: flex;
gap: 100px;
text-align: center;
margin-top: 190px
`
let MarketCart = styled.div`
padding: 16px;
background: #F5F7FA;
border-radius: 20px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

let MarketCartHead = styled.h3`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 28px;
color: #717171
`
let Readmore = styled.a`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 28px;
color: #4CAF4F;
display: flex;
justify-content: center;
gap: 10px;

`