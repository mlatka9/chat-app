import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 24px;
  padding: 48px 60px;
  width: 100%;
  max-width: 475px;
  margin: auto;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.color.grey700};
  @media (max-width: 650px) {
    border-radius: 0;
    box-shadow: none;
    padding: 30px 50px;
  }
  h1,
  h2 {
    color: ${({ theme }) => theme.color.grey200};
  }
  h1 {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 14px;
  }
  h2 {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: 16px;
  }
`;
