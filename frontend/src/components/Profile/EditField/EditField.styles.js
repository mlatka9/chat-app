import styled from 'styled-components';

export const Wrapper = styled.div`
  textarea {
    min-height: 200px;
    max-height: 400px;
  }
`;

export const StyledInput = styled.input`
  display: block;
  padding: 16px 20px;
  border-radius: 12px;
  color: ${({ theme }) => theme.color.grey};
  outline: 1px solid ${({ theme }) => theme.color.grey600};
  border: none;
  width: 100%;
  max-width: 420px;
  background-color: ${({ theme }) => theme.color.grey700};
  resize: vertical;
  color: ${({ theme }) => theme.color.grey200};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.grey500};
    color: ${({ theme }) => theme.color.grey200};
  }
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.grey200};
  text-transform: capitalize;
  margin-bottom: 8px;
  display: block;
`;
