import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from 'hooks/useAuth';
import { LogoutButton, NavItem, StyledNav } from './Navigation.styles';

const Navigation = () => {
  const { logoutUser } = useAuth();
  return (
    <StyledNav>
      <NavItem to="/profile">
        <FontAwesomeIcon icon="circle-user" />
        My profile
      </NavItem>
      <NavItem to="/chat">
        <FontAwesomeIcon icon="user-group" />
        Group Chat
      </NavItem>
      <LogoutButton as="button" onClick={logoutUser}>
        <FontAwesomeIcon icon="arrow-right-from-bracket" />
        Logout
      </LogoutButton>
    </StyledNav>
  );
};

export default Navigation;
