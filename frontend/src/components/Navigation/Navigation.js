import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from 'hooks/useAuth';
import { LogoutButton, NavItem, StyledNav } from './Navigation.styles';
import Backdrop from 'components/Backdrop/Backdrop';

const Navigation = ({ setIsNavOpen, showOnTop }) => {
  const { logoutUser } = useAuth();
  return (
    <>
      <StyledNav showOnTop={showOnTop}>
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
      <Backdrop onClick={() => setIsNavOpen(false)} />
    </>
  );
};

export default Navigation;
