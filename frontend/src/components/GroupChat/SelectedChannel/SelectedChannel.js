import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaceholderPhoto from 'assets/image-placeholder.jpeg';
import {
  ChannelInfo,
  MembersListWrapper,
  StyledHeader,
  AsideContent,
  Member,
  MemberList,
} from './SelectedChannel.styles';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SelectedChannelSkeleton } from 'components/Common/Loaders/SkeletonLoading/SkeletonLoaders';
import useWindowDimensions from 'hooks/useWindowDimensions';

const SelectedChannel = ({ joinedChannel, setIsAllChannelsSelected }) => {
  const params = useParams();
  const channel = useSelector((state) => state.channel[params.id]);
  const { height } = useWindowDimensions();

  const handleBackToAllChannels = () => {
    setIsAllChannelsSelected(true);
  };

  if (joinedChannel !== params.id)
    return (
      <>
        <StyledHeader>
          <button onClick={handleBackToAllChannels}>
            <FontAwesomeIcon icon={['fa', 'chevron-left']} />
            <span>all channels</span>
          </button>
        </StyledHeader>
        <SelectedChannelSkeleton />
      </>
    );

  return (
    <>
      <StyledHeader>
        <button onClick={handleBackToAllChannels}>
          <FontAwesomeIcon icon={['fa', 'chevron-left']} />
          <span>all channels</span>
        </button>
      </StyledHeader>
      <AsideContent>
        <ChannelInfo>
          <h2>{channel.name}</h2>
          <p>{channel.description}</p>
        </ChannelInfo>
        <MembersListWrapper>
          <h2>members</h2>
          <MemberList innerHeight={height}>
            {channel.members.map((member) => (
              <Member key={member.id}>
                <img
                  src={member.photoURL || PlaceholderPhoto}
                  alt={member.name}
                />
                <span>{member.name}</span>
                {channel.owner === member.id ? (
                  <FontAwesomeIcon icon="crown" />
                ) : null}
              </Member>
            ))}
          </MemberList>
        </MembersListWrapper>
      </AsideContent>
    </>
  );
};

export default SelectedChannel;
