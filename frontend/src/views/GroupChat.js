import React from 'react';
import useAuth from 'hooks/useAuth';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ChannelsSidebar from 'components/GroupChat/ChannelsSidebar/ChannelsSidebar';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getChannel, addMemberToChannel } from 'redux/channelSlice';
import { getPostsFromChannel, addPost } from 'redux/postSlice';
import channelService from 'service/channels';
import { io } from 'socket.io-client';
import ReauthenticatePopUp from 'components/Profile/ReauthenticatePopUp/ReauthenticatePopUp';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
  height: 100vh;
  @media (max-width: 800px) {
    grid-template-columns: 250px 1fr;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const GroupChat = () => {
  const [joinedChannel, setJoinedChannel] = useState(null);
  const [isReauthPopupOpen, setIsReauthPopupOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socketRef = useRef();

  const params = useParams();

  const getChannelData = async (channelPassword) => {
    await channelService.joinChannel(params.id, channelPassword);
    await Promise.all([
      dispatch(getChannel(params.id)),
      dispatch(getPostsFromChannel(params.id)),
    ]);
  };

  const handleReauthSubmit = async (channelPassword) => {
    await getChannelData(channelPassword);
    setJoinedChannel(params.id);
    setIsReauthPopupOpen(false);
  };

  const handleReauthCancel = () => {
    setIsReauthPopupOpen(false);
    navigate('');
  };

  useEffect(() => {
    if (!params.id) return;
    getChannelData()
      .then(() => setJoinedChannel(params.id))
      .catch((err) => {
        if (err.response.status === 401) {
          console.log(err);
          setIsReauthPopupOpen(true);
        } else {
          navigate('');
        }
      });
  }, [params.id]);

  useEffect(() => {
    if (!joinedChannel) return;
    socketRef.current = io(process.env.REACT_APP_SERVER_BASE_URL);

    socketRef.current.on('connect', () => {
      socketRef.current.emit('join room', joinedChannel);
    });

    socketRef.current.on('chat message', (message) => {
      dispatch(addPost(message));
    });

    socketRef.current.on('chat member', (member) => {
      dispatch(addMemberToChannel({ channelId: joinedChannel, member }));
    });

    return () => socketRef.current.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [joinedChannel]);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  return (
    <>
      <Wrapper>
        <ChannelsSidebar joinedChannel={joinedChannel} />
        <Outlet context={{ joinedChannel }} />
      </Wrapper>
      {isReauthPopupOpen ? (
        <ReauthenticatePopUp
          onSubmit={handleReauthSubmit}
          onCancel={handleReauthCancel}
          headerText="Provide password to channel"
        />
      ) : null}
    </>
  );
};

export default GroupChat;
