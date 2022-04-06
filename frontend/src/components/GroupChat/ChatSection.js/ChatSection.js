import ChatPost from '../ChatPost/ChatPost';
import ChatInput from '../ChatInput/ChatInput';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* padding: 0 70px; */
`;

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 70px;
  margin-bottom: 100px;
  background-color: ${({ theme }) => theme.color.grey800};
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
  /* position: relative; */
  /* &:after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 1px;
    left: 0;
    z-index: -1;
    background-color: red;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
  } */
  h2 {
    color: ${({ theme }) => theme.color.grey200};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.bolder};
  }
`;

const ChatPostsWrapper = styled.div`
  /* 100% viewport height - 60px header - 120px input wapper */
  height: calc(100vh - 160px - 120px);
  overflow-y: scroll;
`;

const ChatSection = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <h2>Front-end developers</h2>
      </StyledHeader>
      <ChatPostsWrapper>
        <ChatPost />
        <ChatPost />
        <ChatPost />
        <ChatPost />
        <ChatPost />
        <ChatPost />
        <ChatPost />
        <ChatPost />
        <ChatPost />
      </ChatPostsWrapper>
      <ChatInput />
    </Wrapper>
  );
};

export default ChatSection;
