import React from 'react';
import useAuth from 'hooks/useAuth';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ChannelsSidebar from 'components/GroupChat/ChannelsSidebar/ChannelsSidebar';
import ChatSection from 'components/GroupChat/ChatSection.js/ChatSection';
import styled from 'styled-components';
import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getChannel } from 'app/channelSlice';
import { getPostsFromChannel } from 'app/postSlice';
import channelService from 'service/channels';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
  height: 100vh;
  /* background-color: red; */
`;

const GroupChat = () => {
  const [joinedChannel, setJoinedChannel] = useState(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
