import { useState } from 'react';
import { Wrapper } from './DarkModeToggle.styles';

const DarkModeToggle = ({ theme, themeToggler }) => {
  //   const [isLight, setIsLight] = useState(theme === '');

  const handleOnChange = () => {
    // setIsLight(!isLight);
    themeToggler();
  };

  const handleKeypress = (e) => {
    if (e.code === 'Enter') {
      handleOnChange();
    }
  };

  return (
    <Wrapper isLight={theme === 'light'}>
      <input
        type="checkbox"
        id="toggle"
        onChange={handleOnChange}
        onKeyDown={handleKeypress}
        checked={theme === 'light'}
      />

      <label htmlFor="toggle" className="toggle--label">
        <span />
      </label>
    </Wrapper>
  );
};

export default DarkModeToggle;
