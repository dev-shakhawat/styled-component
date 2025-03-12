import React from 'react'
import styled from 'styled-components';
import Container from './Container';
import Peragraph from './Peragraph';

const Learner = ({image , pera , head }) => {
  return (
     <Container>
        <MainLearner>
            <LearnerImgBx><LearnerImg src={image} alt="img"/> </LearnerImgBx>
            <LearnerTxtBx>
                <LearnHead>{head}</LearnHead>
                <Peragraph pera={pera} $width="600px" />
                <LearnMore>Learn More</LearnMore>
            </LearnerTxtBx>
        </MainLearner>
     </Container>
  )
}

export default Learner;


let MainLearner = styled.div`
display: flex;
padding: 48px;
`

const LearnerImgBx = styled.div`
width: 33%;
`

let LearnerImg = styled.img`
width: 100%;
`
let LearnerTxtBx = styled.div`
width: 66%;
display: flex;
flex-direction: column;
justify-content: center;

`

let LearnHead = styled.h2`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 36px;
line-height: 44px;
color: #4D4D4D;
width: 70%
`
const LearnMore = styled.a`
font-family: "Inter", sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 20px;
padding: 10px 20px;
border-radius: 6px;
cursor: pointer;
text-decoration: none;
background: #4CAF4F;
color: white;
width: fit-content;
`