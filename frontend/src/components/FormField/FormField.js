import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputWrapper, Wrapper } from './FormField.styles';

const FormField = ({
  label,
  register,
  options,
  error,
  type = 'text',
  icon,
}) => {
  return (
    <Wrapper>
      <InputWrapper error={error}>
        <input
          placeholder={label}
          type={type}
          {...register(label, options)}
        ></input>
        <FontAwesomeIcon icon={icon} />
      </InputWrapper>

      {error && <span>{error}</span>}
    </Wrapper>
  );
};

export default FormField;
