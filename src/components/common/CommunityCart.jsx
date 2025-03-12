import React from 'react'
import styled from 'styled-components';
import Peragraph from './Peragraph';

const CommunityCart = ({head , pera , img}) => {
  return (
    <MainCart>
        <CartImg src={img} alt="img"/>
        <CartHead>{head}</CartHead>
        <Peragraph pera={pera}/>
    </MainCart>
  )
}

export default CommunityCart;


const MainCart = styled.div`
text-align: center;
padding: 24px 32px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
border-radius: 10px;
`

let CartImg = styled.img`

`

const CartHead = styled.h2`
font-family: "Inter", sans-serif;
font-weight: 800;
font-size: 28px;
line-height: 36px;
color: #4D4D4D
`

