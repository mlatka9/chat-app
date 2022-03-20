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
import { useForm } from 'react-hook-form';

const ProfileEdit = () => {
  const { currentUser, updateUserProfile, userDetails } = useAuth();

  const navigate = useNavigate();

  // const [errorMessage, setErrorMessage] = useState();

  console.log(userDetails);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: currentUser?.displayName,
      bio: userDetails?.bio,
      phone: userDetails?.phoneNumber,
      email: currentUser?.email,
      password: '',
    },
  });

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const onSubmit = async (data) => {
    try {
      await updateUserProfile(data);
    } catch (err) {
      console.log(err);
    }
    navigate(-1);
  };

  if (!currentUser) {
    return null;
  }
  return (
    <>
      <Header />

      <Wrapper>
        <StyledBackLink to="/profile">Back</StyledBackLink>
        <EditWrapper onSubmit={handleSubmit(onSubmit)}>
          <InfoHeader>
            <h1>Change info</h1>
            <p>Changes will be reflected to every services</p>
          </InfoHeader>
          <ChangePhoto>
            <img src={currentUser.photoURL} alt={currentUser.email} />
            <button>change photo</button>
          </ChangePhoto>
          <EditField
            label="name"
            register={register}
            options={{
              minLength: {
                value: 5,
                message: 'password must have at least 5 characters',
              },
            }}
          />
          <EditField label="bio" register={register} isTextarea />
          <EditField
            label="phone"
            register={register}
            options={{
              // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              minLength: 6,
              message: 'invalid phone number',
            }}
          />
          <EditField
            label="email"
            register={register}
            options={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            }}
          />
          <EditField label="password" register={register} type="password" />
          <Button>Save</Button>
        </EditWrapper>
      </Wrapper>
    </>
  );
};

export default ProfileEdit;
