import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { DarkModeProvider } from './hooks/useDarkMode';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
