import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaceholderPhoto from 'assets/image-placeholder.jpeg';
import {
  ChannelInfo,
  MembersListWrapper,
  StyledHeader,
  AsideContent,
} from './SelectedChannel.styles';
import { Routes, Route, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getChannel } from 'app/channelSlice';
import { Link, useNavigate } from 'react-router-dom';

const SelectedChannel = ({ joinedChannel, setIsAllChannelsSelected }) => {
  const params = useParams();
  const channel = useSelector((state) => state.channel[params.id]);

  const handleBackToAllChannels = () => {
    setIsAllChannelsSelected(true);
  };

  if (joinedChannel !== params.id)
    return (
      <StyledHeader>
        <button onClick={handleBackToAllChannels}>
          <FontAwesomeIcon icon={['fa', 'chevron-left']} />
          <span>all channels</span>
        </button>
      </StyledHeader>
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
          <ul>
            {channel.members.map((member) => (
              <li key={member.id}>
                <img
                  src={member.photoURL || PlaceholderPhoto}
                  alt={member.name}
                />
                <span>{member.name}</span>
              </li>
            ))}
          </ul>
        </MembersListWrapper>
      </AsideContent>
    </>
  );
};

export default SelectedChannel;
