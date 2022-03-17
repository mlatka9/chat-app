import React, { useState, useLayoutEffect, useContext } from 'react';

const DarkModeContext = React.createContext();

export const DarkModeProvider = ({ children }) => {
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

    if (localTheme) {
      setTheme(localTheme);
      return;
    }
    const isUserPreferDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (isUserPreferDarkScheme) {
      setTheme('dark');
    }
  }, []);

  const value = {
    theme,
    themeToggler,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export default useDarkMode;
