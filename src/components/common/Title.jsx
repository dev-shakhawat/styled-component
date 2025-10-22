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
    padding: 0 20px;
    
    @media (max-width: 768px) {
        padding: 0 16px;
    }
    
    @media (max-width: 480px) {
        padding: 0 12px;
    }
`

const Head = styled.h2`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: ${(props) => props.$lineheight || '44px'};
    color: #4D4D4D;
    width: ${(props) => props.$width || 'auto'};
    margin: 0 auto 16px auto;
    
    @media (max-width: 1200px) {
        font-size: 32px;
        line-height: ${(props) => props.$lineheight ? `calc(${props.$lineheight} - 4px)` : '40px'};
    }
    
    @media (max-width: 1024px) {
        font-size: 28px;
        line-height: ${(props) => props.$lineheight ? `calc(${props.$lineheight} - 8px)` : '36px'};
        width: ${(props) => {
            if (props.$width && props.$width.includes('px')) {
                const pxValue = parseInt(props.$width);
                if (pxValue > 600) return '80%';
            }
            return props.$width || 'auto';
        }};
    }
    
    @media (max-width: 768px) {
        font-size: 24px;
        line-height: ${(props) => props.$lineheight ? `calc(${props.$lineheight} - 12px)` : '32px'};
        width: ${(props) => {
            if (props.$width && props.$width.includes('px')) {
                const pxValue = parseInt(props.$width);
                if (pxValue > 500) return '90%';
            }
            return props.$width || 'auto';
        }};
        margin-bottom: 12px;
    }
    
    @media (max-width: 480px) {
        font-size: 22px;
        line-height: ${(props) => props.$lineheight ? `calc(${props.$lineheight} - 16px)` : '30px'};
        width: ${(props) => {
            if (props.$width && props.$width.includes('px')) {
                const pxValue = parseInt(props.$width);
                if (pxValue > 400) return '100%';
            }
            return props.$width || 'auto';
        }};
        margin-bottom: 8px;
    }
    
    @media (max-width: 360px) {
        font-size: 20px;
        line-height: ${(props) => props.$lineheight ? `calc(${props.$lineheight} - 20px)` : '28px'};
    }
`

const Paragraph = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #717171;
    width: ${(props) => props.$Perawidth || 'auto'};
    margin: ${(props) => props.$peramargin || '0 auto'};
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 1024px) {
        font-size: 15px;
        line-height: 22px;
        width: ${(props) => {
            if (props.$Perawidth && props.$Perawidth.includes('px')) {
                const pxValue = parseInt(props.$Perawidth);
                if (pxValue > 600) return '80%';
            }
            return props.$Perawidth || 'auto';
        }};
        margin: ${(props) => {
            if (props.$peramargin) {
                // Convert margin for tablet
                if (props.$peramargin.includes('px')) {
                    const pxValue = parseInt(props.$peramargin);
                    return `${Math.max(pxValue * 0.7, 16)}px auto`;
                }
            }
            return props.$peramargin || '0 auto';
        }};
    }
    
    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 22px;
        width: ${(props) => {
            if (props.$Perawidth && props.$Perawidth.includes('px')) {
                const pxValue = parseInt(props.$Perawidth);
                if (pxValue > 500) return '90%';
            }
            return props.$Perawidth || 'auto';
        }};
        margin: ${(props) => {
            if (props.$peramargin) {
                // Convert margin for mobile
                if (props.$peramargin.includes('px')) {
                    const pxValue = parseInt(props.$peramargin);
                    return `${Math.max(pxValue * 0.5, 12)}px auto`;
                }
            }
            return props.$peramargin || '0 auto';
        }};
    }
    
    @media (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
        width: ${(props) => {
            if (props.$Perawidth && props.$Perawidth.includes('px')) {
                const pxValue = parseInt(props.$Perawidth);
                if (pxValue > 400) return '100%';
            }
            return props.$Perawidth || 'auto';
        }};
        margin: ${(props) => {
            if (props.$peramargin) {
                // Convert margin for small mobile
                if (props.$peramargin.includes('px')) {
                    const pxValue = parseInt(props.$peramargin);
                    return `${Math.max(pxValue * 0.4, 8)}px auto`;
                }
            }
            return props.$peramargin || '0 auto';
        }};
    }
    
    @media (max-width: 360px) {
        font-size: 13px;
        line-height: 18px;
    }
`