import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
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
  }
`;

const ChatInput = () => {
  return (
    <Wrapper>
      <input placeholder="Type a message here" />
      <button type="submit">
        <FontAwesomeIcon inverse icon={['fa', 'paper-plane']} />
      </button>
    </Wrapper>
  );
};

export default ChatInput;
