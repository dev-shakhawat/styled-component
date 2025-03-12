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
            <Title $lineheight="44px" $width="542px" heading="Manage your entire community in a single system" para="Who is Nextcent suitable for?
" />
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
`

let CommunityCartBx = styled.div`
display: flex;
gap: 127px;
margin-top: 16px;
`