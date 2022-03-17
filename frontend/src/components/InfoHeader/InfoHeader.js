import styled from 'styled-components';

const Wrapper = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    margin-bottom: 5px;
    color: ${({ theme }) => theme.color.black};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.color.grey};
  }
`;
const InfoHeader = () => {
  return (
    <Wrapper>
      <h2>Profile</h2>
      <p>Some info may be visible to other people</p>
    </Wrapper>
  );
};

export default InfoHeader;
