import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 850px;
`;

export const ProfileEditWrapper = styled.div`
  margin: 0 30px 50px;
  @media (max-width: 650px) {
    margin: 0 15px;
  }
`;

export const EditWrapper = styled.form`
  padding: 30px 50px;
  border: 1px solid ${({ theme }) => theme.color.veryLightGrey};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};
  > div {
    margin-bottom: 24px;
  }
`;

export const StyledBackLink = styled(Link)`
  color: ${({ theme }) => theme.color.blue};
  text-decoration: none;
  margin-bottom: 24px;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.l};
  span {
    margin-left: 8px;
  }
`;

export const ChangePhoto = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 72px;
    width: 72px;
    border-radius: 8px;
  }
  input {
    /* display: none; */
    opacity: 0;
    background-color: pink;
    position: absolute;
    width: 100%;
  }
  label {
    position: relative;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.grey};
    font-size: ${({ theme }) => theme.fontSize.s};
    text-transform: uppercase;
    padding: 2px;
    cursor: pointer;
  }
  span {
    color: ${({ theme }) => theme.color.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-left: 28px;
  }
`;

export const FileInputWrapper = styled.div`
  margin-left: 28px;
  position: relative;
  input:focus + label {
    outline: 2px solid ${({ theme }) => theme.color.darkGrey};
    border-radius: 2px;
  }
`;

export const StyledSpan = styled.span`
  margin-left: 20px;
  color: ${({ theme }) => theme.color.white};
`;
