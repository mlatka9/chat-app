import {
  ChatSectionSkeletonWrapper,
  MemberWrapper,
  PostWrapper,
  SelectedChannelWrapper,
  StyledDiv,
} from './SkeletonLoading.styles';

const MemberLoader = () => (
  <MemberWrapper>
    <StyledDiv height="40" width="40" borderRadius="10" />
    <StyledDiv height="25" width="110" />
  </MemberWrapper>
);

const SelectedChannelSkeleton = () => (
  <SelectedChannelWrapper>
    <StyledDiv height="30" />
    <StyledDiv height="160" marginBottom="40" />
    <StyledDiv height="30" width="200" />
    <MemberLoader />
    <MemberLoader />
    <MemberLoader />
    <MemberLoader />
  </SelectedChannelWrapper>
);

const PostLoader = ({ size }) => (
  <PostWrapper>
    <StyledDiv height="40" width="40" borderRadius="10" marginRight="20" />
    <div>
      <div>
        <StyledDiv
          height="25"
          width="100"
          inline
          marginRight="20"
          marginBottom="10"
        />
        <StyledDiv height="20" width="80" inline marginBottom="10" />
      </div>

      <StyledDiv height={size} />
    </div>
  </PostWrapper>
);

const ChatSectionSkeleton = () => (
  <ChatSectionSkeletonWrapper>
    <div>
      <PostLoader size="50" />
      <PostLoader size="60" />
      <PostLoader size="60" />
      <PostLoader size="40" />
      <PostLoader size="100" />
    </div>

    <StyledDiv height="50" borderRadius="10" />
  </ChatSectionSkeletonWrapper>
);

const SingleChannel = ({ size }) => (
  <div>
    <StyledDiv
      height="42"
      width="42"
      inline
      marginRight="10"
      marginBottom="22"
      borderRadius="8"
    />
    <StyledDiv height="35" width={size} inline marginBottom="22" />
  </div>
);

const AllChannelsSkeleton = () => (
  <>
    <SingleChannel size="150" />
    <SingleChannel size="130" />
    <SingleChannel size="150" />
    <SingleChannel size="140" />
    <SingleChannel size="160" />
    <SingleChannel size="150" />
  </>
);

export { SelectedChannelSkeleton, ChatSectionSkeleton, AllChannelsSkeleton };
