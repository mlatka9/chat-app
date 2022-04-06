import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const showTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const showBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%) scale(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(100%) scale(1);
  }
`;

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
  color: ${({ theme }) => theme.color.grey300};
  &.active {
    background-color: ${({ theme }) => theme.color.grey600};
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: ${({ showOnTop }) => (showOnTop ? '42px' : `-30px`)};
  right: 0;
  transform: ${({ showOnTop }) =>
    showOnTop ? `translateY(0px)` : `translateY(100%)`};
  padding: 15px 12px;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grey500};
  background-color: ${({ theme }) => theme.color.grey700};
  z-index: 100;
  transform-origin: ${({ showOnTop }) =>
    showOnTop ? 'bottom right' : 'top right'};
  animation: ${({ showOnTop }) => (showOnTop ? showTop : showBottom)} 250ms
    ease-in-out forwards;
  svg {
    width: 17px;
    height: 17px;
    margin-right: 5px;
  }
`;

export const LogoutButton = styled(NavItem)`
  border: none;
  color: ${({ theme }) => theme.color.red500};
  background-color: transparent;
  cursor: pointer;
`;
