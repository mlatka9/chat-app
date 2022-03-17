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
import imagePlaceholder from 'assets/image-placeholder.png';

const UserBanner = () => {
  const { currentUser } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Wrapper>
      <ProfilePhoto
        src={currentUser.photoURL || imagePlaceholder}
        alt={currentUser.email}
      />
      <ProfileName>{currentUser.email}</ProfileName>
      <NavigationToggle onClick={handleToggleNavigation} isNavOpen={isNavOpen}>
        <FontAwesomeIcon icon="caret-down" />
      </NavigationToggle>
      {isNavOpen ? <Navigation /> : null}
    </Wrapper>
  );
};

export default UserBanner;
