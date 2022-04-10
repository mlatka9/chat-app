import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 850px;
  padding-bottom: 20px;
`;

export const ProfileEditWrapper = styled.div`
  margin: 0 30px 50px;

  @media (max-width: 650px) {
    margin: 0 15px;
  }
`;

export const EditWrapper = styled.form`
  padding: 30px 50px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.grey700};
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  @media (max-width: 650px) {
    padding: 30px 20px;
  }
  > div {
    margin-bottom: 24px;
  }
`;

export const StyledBackLink = styled(Link)`
  color: ${({ theme }) => theme.color.blue500};
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
  flex-wrap: wrap;
  img {
    height: 72px;
    width: 72px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  input {
    opacity: 0;
    background-color: pink;
    position: absolute;
    width: 100%;
  }
  label {
    position: relative;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.grey300};
    font-size: ${({ theme }) => theme.fontSize.s};
    text-transform: uppercase;
    padding: 2px;
    margin-right: 28px;
    cursor: pointer;
  }
`;

export const FileInputWrapper = styled.div`
  margin-left: 28px;
  position: relative;
  input:focus + label {
    outline: 2px solid ${({ theme }) => theme.color.grey200};
    border-radius: 2px;
  }
`;

export const StyledSpan = styled.span`
  margin-left: 20px;
  color: ${({ theme }) => theme.color.grey200};
`;

export const PhotoName = styled.span`
  color: ${({ theme }) => theme.color.grey200};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: 28px;
  width: min-content;
`;
