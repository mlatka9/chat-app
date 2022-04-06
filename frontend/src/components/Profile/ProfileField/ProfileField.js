import { FieldName, FieldValue, Wrapper } from './ProfileField.styles';

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
