import React from 'react'
import styled from 'styled-components';
import Container from './common/Container';

const Banner = () => {
  return (
    <BnrContainer>
        <Container>
            <BnrWraper>
                <BnrTxt>
                    <HeaddingOne>Lessons and insights <HeadClr>from 8 years</HeadClr></HeaddingOne>
                    <Paragraph>Where to grow your business as a photographer: site or social media?</Paragraph>
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
`

const BnrWraper = styled.div`
display: flex;
justify-content: space-between;
`

const BnrTxt = styled.div`
display: flex;
flex-direction: column;
`
const BnrImg = styled.div`

`
const HeaddingOne = styled.h1`
color: #4D4D4D;
font-size: 70px;
font-weight: 600;
line-height: 76px;
font-family: "Inter", sans-serif;
`
const HeadClr = styled.span`
color: #4CAF4F;
display: block
`

const Paragraph = styled.p`
font-family: "Inter", sans-serif;
color: #717171;
font-size: 16px;
font-weight: 400;
line-height: 24px;
margin-top: -20px;
`


const Register = styled.button`
color: #fff;
font-size: 14px;
font-weight: 500;
line-height: 20px;
background:  #4CAF4F;
padding: 14px 32px;
border: none;
border-radius: 6px;
width: fit-content;
margin-top: 32px;
cursor: pointer;
`

const Image = styled.img`
width: 100%;
`