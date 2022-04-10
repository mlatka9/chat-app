import AllChannels from 'components/GroupChat/AllChannels/AllChannels';
import SelectedChannel from 'components/GroupChat/SelectedChannel/SelectedChannel';
import UserBanner from 'components/UserBanner/UserBanner';
import DarkModeToggle from 'components/Common/DarkModeToggle/DarkModeToggle';
import { useState } from 'react';
import {
  UserBannerWrapper,
  Wrapper,
  MobileToggle,
} from './ChannelsSidebar.styles';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import HamburgerIcon from 'components/Common/HamburgerIcon/HamburgerIcon';

const ChannelsSidebar = ({ joinedChannel }) => {
  const [isAllChannelsSelected, setIsAllChannelsSelected] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setIsAllChannelsSelected(false);
    } else {
      setIsAllChannelsSelected(true);
    }
  }, [params.id]);

  if (isAllChannelsSelected === null) return null;

  return (
    <Wrapper isMobileMenuOpen={isMobileMenuOpen}>
      <MobileToggle onClick={handleToggleMenu} isOpen={isMobileMenuOpen}>
        <HamburgerIcon isOpen={isMobileMenuOpen} />
      </MobileToggle>
      {isAllChannelsSelected ? (
        <AllChannels setIsAllChannelsSelected={setIsAllChannelsSelected} />
      ) : (
        <SelectedChannel
          joinedChannel={joinedChannel}
          setIsAllChannelsSelected={setIsAllChannelsSelected}
        />
      )}
      <UserBannerWrapper>
        <DarkModeToggle />
        <UserBanner showOnTop isBigger />
      </UserBannerWrapper>
    </Wrapper>
  );
};

export default ChannelsSidebar;
