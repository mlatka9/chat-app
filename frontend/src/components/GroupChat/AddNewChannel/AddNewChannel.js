import { useForm } from 'react-hook-form';
import FormField from 'components/Login/FormField/FormField';
import { createPortal } from 'react-dom';
import Backdrop from 'components/Common/Backdrop/Backdrop';
import Button from 'components/Common/Button/Button';
import { createChannel } from 'redux/channelSlice';
import { useDispatch } from 'react-redux';
import FormCheckbox from 'components/Common/FormCheckbox/FormCheckbox';
import { Wrapper, ButtonsWrapper } from './AddNewChannel.styles';

const modalRoot = document.querySelector('#modal-root');

const AddNewChannel = ({ handleCloseForm }) => {
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data);
    const {
      name,
      description,
      abbreviation,
      'private channel': isPrivate,
      password,
    } = data;

    const channel = {
      name,
      description,
      abbreviation,
      isPrivate,
    };

    if (isPrivate) {
      channel.password = password;
    }

    dispatch(createChannel(channel));
    handleCloseForm();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      'private channel': false,
    },
  });

  const isPrvateChecked = watch('private channel');

  return createPortal(
    <>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <h2>Add new channel</h2>
        <FormField
          label="name"
          options={{
            required: 'Name is required',
          }}
          error={errors.name?.message}
          register={register}
        ></FormField>
        <FormField
          label="description"
          options={{
            required: 'Description is required',
            maxLength: {
              value: 200,
              message: 'Abbreviation can be up to 200 characters long',
            },
          }}
          error={errors.description?.message}
          register={register}
          isTextArea
          hasCounter
          watch={watch}
        ></FormField>
        <FormField
          label="abbreviation"
          options={{
            required: 'Abbreviation is required',
            maxLength: {
              value: 2,
              message: 'Abbreviation can be up to 2 characters long',
            },
          }}
          error={errors.abbreviation?.message}
          register={register}
        ></FormField>

        <FormCheckbox
          label="private channel"
          register={register}
          isSelected={isPrvateChecked}
        />
        {isPrvateChecked ? (
          <FormField
            label="password"
            type="password"
            options={{
              required: 'Password is required',
              minLength: {
                value: 4,
                message: 'Password must have at least 4 characters',
              },
            }}
            error={errors.password?.message}
            register={register}
          ></FormField>
        ) : null}
        <ButtonsWrapper>
          <Button type="button" isAccent onClick={handleCloseForm}>
            Cancel
          </Button>
          <Button>Add</Button>
        </ButtonsWrapper>
      </Wrapper>
      <Backdrop isDark isAnimated />
    </>,
    modalRoot
  );
};

export default AddNewChannel;
