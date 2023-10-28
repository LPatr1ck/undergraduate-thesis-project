import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';
import { RegisterContextProvider } from './context/RegisterContext';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RegisterContextProvider>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </RegisterContextProvider>
)
