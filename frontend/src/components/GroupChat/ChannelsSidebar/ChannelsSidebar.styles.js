import styled from 'styled-components';

export const UserBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
  padding: 0 32px 20px;
`;

export const Wrapper = styled.aside`
  width: 330px;
  background-color: ${({ theme }) => theme.color.grey700};
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  /* z-index: 100; */
`;
