import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  justify-content: ${({ isBigger }) => (isBigger ? 'space-between' : 'unset')};
`;

export const ProfilePhoto = styled.img`
  display: block;
  border-radius: 5px;
  width: ${({ isBigger }) => (isBigger ? '42px' : '32px')};
  height: ${({ isBigger }) => (isBigger ? '42px' : '32px')};
  object-fit: cover;
`;

export const ProfileName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.grey200};
  letter-spacing: -0.035em;
`;

export const NavigationToggle = styled.button`
  padding: 0;
  transition: transform 200ms ease-in-out;
  transform: ${({ isNavOpen }) => (isNavOpen ? 'none' : 'rotate(180deg)')};
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: transparent;
  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.color.grey200};
  }
`;
