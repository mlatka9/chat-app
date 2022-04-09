import Signup from './views/Signup/Signup';
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
import Loading from 'components/Common/Loaders/Loading/Loading';
import ChatFallback from 'components/GroupChat/ChatFallback/ChatFallback';
import ChatSection from 'components/GroupChat/ChatSection.js/ChatSection';

import './fontAwesome';

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  const { theme } = useDarkMode();
  const { retrivingUserState, retrivingUserStateEnum } = useAuth();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Content>
        {retrivingUserState === retrivingUserStateEnum.FETCHING_USER ||
        retrivingUserState === retrivingUserStateEnum.FETCHING_USER_DATA ? (
          <Loading />
        ) : (
          <Routes>
            {retrivingUserState === retrivingUserStateEnum.USER_AVAILABLE && (
              <>
                <Route path="chat" element={<GroupChat />}>
                  <Route path=":id" element={<ChatSection />} />
                  <Route path="" element={<ChatFallback />} />
                </Route>
                <Route path="profile" element={<Profile />} />
                <Route path="profile-edit" element={<ProfileEdit />} />
                <Route path="*" element={<Navigate to="/chat" />} />
              </>
            )}
            {retrivingUserState ===
              retrivingUserStateEnum.USER_NOT_AVAILABLE && (
              <>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            )}
          </Routes>
        )}
      </Content>
    </ThemeProvider>
  );
}

export default App;
