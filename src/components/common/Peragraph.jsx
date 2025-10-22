import React from 'react'
import styled from 'styled-components';

const Peragraph = ({ pera, $width, $mobileWidth, $tabletWidth }) => {
  return (
    <ParaStyle 
      $width={$width} 
      $mobileWidth={$mobileWidth}
      $tabletWidth={$tabletWidth}
    >
      {pera}
    </ParaStyle>
  )
}

export default Peragraph;

const ParaStyle = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: #717171;
    width: ${props => props.$width || 'auto'};
    margin: 0;
    
    /* Desktop */
    @media (min-width: 1025px) {
        width: ${props => props.$width || 'auto'};
    }
    
    /* Tablet */
    @media (max-width: 1024px) and (min-width: 769px) {
        font-size: 14px;
        line-height: 22px;
        width: ${props => props.$tabletWidth || props.$width || 'auto'};
        
        /* Auto-adjust large fixed widths for tablet */
        ${props => {
            if (props.$width && props.$width.includes('px')) {
                const pxValue = parseInt(props.$width);
                if (pxValue > 500) {
                    return '90%';
                }
            }
            return '';
        }}
    }
    
    /* Mobile Large */
    @media (max-width: 768px) and (min-width: 481px) {
        font-size: 14px;
        line-height: 22px;
        width: ${props => props.$mobileWidth || '100%'};
        
        /* Force 100% width for large fixed widths on mobile */
        ${props => {
            if (props.$width && props.$width.includes('px')) {
                const pxValue = parseInt(props.$width);
                if (pxValue > 400) {
                    return 'width: 100%;';
                }
            }
            return '';
        }}
    }
    
    /* Mobile Small */
    @media (max-width: 480px) {
        font-size: 13px;
        line-height: 20px;
        width: ${props => props.$mobileWidth || '100%'};
    }
    
    /* Extra Small Mobile */
    @media (max-width: 360px) {
        font-size: 12px;
        line-height: 18px;
    }
`