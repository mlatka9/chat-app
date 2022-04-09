import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  height: 52px;
  background-color: ${({ theme }) => theme.color.grey600};
  border-radius: 8px;
  position: relative;
  margin: auto 70px 40px;
  @media (max-width: 800px) {
    margin: auto 20px 20px;
  }

  input {
    background-color: transparent;
    padding: 16px 130px 16px 16px;
    height: 100%;
    width: 100%;
    border: none;
    letter-spacing: 0.6px;
    border-radius: 8px;
    color: ${({ theme }) => theme.color.grey100};
    letter-spacing: 1.15px;
    font-size: ${({ theme }) => theme.fontSize.m};

    @media (max-width: 650px) {
      font-size: ${({ theme }) => theme.fontSize.s};
      padding: 16px 120px 16px 16px;
    }
    &::placeholder {
      color: ${({ theme }) => theme.color.grey400};
    }
  }
  button {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.blue500};
    border: none;
    position: absolute;
    right: 6px;
    cursor: pointer;
  }
  > span:last-of-type {
    margin-right: 45px;
    @media (max-width: 650px) {
      margin-right: 37px;
    }
  }
`;
