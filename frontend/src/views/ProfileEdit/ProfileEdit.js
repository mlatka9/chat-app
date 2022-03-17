import EditField from 'components/EditField/EditField';
import InfoHeader from 'components/InfoHeader/InfoHeader';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ChangePhoto,
  EditWrapper,
  StyledBackLink,
  Wrapper,
} from './ProfileEdit.styles';

const ProfileEdit = () => {
  const { currentUser } = useAuth();
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
    <>
      <Header />

      <Wrapper>
        <StyledBackLink to="/profile">Back</StyledBackLink>
        <EditWrapper>
          <InfoHeader>
            <h1>Change info</h1>
            <p>Changes will be reflected to every services</p>
          </InfoHeader>
          <ChangePhoto>
            <img src="#" />
            <button>change photo</button>
          </ChangePhoto>
          <EditField label="name" />
          <EditField label="bio" isTextarea />
          <EditField label="phone" />
          <EditField label="email" />
          <EditField label="password" />
          <Button>Save</Button>
        </EditWrapper>
      </Wrapper>
    </>
  );
};

export default ProfileEdit;
