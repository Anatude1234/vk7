import React from 'react';
import { Appbar } from 'react-native-paper';

const MainAppbar = ({ title, navigation }) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default MainAppbar;