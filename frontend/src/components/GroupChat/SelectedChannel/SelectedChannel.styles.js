import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
  padding-left: 32px;

  button {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.grey300};

    background-color: unset;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  span {
    margin-left: 20px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.grey300};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const ChannelInfo = styled.div`
  color: ${({ theme }) => theme.color.grey200};
  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 18px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 45px;
    line-height: 26px;
    @media (max-width: 800px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

export const MembersListWrapper = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 25px;
    color: ${({ theme }) => theme.color.grey200};
  }

  ul {
    padding: 0;
  }

  img {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    margin-right: 28px;
  }
  span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.grey400};
  }
`;

export const AsideContent = styled.div`
  padding: 0 32px 40px;
  @media (max-width: 800px) {
    padding: 0 20px 30px;
  }
`;

export const Member = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  svg {
    margin-left: auto;
    path {
      fill: ${({ theme }) => theme.color.yellow600};
    }
  }
`;
