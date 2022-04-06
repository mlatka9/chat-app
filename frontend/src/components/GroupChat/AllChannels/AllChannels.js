import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  List,
  ListItem,
  StyledHeader,
  StyledInput,
} from './AllChannels.styles';
import { AsideContent } from '../SelectedChannel/SelectedChannel.styles';

const AllChannels = ({ setSelectedChannel }) => {
  const handleSelectChannel = (channel) => {
    setSelectedChannel(channel);
  };

  return (
    <>
      <StyledHeader>
        <h1>Channels</h1>
        <button>
          <FontAwesomeIcon icon={['fa', 'plus']} />
        </button>
      </StyledHeader>
      <AsideContent>
        <StyledInput placeholder="search" />
        <List>
          <ListItem onClick={() => handleSelectChannel('Front-end developers')}>
            <div>FD</div>Front-end developers
          </ListItem>
          <ListItem onClick={() => handleSelectChannel('Random')}>
            <div>R</div>Random
          </ListItem>
        </List>
      </AsideContent>
    </>
  );
};

export default AllChannels;
