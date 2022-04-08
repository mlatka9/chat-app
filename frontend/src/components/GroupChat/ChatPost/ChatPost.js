import PlaceholderImage from 'assets/image-placeholder.jpeg';
import styled from 'styled-components';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const Wrapper = styled.div`
  display: flex;
  margin: 0 70px 38px;
  @media (max-width: 650px) {
    margin: 0 20px 30px;
  }
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

const ChatPost = ({ post }) => {
  const timestamp = window.Date.parse(post.createdAt);
  return (
    <Wrapper>
      <img
        src={post.postedBy.photoURL || PlaceholderImage}
        alt="Nellie Francis"
      ></img>
      <div>
        <div>
          <Name>{post.postedBy.name}</Name>
          <Date>{timeAgo.format(timestamp)}</Date>
        </div>
        <Content>{post.content}</Content>
      </div>
    </Wrapper>
  );
};

export default ChatPost;
