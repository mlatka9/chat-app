import styled from 'styled-components';
import { useState } from 'react';
import { createPortal } from 'react-dom';
const Wrapper = styled.div``;

const modalRoot = document.querySelector('#modal-root');

const ConfirmationPasswordPopup = () => {
  const [inputValue, setInputValue] = useState();

  return createPortal(
    <Wrapper>
      <h2>Confirm your password</h2>
      <input
        type="password"
        value={inputValue}
        onClick={({ target }) => setInputValue(target.value)}
      ></input>
    </Wrapper>,
    modalRoot
  );
};

export default ConfirmationPasswordPopup;
