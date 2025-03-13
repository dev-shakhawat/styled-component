import React from 'react'
import styled from 'styled-components'

const Title = ({heading , para , $width , $Perawidth , $peramargin , $lineheight}) => {
  return (
    <TitleMain>
        <Head $width={$width} $lineheight={$lineheight}>{heading}</Head>
        <Paragraph $peramargin={$peramargin} $Perawidth={$Perawidth}>{para}</Paragraph>
    </TitleMain>
  )
}

export default Title

const TitleMain = styled.div`
text-align: center;
`

const Head = styled.h2`
font-family: "Inter", sans-serif;
font-weight: 600;
font-size: 36px;
line-height: 4px;
color: #4D4D4D;
width: ${(props) => props.$width || 'auto'};
line-height: ${(props) => props.$lineheight || '4px'};
margin: auto;
`

const Paragraph = styled.p`
font-family: "Inter", sans-serif;
font-size: 16px;
line-height: 24px;
color: #717171;
width: ${(props) => props.$Perawidth || 'auto'};
margin-top: ${(props) => props.$peramargin};
margin-left: auto;
margin-right: auto;
`