import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import { useEffect } from 'react';
import InfoHeader from 'components/Profile/InfoHeader/InfoHeader';
import imagePlaceholder from 'assets/image-placeholder.jpeg';

import ProfileField from 'components/Profile/ProfileField/ProfileField';
import {
  DetailsTable,
  FirstRow,
  MainTitle,
  StyledLink,
  SubTitle,
  Wrapper,
  ProfileWrapper,
} from './Profile.styles';

const Profile = () => {
  const { currentUser, userDetails } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  return (
    <Wrapper>
      <Header />
      <ProfileWrapper>
        <MainTitle>Personal info</MainTitle>
        <SubTitle>Basic info, like your name and photo</SubTitle>
        <DetailsTable>
          <FirstRow>
            <InfoHeader>
              <h2>Profile</h2>
              <p>Some info may be visible to other people</p>
            </InfoHeader>
            <StyledLink to="/profile-edit">Edit</StyledLink>
          </FirstRow>
          <ProfileField
            name="photo"
            value={userDetails?.photoURL || imagePlaceholder}
            hasImage
          />
          <ProfileField name="name" value={userDetails?.name} />
          <ProfileField name="bio" value={userDetails?.bio} />
          <ProfileField name="phone" value={userDetails?.phoneNumber} />
          <ProfileField name="email" value={currentUser.email} />
          <ProfileField name="password" value="********" />
        </DetailsTable>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;
