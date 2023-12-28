import { generatePath } from 'react-router';
import styled from 'styled-components';
import { Button } from '../../shared/components/Button';
import { Heading2 } from '../../shared/components/Heading2';
import { Paragraph } from '../../shared/components/Paragraph';

export const AboutSection = () => {
  return (
    <Section>
      <ImageSection>
        <Image
          src="https://23july.hostlin.com/constech/wp-content/uploads/2022/08/about-8.jpg"
          alt="worker"
        />
        <YearsOfExperience>
          <h3>20</h3>
          <p>Years Of Experience</p>
        </YearsOfExperience>
      </ImageSection>
      <TextSection>
        <TextSectionAbout>About us</TextSectionAbout>
        <Heading2>We Build Everything That You Need.</Heading2>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptas
          enim reprehenderit perspiciatis! Corrupti facilis sed cum enim
          quisquam sunt alias. Obcaecati delectus, dolorem in quas molestias id.
          Cumque, impedit.
        </Paragraph>
        <Button onClick={() => generatePath('/about-us')}>Read More</Button>
      </TextSection>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  padding-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (min-width: 568px) {
    flex-direction: row;
    position: relative;
  }

  @media (min-width: 1024px) {
    flex-basis: 50%;
    flex-direction: row;
    position: relative;
    justify-content: center;
  }
`;

const Image = styled.img`
  object-fit: contain;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const YearsOfExperience = styled.div`
  position: static;
  width: 100%;
  height: 15rem;
  background-color: #1e1e21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(30, 30, 33, 0.8);
  backdrop-filter: saturate(180%) blur(10px);
  color: white;

  & > h3 {
    font-size: 5rem;
    color: #e91b37;
    margin: 0;
    margin-top: -1rem;
  }

  & > p {
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: -1rem;
  }

  @media (min-width: 568px) {
    position: absolute;
    top: 52%;
    right: -12%;
    width: 24rem;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 52%;
    right: 18%;
    translate: translateX(50%);
    width: 24rem;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 52%;
    right: 12%;
    width: 24rem;
  }
`;

const TextSection = styled.div`
  flex-basis: 50%;
  margin: 0;

  @media (min-width: 768px) {
    padding-left: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
  }
`;

const TextSectionAbout = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #e91b37;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
