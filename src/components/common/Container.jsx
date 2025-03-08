import React from 'react'
import styled from 'styled-components';

const Container = ({children}) => {
  return (
    <ContainerDiv>{children}</ContainerDiv>
  )
}

export default Container;

const ContainerDiv = styled.div`
max-width: 1220px;
margin: 0 auto;
`