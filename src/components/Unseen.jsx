import React from "react";
import styled from "styled-components";
import Container from "./common/Container";

const Unseen = () => {
    const LearnerImage = "unseen.png";
    
    return (
        <UnseenSection>
            <Container>
                <LearnerWrapper>
                    <ImageSection>
                        <Image src={LearnerImage} alt="The unseen of spending three years at Pixelgrade" />
                    </ImageSection>
                    <ContentSection>
                        <Heading>The unseen of spending three years at Pixelgrade</Heading>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum 
                            lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus 
                            pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. 
                            Donec elementum pulvinar odio.
                        </Paragraph>
                        <LearnMoreButton>Learn More</LearnMoreButton>
                    </ContentSection>
                </LearnerWrapper>
            </Container>
        </UnseenSection>
    );
};

export default Unseen;

const UnseenSection = styled.section`
    padding: 80px 0;
    background: #fff;
    
    @media (max-width: 768px) {
        padding: 60px 0;
    }
    
    @media (max-width: 480px) {
        padding: 40px 0;
    }
`;

const LearnerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;
    
    @media (max-width: 1024px) {
        gap: 60px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        gap: 30px;
    }
`;

const ImageSection = styled.div`
    flex: 1;
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
        max-width: 400px;
    }
    
    @media (max-width: 480px) {
        max-width: 300px;
    }
`;

const ContentSection = styled.div`
    flex: 1;
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
    }
`;

const Heading = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 1.3;
    color: #4D4D4D;
    margin-bottom: 24px;
    font-family: "Inter", sans-serif;
    
    @media (max-width: 1024px) {
        font-size: 32px;
    }
    
    @media (max-width: 768px) {
        font-size: 28px;
        margin-bottom: 20px;
    }
    
    @media (max-width: 480px) {
        font-size: 24px;
        margin-bottom: 16px;
    }
`;

const Paragraph = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: #717171;
    margin-bottom: 32px;
    font-family: "Inter", sans-serif;
    
    @media (max-width: 768px) {
        font-size: 15px;
        margin-bottom: 28px;
    }
    
    @media (max-width: 480px) {
        font-size: 14px;
        margin-bottom: 24px;
        line-height: 1.5;
    }
`;

const LearnMoreButton = styled.button`
    background: #4CAF4F;
    color: white;
    border: none;
    padding: 14px 32px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: "Inter", sans-serif;
    
    &:hover {
        background: #45a049;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(76, 175, 79, 0.3);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        padding: 16px 36px;
        font-size: 16px;
    }
    
    @media (max-width: 480px) {
        padding: 14px 32px;
        width: 100%;
        max-width: 280px;
    }
`;