import React, { useContext } from 'react';
import { useTheme } from './ThemeComponent'; 
export default function ChangeTheme() {
  const { switchTheme } = useTheme();

  const changeTheme = (themeName) => {
    switchTheme(themeName); 
  };

  return (
    <div>
      <button onClick={() => changeTheme('light')}>Light Theme</button>
      <button onClick={() => changeTheme('dark')}>Dark Theme</button>
      <button onClick={() => changeTheme('normal')}>Normal Theme</button>
    </div>
  );
}