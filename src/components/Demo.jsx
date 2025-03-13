import React from 'react'
import styled from 'styled-components';
import Container from './common/Container';

const Demo = () => {
  return (
    <DemoBx>
        <Container>
            <Demotxt>Pellentesque suscipit fringilla libero eu.</Demotxt>
            <BtnBox> <GoDemo>Got to demo  <img src="/RightWhite.png" alt="Right" /> </GoDemo></BtnBox>
        </Container>
    </DemoBx>
  )
}

export default Demo;


let DemoBx =styled.div`
margin-top: 150px;
background: #F5F7FA;
padding:34px 0
`

let Demotxt = styled.h2`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 64px;
line-height: 76px;
width: 52%;
margin: auto;
text-align: center;

`
let BtnBox = styled.div`
display: flex;
justify-content: center;
margin-top: 32px;
`
let GoDemo = styled.a`
font-family: "Inter", sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 20px;
padding: 10px 20px;
border-radius: 3px;
cursor: pointer;
color: #fff;
background:  #4CAF4F;
margin: auto;
display: flex;
width: fit-content;
text-align: center
`