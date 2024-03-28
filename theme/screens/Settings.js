import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar, IconButton } from 'react-native-paper';
import ThemeSwitchButton from '../components/ThemeSwitchButton'; 
import Styles from '../Styles';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={[Styles.container, Styles.lightBackground]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Settings" />
        <ThemeSwitchButton />
      </Appbar.Header>
      <View style={Styles.content}>
        <Text style={Styles.text}>Settings Screen</Text>
      </View>
    </View>
  );
};

export default Settings;