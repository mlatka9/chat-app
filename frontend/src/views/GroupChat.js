import React from 'react';
import useAuth from 'hooks/useAuth';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ChannelsSidebar from 'components/GroupChat/ChannelsSidebar/ChannelsSidebar';
import ChatSection from 'components/GroupChat/ChatSection.js/ChatSection';
import styled from 'styled-components';
import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getChannel, addMemberToChannel } from 'app/channelSlice';
import { getPostsFromChannel, addPost } from 'app/postSlice';
import channelService from 'service/channels';
import { io } from 'socket.io-client';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
  height: 100vh;
  /* background-color: red; */
  @media (max-width: 800px) {
    grid-template-columns: 250px 1fr;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const GroupChat = () => {
  const [joinedChannel, setJoinedChannel] = useState(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socketRef = useRef();

  const params = useParams();

  const getChannelData = async () => {
    try {
      await channelService.joinChannel(params.id);
      await Promise.all([
        dispatch(getChannel(params.id)),
        dispatch(getPostsFromChannel(params.id)),
      ]);
      setJoinedChannel(params.id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!params.id) return;

    getChannelData();
  }, [params.id]);

  useEffect(() => {
    if (!joinedChannel) return;
    socketRef.current = io(process.env.REACT_APP_SERVER_BASE_URL);

    socketRef.current.on('connect', () => {
      console.log(socketRef.current.id); // ojIckSD2jqNzOqIrAGzL
      socketRef.current.emit('join room', joinedChannel);
    });

    socketRef.current.on('chat message', (message) => {
      console.log('new message', message);
      dispatch(addPost(message));
    });

    socketRef.current.on('chat member', (member) => {
      dispatch(addMemberToChannel({ channelId: joinedChannel, member }));
    });

    return () => socketRef.current.disconnect();
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
    <Wrapper>
      <ChannelsSidebar joinedChannel={joinedChannel} />
      <Outlet context={{ joinedChannel }} />
    </Wrapper>
  );
};

export default GroupChat;
