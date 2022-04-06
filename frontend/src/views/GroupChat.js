import React from 'react';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ChannelsSidebar from 'components/GroupChat/ChannelsSidebar/ChannelsSidebar';
import ChatSection from 'components/GroupChat/ChatSection.js/ChatSection';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
  height: 100vh;
  /* background-color: red; */
`;

const GroupChat = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

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
      <ChannelsSidebar />
      <ChatSection />
    </Wrapper>
  );
};

export default GroupChat;
