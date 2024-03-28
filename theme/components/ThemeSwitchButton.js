import React from 'react';
import { Button } from 'react-native-paper';
import { useTheme } from '../context/useTheme';

const ThemeSwitchButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Button mode="contained" onPress={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};

export default ThemeSwitchButton;