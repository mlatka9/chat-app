import EditField from 'components/EditField/EditField';
import InfoHeader from 'components/InfoHeader/InfoHeader';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  ChangePhoto,
  EditWrapper,
  StyledBackLink,
  Wrapper,
  FileInputWrapper,
  ProfileEditWrapper,
  StyledSpan,
} from './ProfileEdit.styles';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imagePlaceholder from 'assets/image-placeholder.jpeg';

const ProfileEdit = () => {
  const { currentUser, updateUserProfile, userDetails } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: currentUser?.displayName,
      bio: userDetails?.bio,
      phone: userDetails?.phoneNumber,
      email: currentUser?.email,
      password: '',
    },
  });

  const watchPhoto = watch('photo', {});

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const onSubmit = async (data) => {
    try {
      setIsUpdating(true);
      await updateUserProfile(data);
    } catch (err) {
      console.log(err);
    }
    navigate(-1);
  };

  if (!currentUser) {
    return null;
  }

  const isUserCreatedByEmail =
    currentUser?.providerData[0].providerId === 'password';
  return (
    <Wrapper>
      <Header />

      <ProfileEditWrapper>
        <StyledBackLink to="/profile">
          <FontAwesomeIcon icon="fa-angle-left" />
          <span>Back</span>
        </StyledBackLink>
        <EditWrapper onSubmit={handleSubmit(onSubmit)}>
          <InfoHeader>
            <h1>Change info</h1>
            <p>Changes will be reflected to every services</p>
          </InfoHeader>
          <ChangePhoto>
            <img
              src={currentUser.photoURL || imagePlaceholder}
              alt={currentUser.email}
            />
            <FileInputWrapper>
              <input
                {...register('photo')}
                type="file"
                id="avatar"
                accept="image/*"
              ></input>
              <label htmlFor="avatar">change photo</label>
            </FileInputWrapper>

            {watchPhoto.length > 0 ? <span>{watchPhoto[0].name}</span> : null}
          </ChangePhoto>
          <EditField label="name" register={register} />
          <EditField label="bio" register={register} isTextarea />
          <EditField
            label="phone"
            register={register}
            error={errors.phone?.message}
            options={{
              pattern: {
                value:
                  /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/,
                message: 'invalid phone number',
              },
            }}
          />
          {isUserCreatedByEmail ? (
            <>
              <EditField
                label="email"
                register={register}
                error={errors.email?.message}
                options={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                }}
              />
              <EditField
                label="password"
                register={register}
                type="password"
                error={errors.password?.message}
                options={{
                  minLength: {
                    value: 6,
                    message: 'password must have at least 6 characters',
                  },
                }}
              ></EditField>
            </>
          ) : null}
          <Button>Save</Button>{' '}
          {isUpdating && <StyledSpan>updating...</StyledSpan>}
        </EditWrapper>
      </ProfileEditWrapper>
    </Wrapper>
  );
};

export default ProfileEdit;
