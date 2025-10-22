import React, { useState } from 'react'
import styled from 'styled-components'
import Container from './common/Container';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    let navItem = ["home", "service", "feature", "product", "testimonial", "FAQ"];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavContainer>
            <Container>
                <NavWraper>
                    <Logo><Image src='/Logo.png' alt='logo' /></Logo>
                    
                    {/* Desktop Navigation */}
                    <NavMenu className={isMenuOpen ? "active" : ""}>
                        {navItem.map((item, indx) => (
                            <MenuItem key={indx} onClick={() => setIsMenuOpen(false)}>
                                {item}
                            </MenuItem>
                        ))}
                    </NavMenu>

                    {/* Desktop Buttons */}
                    <BtnWraper className={isMenuOpen ? "active" : ""}>
                        <Login>Login</Login>
                        <Signup>Sign up</Signup>
                    </BtnWraper>

                    {/* Mobile Menu Button */}
                    <HamburgerButton onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </HamburgerButton>

                    {/* Mobile Overlay */}
                    <Overlay className={isMenuOpen ? "active" : ""} onClick={() => setIsMenuOpen(false)} />
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
    left: 0;
    width: 100%;
    padding: 22px 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 15px 0;
    }
`;

const NavWraper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const Logo = styled.a`
    text-decoration: none;
    z-index: 1001;

 
`;

const Image = styled.img`
    width: 100%;
    max-width: 120px;
    height: auto;

    @media (max-width: 768px) {
        max-width: 100px;
    }
`;

const NavMenu = styled.ul`
    display: flex;
    gap: 50px;

    @media (max-width: 1024px) {
        gap: 30px;
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: #F5F7FA;
        flex-direction: column;
        gap: 0;
        padding: 80px 30px 30px;
        transition: right 0.3s ease-in-out;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        z-index: 1000;

        &.active {
            right: 0;
        }
    }
`;

const MenuItem = styled.li`
    list-style: none;
    text-transform: capitalize;
    font-family: "Inter", sans-serif;
    color: #18191F;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    transition: 0.4s;
    cursor: pointer;
    
    &:hover {
        font-weight: 600;
        color: #4CAF4F;
    }

    @media (max-width: 768px) {
        padding: 15px 0;
        border-bottom: 1px solid #e0e0e0;
        font-size: 18px;
        
        &:last-child {
            border-bottom: none;
        }
        
        &:hover {
            background: rgba(76, 175, 79, 0.1);
            padding-left: 10px;
        }
    }
`;

const BtnWraper = styled.div`
    display: flex;
    gap: 14px;

    @media (max-width: 768px) {
        position: fixed;
        top: 80px;
        right: -100%;
        width: 280px;
        padding: 20px 30px;
        background: #F5F7FA;
        flex-direction: column;
        gap: 15px;
        transition: right 0.3s ease-in-out;
        z-index: 1000;

        &.active {
            right: 0;
        }
    }
`;

const Btn = styled.button`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        padding: 12px 20px;
        font-size: 16px;
        text-align: center;
    }
`;

const Login = styled(Btn)`
    color: #4CAF4F;
    background: none;
    
    &:hover {
        background: rgba(76, 175, 79, 0.1);
    }

    @media (max-width: 768px) {
        border: 1px solid #4CAF4F;
    }
`;

const Signup = styled(Btn)`
    color: #fff;
    background: #4CAF4F;
    
    &:hover {
        background: #45a049;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(76, 175, 79, 0.3);
    }
`;

const HamburgerButton = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    span {
        width: 100%;
        height: 3px;
        background: #18191F;
        border-radius: 2px;
        transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
        display: flex;
    }

    &.active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }

    &.active span:nth-child(2) {
        opacity: 0;
    }

    &.active span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }
`;

const Overlay = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;

        &.active {
            opacity: 1;
            visibility: visible;
        }
    }
`;