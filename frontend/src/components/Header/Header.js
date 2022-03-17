import DarkModeToggle from 'components/DarkModeToggle/DarkModeToggle';
import UserBanner from 'components/UserBanner/UserBanner';
import { StyledHeader } from './Header.styles';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { update } = useAuth();

  const handleOnClick = async () => {
    await update();
    navigate('/chat');
  };
  return (
    <StyledHeader>
      <DarkModeToggle />
      <UserBanner />
      {/* <button onClick={handleOnClick}> update</button> */}
    </StyledHeader>
  );
};

export default Header;
