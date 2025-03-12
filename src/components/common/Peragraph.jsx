import React from 'react'
import styled from 'styled-components';


const Peragraph = ({pera , $width}) => {
  return (
    <ParaStyle $width={$width}>{pera}</ParaStyle>
  )
}

export default Peragraph;

const ParaStyle = styled.p`
font-family: "Inter", sans-serif;
font-size: 14px;
line-height: 24px;
color: #717171;
width: ${props => props.$width};
`