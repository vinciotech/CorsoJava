import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({name:"Vincenzo Errante"});

  const login = (userName) => {
    setUser({ name: userName });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
       {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
