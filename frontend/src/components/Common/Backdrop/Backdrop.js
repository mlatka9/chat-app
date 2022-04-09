import { StyledDiv } from './Backdrop.styes';

const Backdrop = ({ onClick, isDark, isAnimated }) => (
  <StyledDiv onClick={onClick} isDark={isDark} isAnimated={isAnimated} />
);

export default Backdrop;
