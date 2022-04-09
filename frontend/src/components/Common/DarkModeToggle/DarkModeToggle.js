import { Wrapper } from './DarkModeToggle.styles';
import useDarkMode from 'hooks/useDarkMode';

const DarkModeToggle = () => {
  const { theme, themeToggler } = useDarkMode();

  const handleOnChange = () => {
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
