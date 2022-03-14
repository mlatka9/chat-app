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
  svg {
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
