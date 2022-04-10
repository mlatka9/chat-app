import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  span {
    display: block;
    width: 28px;
    height: 3px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.grey400};
    position: absolute;
    top: 50%;
    left: 6px;
    transition: 200ms ease-in-out;
  }
  span:nth-last-of-type(1) {
    transform: ${({ isOpen }) =>
      isOpen ? 'translate(0, 0px) rotate(45deg)' : 'translate(0, -10px)'};
  }
  span:nth-last-of-type(2) {
    transform: ${({ isOpen }) =>
      isOpen ? 'translate(0, 0px) rotate(-45deg)' : 'translate(0, 0px)'};
  }
  span:nth-last-of-type(3) {
    transform: ${({ isOpen }) =>
      isOpen ? 'translate(0, 0px) rotate(-45deg)' : 'translate(0, 10px)'};
  }
`;

const HamburgerIcon = ({ isOpen }) => (
  <Wrapper isOpen={isOpen}>
    <span />
    <span />
    <span />
  </Wrapper>
);

export default HamburgerIcon;
