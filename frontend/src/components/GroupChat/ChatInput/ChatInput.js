import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createPost } from 'redux/postSlice';
import WordCounter from 'components/Common/WordCounter/WordCounter';
import { Wrapper } from './ChatInput.styles';

const ChatInput = ({ channelId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (!inputValue || inputValue.length > 250) return;
    const postBody = {
      content: inputValue,
      channelId,
    };
    setInputValue('');
    await dispatch(createPost(postBody));
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
      <WordCounter text={inputValue} maxLength={250} />
    </Wrapper>
  );
};

export default ChatInput;
