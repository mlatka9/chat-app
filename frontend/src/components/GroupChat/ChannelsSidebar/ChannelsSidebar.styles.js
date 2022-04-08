import styled from 'styled-components';

export const UserBannerWrapper = styled.div`
  display: flex;
  /* height: 72px; */
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
  padding: 0 32px 20px;
  @media (max-width: 650px) {
    /* margin-top: 0; */
  }
`;

export const Wrapper = styled.aside`
  /* width: 330px; */
  background-color: ${({ theme }) => theme.color.grey700};
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: transform 300ms ease-in-out;
  @media (max-width: 650px) {
    position: fixed;
    width: calc(100% - 100px);
    height: 100vh;
    transform: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? 'translateX(0%)' : ' translateX(-100%);'};
  }
`;

export const MobileToggle = styled.button`
  width: 40px;
  height: 40px;
  position: fixed;
  top: 10px;
  right: -40px;
`;
