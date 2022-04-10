import styled from 'styled-components';

export const UserBannerWrapper = styled.div`
  display: flex;
  /* height: 72px; */
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
  padding: 0 32px 20px;
  @media (max-width: 800px) {
    padding: 0 20px 20px;
  }
`;

export const Wrapper = styled.aside`
  background-color: ${({ theme }) => theme.color.grey700};
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 100;
  @media (max-width: 650px) {
    transition: transform 300ms ease-in-out,
      background-color ${({ theme }) => theme.animationDuration};
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
  position: absolute;
  top: 10px;
  right: -42px;
  transition: transform 200ms ease-in-out;
  padding: 0;
  border: none;
  background-color: transparent;
  padding: 3px;
  border-radius: 3px;
  display: none;
  @media (max-width: 650px) {
    display: block;
  }
`;
