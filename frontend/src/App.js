import Signup from './views/Signup';
import { AuthProvider } from './hooks/useAuth';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';
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

library.add(fab, faLock, faEnvelope, faFacebook, faGoogle, faGithub);

const Content = styled.div`
  height: 100%;
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AuthProvider>
        <Content>
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
