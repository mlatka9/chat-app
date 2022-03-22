import styled from 'styled-components';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const Wrapper = styled.div`
  textarea {
    min-height: 200px;
    max-height: 400px;
  }
`;

const StyledInput = styled.input`
  display: block;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.grey};
  outline: 1px solid ${({ theme }) => theme.color.lightGrey};
  border: none;
  width: 100%;
  max-width: 420px;
  background-color: ${({ theme }) => theme.color.white};
  resize: vertical;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.veryDarkGrey};
    color: ${({ theme }) => theme.color.veryDarkGrey};
  }
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkGrey};
  text-transform: capitalize;
  margin-bottom: 8px;
  display: block;
`;

const EditField = ({
  label,
  isTextarea,
  type = 'text',
  register,
  options,
  error,
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
      ></StyledInput>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default EditField;
