import styled from 'styled-components';

export const Button = styled.button`
  background-color: #d42539;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1.35rem 2.6rem;
  border: 1px solid #d42539;
  border-radius: 999px;
  margin-top: 2rem;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(212, 37, 57, 0.22);
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;

  &:hover {
    background: #b91f31;
    border-color: #b91f31;
    box-shadow: 0 16px 36px rgba(212, 37, 57, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
