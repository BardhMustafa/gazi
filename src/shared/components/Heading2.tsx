import styled from 'styled-components';

export const Heading2 = styled.h2`
  font-size: clamp(3.4rem, 5vw, 5.8rem);
  font-weight: 750;
  letter-spacing: -0.045em;
  line-height: 1.05;
  margin-bottom: 2.4rem;
  color: #113355;

  @media (max-width: 768px) {
    font-size: 3.4rem;
  }
`;
