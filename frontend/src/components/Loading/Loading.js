import styled, { keyframes } from 'styled-components';
import { ReactComponent as Spinner } from 'assets/spinner.svg';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: ${spin} 1500ms linear infinite;
  }
  path {
    fill: ${({ theme }) => theme.color.veryDarkGrey};
  }
`;

const Loading = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);
export default Loading;
