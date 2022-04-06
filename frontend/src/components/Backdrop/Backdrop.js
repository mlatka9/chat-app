import { createPortal } from 'react-dom';
import { StyledDiv } from './Backdrop.styes';

const backdropRoot = document.getElementById('backdrop');

const Backdrop = ({ onClick }) => {
  return createPortal(<StyledDiv onClick={onClick} />, backdropRoot);
};

export default Backdrop;
