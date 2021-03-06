import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 30px;
  z-index: 50;
  @media (max-width: 650px) {
    padding: 0 15px;
  }
`;
