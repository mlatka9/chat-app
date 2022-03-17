import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  min-width: 190px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.035em;
  padding: 12px 14px;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.darkGrey};
  &.active {
    background-color: ${({ theme }) => theme.color.veryLightGrey};
  }
`;
export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -30px;
  right: 0;
  transform: translateY(100%);
  padding: 15px 12px;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  background-color: ${({ theme }) => theme.color.white};
  svg {
    width: 17px;
    height: 17px;
    margin-right: 5px;
  }
`;

export const LogoutButton = styled(NavItem)`
  border: none;
  color: ${({ theme }) => theme.color.red};
  background-color: transparent;
  cursor: pointer;
`;
