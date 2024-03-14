import React from 'react';
import { UserProvider } from '../components/UserComponent';
import UserProfile from '../components/UserProfile';

function App() {
  return (
        <UserProvider>
          <UserProfile/> 
        </UserProvider>
    );
}

export default App;

