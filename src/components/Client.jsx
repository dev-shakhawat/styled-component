import React from 'react'
import Title from './common/Title'
import styled, { keyframes } from 'styled-components'
import Container from './common/Container'

const Client = () => {
    const clientImg = ["client1.png" , "client2.png" , "client3.png" , "client4.png" , "client5.png" , "client6.png" , "client7.png"]
  return (
    <ClientSection>
        <Container>
           <Title heading="Our Clients" para="We have been working with some Fortune 500+ clients"/>
           <Clients>
            <Clientbx>
              {clientImg.map((clientImage , index)=>(<ClientItem key={index} src={clientImage} />))}
            </Clientbx>
           </Clients>
        </Container>
    </ClientSection>
  )
}

export default Client

const ClientSection = styled.div`
margin-top: 40px;
`

const Clients = styled.div`
position: relative;
overflow-x: hidden;
height: 100px;
margin-top: 16px;
`

const Scroll = keyframes`
  from {
    top: 0;
    left: 100%
  }

  to {
    top: 0;
    left: -100%;
  }
`;

const Clientbx = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
position: absolute;
top: 0;
left: 5%;
animation: ${Scroll} 20s linear infinite;
`
const ClientItem = styled.img`

`

