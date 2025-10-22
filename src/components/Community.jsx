import React from 'react'
import styled from 'styled-components';
import Container from './common/Container';
import Title from './common/Title';
import CommunityCart from './common/CommunityCart';

const Community = () => {

  const CommunityInfo =[ 
    {
      image: "community1.png" ,
      title: "Membership Organisations",
      pera: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      image: "community2.png",
      title: "National Associations" ,
      pera: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      image: "community3.png",
      title: "Clubs And Groups",
      pera: "Our membership management software provides full automation of membership renewals and payments"
    }
  ]
  return (
    <CommunitySection>
        <Container>
            <Title $lineheight="44px" $width="542px" heading="Manage your entire community in a single system" para="Who is Nextcent suitable for?" />
            <CommunityCartBx>
              {CommunityInfo.map((item , index)=>(<CommunityCart key={index} head={item.title} pera={item.pera} img={item.image}  />))}
            </CommunityCartBx>
        </Container>
    </CommunitySection>
  )
}

export default Community;

const CommunitySection = styled.div`
    margin-top: 40px;
    padding: 40px 0;
    
    @media (max-width: 768px) {
        margin-top: 30px;
        padding: 30px 0;
    }
    
    @media (max-width: 480px) {
        margin-top: 20px;
        padding: 20px 0;
    }
`

const CommunityCartBx = styled.div`
    display: flex;
    gap: 127px;
    margin-top: 16px;
    
    @media (max-width: 1200px) {
        gap: 80px;
    }
    
    @media (max-width: 1024px) {
        gap: 60px;
    }
    
    @media (max-width: 900px) {
        gap: 40px;
    }
    
    @media (max-width: 768px) {
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    @media (max-width: 600px) {
        gap: 25px;
        flex-direction: column;
        align-items: center;
    }
    
    @media (max-width: 480px) {
        gap: 20px;
        margin-top: 12px;
    }
`