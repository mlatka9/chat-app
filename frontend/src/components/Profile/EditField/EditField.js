import ErrorMessage from 'components/Profile/ErrorMessage/ErrorMessage';
import { StyledInput, StyledLabel, Wrapper } from './EditField.styles';

const EditField = ({
  label,
  isTextarea,
  type = 'text',
  register,
  options,
  error,
  isUpdating,
}) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput
        as={isTextarea ? 'textarea' : 'input'}
        type={type}
        id={label}
        placeholder={`Enter your ${label}...`}
        {...register(label, options)}
        disabled={isUpdating}
      ></StyledInput>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default EditField;
