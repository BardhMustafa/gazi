import styled from 'styled-components';

export const ErrorPage = () => {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <p>Page not found</p>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  color: #d42539;
  flex-direction: column;
  background: #f5f7f9;
  border-radius: 2.4rem;

  h1 {
    font-size: 10rem;
    line-height: 1;
    letter-spacing: -.06em;
  }

  p {
    font-size: 2rem;
  }
`;
