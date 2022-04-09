import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputWrapper, Wrapper, StyledInput } from './FormField.styles';
import ErrorMessage from 'components/Profile/ErrorMessage/ErrorMessage';
import WordCounter from 'components/Common/WordCounter/WordCounter';

const FormField = ({
  label,
  register,
  options,
  error,
  type = 'text',
  icon,
  isTextArea,
  hasCounter,
  watch,
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
        {hasCounter ? (
          <WordCounter text={watch('description') || ''} maxLength={200} />
        ) : null}
      </InputWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default FormField;
