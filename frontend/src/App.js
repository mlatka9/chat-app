import Signup from './views/Signup';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';
import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/Login';
import useDarkMode from './hooks/useDarkMode';
import useAuth from './hooks/useAuth';
import Profile from './views/Profile/Profile';
import GroupChat from 'views/GroupChat';
import ProfileEdit from 'views/ProfileEdit/ProfileEdit';
import Loading from 'components/Loading/Loading';

import './fontAwesome';

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  const { theme } = useDarkMode();
  const { isInitialUser } = useAuth();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Content>
        {isInitialUser ? (
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<GroupChat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
            <Route path="*" element={<Navigate to="/profile" />} />
          </Routes>
        ) : (
          <Loading />
        )}
      </Content>
    </ThemeProvider>
  );
}

export default App;
