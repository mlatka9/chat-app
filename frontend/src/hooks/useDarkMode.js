import { useState, useLayoutEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    const isUserPreferDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (isUserPreferDarkScheme) {
      setTheme('dark');
    }
  }, []);

  return [theme, themeToggler];
};

export default useDarkMode;
