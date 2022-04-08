import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputWrapper, Wrapper, StyledInput } from './FormField.styles';
import ErrorMessage from 'components/Profile/ErrorMessage/ErrorMessage';

const FormField = ({
  label,
  register,
  options,
  error,
  type = 'text',
  icon,
  isBig = false,
  isTextArea,
}) => {
  return (
    <Wrapper>
      <InputWrapper error={error} hasIcon={icon}>
        <StyledInput
          as={isTextArea ? 'textarea' : 'input'}
          placeholder={label}
          type={type}
          hasIcon={icon}
          {...register(label, options)}
        ></StyledInput>
        <label>{label}</label>
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
      </InputWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default FormField;
