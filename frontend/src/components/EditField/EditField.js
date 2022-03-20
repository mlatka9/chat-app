import styled from 'styled-components';

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
  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.veryDarkGrey};
    color: ${({ theme }) => theme.color.veryDarkGrey};
  }
`;

const StyledTextarea = styled(StyledInput)`
  resize: none;
  height: 200px;
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
    <div>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      {isTextarea ? (
        <StyledTextarea
          as="textarea"
          id={label}
          placeholder={`Enter your ${label}...`}
          {...register(label, options)}
        ></StyledTextarea>
      ) : (
        <StyledInput
          type={type}
          id={label}
          placeholder={`Enter your ${label}...`}
          {...register(label, options)}
        ></StyledInput>
      )}
    </div>
  );
};

export default EditField;
