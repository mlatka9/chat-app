import { StyledSpan } from './WordCounter.styles';

const WordCounter = ({ text, maxLength }) => {
  const textLength = text.length;
  return (
    <StyledSpan isLimitExceeded={textLength > maxLength}>
      {textLength} / {maxLength}
    </StyledSpan>
  );
};

export default WordCounter;
