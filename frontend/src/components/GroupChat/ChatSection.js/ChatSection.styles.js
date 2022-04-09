import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 70px;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.color.grey800};
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    margin-bottom: 25px;
    padding-left: 20px;
  }

  @media (max-width: 650px) {
    padding-left: 70px;
  }

  h2 {
    color: ${({ theme }) => theme.color.grey200};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.bolder};
  }
`;

export const ChatPostsWrapper = styled.div`
  height: calc(100vh - 220px);
  overflow-y: auto;
  @media (max-width: 800px) {
    height: calc(100vh - 180px);
  }
`;
