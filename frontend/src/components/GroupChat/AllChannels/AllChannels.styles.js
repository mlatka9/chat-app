import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.grey300};
  }
  button {
    background-color: ${({ theme }) => theme.color.grey600};
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  path {
    fill: ${({ theme }) => theme.color.grey200};
  }
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.color.grey600};
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 14px 45px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.grey200};
  margin-bottom: 36px;
  color: ${({ theme }) => theme.color.grey100};
  &::placeholder {
    color: ${({ theme }) => theme.color.grey400};
  }
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 22px;
  color: ${({ theme }) => theme.color.grey200};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  cursor: pointer;
  div {
    margin-right: 12px;
    background-color: ${({ theme }) => theme.color.grey600};
    width: 42px;
    height: 42px;
    color: ${({ theme }) => theme.color.grey200};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.bolder};
  }
`;
