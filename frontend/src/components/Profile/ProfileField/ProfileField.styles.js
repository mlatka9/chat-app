import styled from 'styled-components';

export const FieldName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.grey400};
  width: 200px;
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  grid-template-columns: 220px 1fr;
  padding: 28px 50px;
  @media (max-width: 650px) {
    justify-content: space-between;
    padding: 20px 30px;
  }
  img {
    height: 72px;
    width: 72px;
    border-radius: 8px;
  }
`;

export const FieldValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.grey200};
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
