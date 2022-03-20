import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  padding: 28px 50px;
  img {
    height: 72px;
    width: 72px;
    border-radius: 8px;
  }
`;

const FieldName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.lightGrey};
`;

const FieldValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
`;

const ProfileField = ({ name, value = '', hasImage }) => {
  return (
    <Wrapper>
      <FieldName>{name}</FieldName>
      {hasImage ? (
        <img src={value} alt={name} />
      ) : (
        <FieldValue>{value}</FieldValue>
      )}
    </Wrapper>
  );
};

export default ProfileField;
