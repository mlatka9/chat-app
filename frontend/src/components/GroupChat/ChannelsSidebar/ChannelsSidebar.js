import AllChannels from 'components/GroupChat/AllChannels/AllChannels';
import SelectedChannel from 'components/GroupChat/SelectedChannel/SelectedChannel';

import UserBanner from 'components/UserBanner/UserBanner';
import DarkModeToggle from 'components/DarkModeToggle/DarkModeToggle';
import { useState } from 'react';
import { UserBannerWrapper, Wrapper } from './ChannelsSidebar.styles';

const ChannelsSidebar = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <Wrapper>
      {selectedChannel ? (
        <SelectedChannel setSelectedChannel={setSelectedChannel} />
      ) : (
        <AllChannels setSelectedChannel={setSelectedChannel} />
      )}
      <UserBannerWrapper>
        <DarkModeToggle />
        <UserBanner showOnTop isBigger />
      </UserBannerWrapper>
    </Wrapper>
  );
};

export default ChannelsSidebar;
