import React from 'react';
import { Button } from 'react-native-paper';
import useTheme from '../context/useTheme';

const ThemeSwitchButton = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <Button mode="contained" onPress={toggleDarkMode}>
      Toggle Theme
    </Button>
  );
};

export default ThemeSwitchButton;