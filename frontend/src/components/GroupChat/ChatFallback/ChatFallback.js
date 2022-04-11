import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px;

  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 900px) {
    padding: 50px 50px;
  }

  h2,
  p {
    width: 500px;
  }
  h2 {
    font-size: 50px;
    color: ${({ theme }) => theme.color.grey300};
    text-transform: uppercase;
    letter-spacing: 4px;
    line-height: 50px;
    margin-bottom: 50px;
    @media (max-width: 900px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 25px;
    color: ${({ theme }) => theme.color.grey500};
    line-height: 40px;
    @media (max-width: 900px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

const ChatFallback = () => {
  return (
    <Wrapper>
      <h2>
        Welcome <br />
        to chat <br />
        application
      </h2>
      <p>
        Select any chat to start conversation with others or create your own
        channel and ask your friends to join you 😀
      </p>
    </Wrapper>
  );
};

export default ChatFallback;
