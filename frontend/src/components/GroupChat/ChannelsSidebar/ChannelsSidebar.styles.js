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
  background-color: ${({ theme }) => theme.color.grey900};
  height: 100%;
  /* padding: 0 32px 40px; */
  display: flex;
  flex-direction: column;
  /* position: relative; */
`;
