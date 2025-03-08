import React from 'react'
import styled from 'styled-components'
import Container from './common/Container'

const Navbar = () => {

    let navItem = ["home" , "service" , "feature" , "product" , "testimonial" , "FAQ"]
  return (
    <NavContainer>
        <Container>
            <NavWraper>
                <Logo><Image src='/Logo.png' alt='logo' /></Logo>
                <NavMenu>
                    {navItem.map((item , indx)=><MenuItem key={indx}>{item}</MenuItem>)}
                </NavMenu>
                <BtnWraper>
                    <Login>Login</Login>
                    <Signup>Sign up</Signup>
                </BtnWraper>
            </NavWraper>
        </Container>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.div`
background-color: #F5F7FA;
position: fixed;
top: 0;
lefty: 0;
width: 100%;
padding: 22px 0;
`;

const NavWraper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled.a`
text-decoration: none;
`

const Image = styled.img`
width: 100%;
`
const NavMenu = styled.ul`
display: flex;
gap: 50px;
`

const MenuItem = styled.li`
list-style: none;
text-transform: capitalize;
font-family: "Inter", sans-serif;
color:  #18191F;
font-size: 16px;
font-weight: 400;
line-height: 24px;
transition: .4s;
cursor: pointer;
&:hover{
    font-weight: 600;
    color: #4CAF4F
}
`

const BtnWraper = styled.div`
display: flex;
gap: 14px;
`

const Login = styled.button`
color:  #4CAF4F;
font-family: "Inter", sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 20px;
padding: 10px 20px;
background: transparent;
border: none;
cursor: pointer;
`

const Signup = styled.button`
color: #fff;
font-size: 14px;
font-weight: 500;
line-height: 20px;
background:  #4CAF4F;
padding: 10px 20px;
border: none;
border-radius: 6px;
cursor: pointer;
`