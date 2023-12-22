import React from 'react';
import styled from 'styled-components';
const AboutContainer = styled.div`
    text-align: center;
    padding: 20px;
`;

const Heading = styled.h1`
    font-size: 24px;
    color: #333;
`;

const Paragraph = styled.p`
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
`;

const Link = styled.a`
    color: #007bff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <Heading>About Me</Heading>
            <Paragraph>
                Hi, I'm [Your Name]! I am a [Your Profession] with a passion for [Your Interests]. I have [Number of Years] years of experience in [Your Field].
            </Paragraph>
            <Paragraph>
                In my free time, I enjoy [Hobbies or Activities]. I am constantly learning and exploring new technologies to enhance my skills and stay up-to-date with industry trends.
            </Paragraph>
            <Paragraph>
                Feel free to reach out to me at <Link href="mailto:[Your Email]">[Your Email]</Link> or connect with me on [Social Media Platforms] to discuss any opportunities or collaborations.
            </Paragraph>
        </AboutContainer>
    );
};

export default About;
