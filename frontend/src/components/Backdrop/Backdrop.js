import { createPortal } from 'react-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`;

const backdropRoot = document.getElementById('backdrop');

const Backdrop = ({ onClick }) => {
  return createPortal(<StyledDiv onClick={onClick} />, backdropRoot);
};

export default Backdrop;
