import Signup from './views/Signup';
import { AuthProvider } from './hooks/useAuth';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faFacebook,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './views/Login';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import useDarkMode from './hooks/useDarkMode';

library.add(fab, faLock, faEnvelope, faFacebook, faGoogle, faGithub);

const Content = styled.div`
  height: 100%;
  display: flex;
`;

function App() {
  const [theme, themeToggler] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AuthProvider>
        <Content>
          <DarkModeToggle theme={theme} themeToggler={themeToggler} />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Content>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
