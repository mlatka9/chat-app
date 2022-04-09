import PlaceholderImage from 'assets/image-placeholder.jpeg';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { Content, Date, Name, Wrapper } from './ChatPost.styles';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

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
