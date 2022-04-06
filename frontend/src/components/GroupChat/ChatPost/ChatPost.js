import PlaceholderImage from 'assets/image-placeholder.jpeg';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 70px 38px;
  img {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    margin-right: 28px;
  }
`;

const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.grey500};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  margin-right: 20px;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.grey500};
`;

const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.grey100};
  margin-top: 8px;
  line-height: 25px;
`;

const ChatPost = () => {
  return (
    <Wrapper>
      <img src={PlaceholderImage} alt="Nellie Francis"></img>
      <div>
        <div>
          <Name>Nellie Francis</Name>
          <Date>yesterday at 2:29 AM</Date>
        </div>

        <Content>
          Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis
          neque condimentum aliquet. Phasellus consequat et justo eu accumsan
          🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel
          mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque
          eget massa 🤣
        </Content>
      </div>
    </Wrapper>
  );
};

export default ChatPost;
