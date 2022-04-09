import DarkModeToggle from 'components/Common/DarkModeToggle/DarkModeToggle';
import UserBanner from 'components/UserBanner/UserBanner';
import { StyledHeader } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <DarkModeToggle />
      <UserBanner />
    </StyledHeader>
  );
};

export default Header;
