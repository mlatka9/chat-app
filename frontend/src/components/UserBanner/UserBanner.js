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

const UserBanner = () => {
  const { userDetails, currentUser } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Wrapper>
      <ProfilePhoto
        src={userDetails?.photoURL || imagePlaceholder}
        alt={currentUser.email}
      />
      <ProfileName>{userDetails?.name || currentUser.email}</ProfileName>
      <NavigationToggle onClick={handleToggleNavigation} isNavOpen={isNavOpen}>
        <FontAwesomeIcon icon="caret-down" />
      </NavigationToggle>
      {isNavOpen ? <Navigation setIsNavOpen={setIsNavOpen} /> : null}
    </Wrapper>
  );
};

export default UserBanner;
