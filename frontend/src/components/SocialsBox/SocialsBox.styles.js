import styled from 'styled-components';

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  margin-bottom: 22px;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  button {
    border: none;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    position: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    &:hover svg {
      border: 1px solid ${({ theme }) => theme.color.veryDarkGrey};
      path {
        fill: ${({ theme }) => theme.color.veryDarkGrey};
      }
    }
  }
  svg {
    display: block;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.grey};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    path {
      fill: ${({ theme }) => theme.color.grey};
    }
  }
`;
