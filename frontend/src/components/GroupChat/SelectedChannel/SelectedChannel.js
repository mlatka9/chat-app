import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaceholderPhoto from 'assets/image-placeholder.jpeg';
import {
  ChannelInfo,
  MembersListWrapper,
  StyledHeader,
  AsideContent,
} from './SelectedChannel.styles';

const SelectedChannel = ({ setSelectedChannel }) => {
  const handleBackToAllChannels = () => {
    setSelectedChannel(null);
  };

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
          <h2>Front-end developers</h2>
          <p>
            Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan
            quis. In gravida mollis purus, at interdum arcu tempor non
          </p>
        </ChannelInfo>
        <MembersListWrapper>
          <h2>members</h2>
          <ul>
            <li>
              <img src={PlaceholderPhoto} alt="Xanthe Neal" />
              <span>Xanthe Neal</span>
            </li>
            <li>
              <img src={PlaceholderPhoto} alt="Xanthe Neal" />
              <span>Xanthe Neal</span>
            </li>
          </ul>
        </MembersListWrapper>
      </AsideContent>
    </>
  );
};

export default SelectedChannel;
