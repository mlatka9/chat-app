import useAuth from 'hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  NavigationToggle,
  ProfileName,
  ProfilePhoto,
  Wrapper,
} from './UserBanner.styles';
import imagePlaceholder from 'assets/image-placeholder.jpeg';

const UserBanner = ({ showOnTop, isBigger }) => {
  console.log(isBigger);
  const { userDetails, currentUser } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Wrapper isBigger={isBigger}>
      <ProfilePhoto
        src={userDetails?.photoURL || imagePlaceholder}
        alt={currentUser.email}
        isBigger={isBigger}
      />
      <ProfileName>{userDetails?.name || currentUser.email}</ProfileName>

      <NavigationToggle onClick={handleToggleNavigation} isNavOpen={isNavOpen}>
        <FontAwesomeIcon icon="caret-down" />
      </NavigationToggle>

      {isNavOpen ? (
        <Navigation setIsNavOpen={setIsNavOpen} showOnTop={showOnTop} />
      ) : null}
    </Wrapper>
  );
};

export default UserBanner;
