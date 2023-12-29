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

  h1 {
    font-size: 10rem;
  }

  p {
    font-size: 2rem;
  }
`;
