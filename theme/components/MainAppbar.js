import React from 'react';
import { Appbar } from 'react-native-paper';
import { Button } from 'react-native-paper';
import useTheme from '../context/useTheme';

const MainAppbar = ({ title, navigation }) => {
  const { toggleDarkMode } = useTheme();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
      <Button mode="contained" onPress={toggleDarkMode}>
      Toggle Theme
    </Button>
    </Appbar.Header>
  );
};

export default MainAppbar;