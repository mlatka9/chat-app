import { createPortal } from 'react-dom';
import { StyledDiv } from './Backdrop.styes';

const backdropRoot = document.getElementById('backdrop');

// const Backdrop = ({ onClick, isDark, isAnimated }) => {
//   return createPortal(
//     <StyledDiv onClick={onClick} isDark={isDark} isAnimated={isAnimated} />,
//     backdropRoot
//   );
// };

const Backdrop = ({ onClick, isDark, isAnimated }) => (
  <StyledDiv onClick={onClick} isDark={isDark} isAnimated={isAnimated} />
);

export default Backdrop;
