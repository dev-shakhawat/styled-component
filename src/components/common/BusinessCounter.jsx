import React from 'react'
import styled from 'styled-components';
import Peragraph from './Peragraph';

const BusinessCounter = ({image , number , title}) => {
  return (
    <BusinessBx>
        <BusinessIm src={image} alt="image" />
        <div>
            <Number>{number}</Number>
            <Peragraph pera={title} />
        </div>
    </BusinessBx>
  )
}

export default BusinessCounter;


let BusinessBx = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

let Number = styled.h3`
font-family: "Inter", sans-serif;
font-size: 28px;
line-height: 0px;
font-weight: 800;
color: #717171;
`

const BusinessIm = styled.img`
width: 48px;
height: 48px;
`