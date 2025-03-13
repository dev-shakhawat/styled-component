import React from 'react'
import styled from 'styled-components';
import Container from './common/Container';
import Peragraph from './common/Peragraph';

const Footer = () => {
  return (
    <Footerbx>
        <Container>
            <FootWraper>
                <FirstBox>
                    <Footlogo src="/footlogo.png" alt="footlogo" />
                    <Text>Copyright © 2020 Nexcent ltd.</Text>
                    <Text>All rights reserved</Text>
                    <Social>
                        <Li><img src="/insta.png" alt="insta" /></Li>
                        <Li><img src="/web.png" alt="web" /></Li>
                        <Li><img src="/twitter.png" alt="twitter" /></Li>
                        <Li><img src="/youtube.png" alt="youtube" /></Li>
                    </Social>
                </FirstBox>
                <Box>
                    <BoxHead>Company</BoxHead>
                    <Ul>
                        <Li><Text>About us</Text></Li>
                        <Li><Text>Blog</Text></Li>
                        <Li><Text>Contact us</Text></Li>
                        <Li><Text>Pricing</Text></Li>
                        <Li><Text>Testimonials</Text></Li>
                    </Ul>
                </Box>
                <Box>
                    <BoxHead>Support</BoxHead>
                    <Ul>
                        <Li><Text>Help center</Text></Li>
                        <Li><Text>Terms of service</Text></Li>
                        <Li><Text>Legal</Text></Li>
                        <Li><Text>Privacy policy</Text></Li>
                        <Li><Text>Status</Text></Li>
                    </Ul>
                </Box>
                <Box>
                    <BoxHead>Stay up to date</BoxHead>
                    <Box>
                        <Input type="email" placeholder='Your email address' />
                        <Send src='/send.png' alt='send'/>
                    </Box>
                </Box>
            </FootWraper>
        </Container>
    </Footerbx>
  )
}

export default Footer;


let Footerbx = styled.div`
padding: 64px 0 74px;
background: #263238;
`

let FootWraper = styled.div`
display: flex;
justify-content: space-between;
`

let FirstBox = styled.div`
width: 35%
`

let Footlogo = styled.img`
margin-bottom: 40px
`
let Box = styled.div`
position: relative;
`
let Text = styled.p`
font-family: "Inter", sans-serif;
font-size: 14px;
line-height: 10px;
color:rgba(245, 247, 250, 0.65);
`

let BoxHead = styled.h4`
font-family: "Inter", sans-serif;
font-size: 20px;
line-height: 28px;
margin: 0;
padding: 0;
font-weight: 600;
color: white
`
let Ul = styled.ul`
display: flex;
flex-direction: column;
margin: 0;
padding: 0
`
let Li = styled.li`
list-style: none
`

let Input = styled.input`
background-color:rgba(217, 219, 225, 0.52);
color: white;
border: none;
outline: none;
padding: 7px;
border-radius: 3px;
margin-top: 20px;
&::placeholder{
color: rgba(245, 247, 250, 0.65)
}
`

let Social = styled.ul`
display: flex;
margin-top: 40px;
padding: 0;
gap: 10px
`

let Send = styled.img`
position: absolute;
top: 25px;
right: 5px;
`