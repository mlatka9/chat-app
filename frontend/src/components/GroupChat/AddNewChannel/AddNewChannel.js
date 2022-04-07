import { useForm } from 'react-hook-form';
import FormField from 'components/Login/FormField/FormField';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import Backdrop from 'components/Backdrop/Backdrop';
import Button from 'components/Button/Button';
import { createChannel } from 'app/channelSlice';
import { useDispatch } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

const slideIn = keyframes`
  0%{
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  100%{
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const Wrapper = styled.form`
  width: 80%;
  max-width: 700px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.grey800};
  padding: 40px 70px 30px;
  z-index: 1000000;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 200ms ease-in-out;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.grey100};
    text-transform: uppercase;
    margin: 0 0 26px;
  }
  > div {
    margin-bottom: 10px;
  }
  button {
    margin-top: 20px;
    align-self: flex-end;
  }
`;

const AddNewChannel = ({ handleCloseForm }) => {
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { name, description, abbreviation } = data;

    const channel = {
      name,
      description,
      abbreviation,
    };
    dispatch(createChannel(channel));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: '',
    password: '',
  });
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
          // icon="envelope"
        ></FormField>
        <FormField
          label="description"
          options={{
            required: 'Description is required',
          }}
          error={errors.description?.message}
          register={register}
          isTextArea
          // icon="envelope"
        ></FormField>
        <FormField
          label="abbreviation"
          options={{
            required: 'Abbreviation is required',
          }}
          error={errors.abbreviation?.message}
          register={register}
          // icon="envelope"
        ></FormField>
        <Button>Add</Button>
      </Wrapper>
      <Backdrop onClick={handleCloseForm} isDark isAnimated />
    </>,
    modalRoot
  );
};

export default AddNewChannel;
