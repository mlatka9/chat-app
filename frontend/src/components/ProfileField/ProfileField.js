import styled from 'styled-components';

const FieldName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.lightGrey};
  width: 200px;
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const Wrapper = styled.div`
  display: flex;
  grid-template-columns: 220px 1fr;
  padding: 28px 50px;
  @media (max-width: 650px) {
    justify-content: space-between;
    padding: 20px 30px;
  }
  img {
    height: 72px;
    width: 72px;
    border-radius: 8px;
  }
`;

const FieldValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
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
