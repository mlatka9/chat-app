import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createPost } from 'app/postSlice';

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  height: 52px;
  background-color: ${({ theme }) => theme.color.grey600};
  border-radius: 8px;
  position: relative;
  margin: auto 70px 40px;

  input {
    background-color: transparent;
    padding: 16px 60px 16px 16px;
    height: 100%;
    width: 100%;
    border: none;
    letter-spacing: 0.6px;
    border-radius: 8px;
    color: ${({ theme }) => theme.color.grey100};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.color.grey400};
    }
  }
  button {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.blue500};
    border: none;
    position: absolute;
    right: 6px;
    cursor: pointer;
  }
`;

const ChatInput = ({ channelId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const postBody = {
      content: inputValue,
      channelId,
    };
    await dispatch(createPost(postBody));
    setInputValue('');
  };

  return (
    <Wrapper onSubmit={handleAddPost}>
      <input
        placetholder="Type a message here"
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button type="submit">
        <FontAwesomeIcon inverse icon={['fa', 'paper-plane']} />
      </button>
    </Wrapper>
  );
};

export default ChatInput;
