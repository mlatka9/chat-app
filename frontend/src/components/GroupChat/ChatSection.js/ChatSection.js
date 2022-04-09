import ChatPost from '../ChatPost/ChatPost';
import ChatInput from '../ChatInput/ChatInput';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { ChatSectionSkeleton } from 'components/Common/Loaders/SkeletonLoading/SkeletonLoaders';
import { ChatPostsWrapper, StyledHeader, Wrapper } from './ChatSection.styles';

const ChatSection = () => {
  const { joinedChannel } = useOutletContext();
  const channel = useSelector((state) => state.channel[joinedChannel]);
  const posts = useSelector((state) => state.post);
  const postEndRef = useRef(null);
  const params = useParams();

  useEffect(() => {
    if (postEndRef.current) {
      postEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [posts]);

  useEffect(() => {
    if (postEndRef.current) {
      postEndRef.current.scrollIntoView();
    }
  }, [joinedChannel]);

  if (!joinedChannel || joinedChannel !== params.id) {
    return (
      <div>
        <StyledHeader></StyledHeader>
        <ChatSectionSkeleton />
      </div>
    );
  }

  return (
    <Wrapper>
      <StyledHeader>
        <h2>{channel.name}</h2>
      </StyledHeader>
      <ChatPostsWrapper>
        {posts.map((post) => (
          <ChatPost key={post.id} post={post} />
        ))}

        <div ref={postEndRef} />
      </ChatPostsWrapper>
      <ChatInput channelId={joinedChannel} />
    </Wrapper>
  );
};

export default ChatSection;
