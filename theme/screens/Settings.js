import React from 'react';
import { View, Text } from 'react-native';
import MainAppbar from '../components/MainAppbar';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import Styles from '../Styles';

const Settings = ({ navigation }) => {
  return (
    <View style={[Styles.container, Styles.lightBackground]}>
      <MainAppbar title="Settings" navigation={navigation} />
      <View style={Styles.content}>
        <Text style={Styles.text}>Settings Screen</Text>
        <ThemeSwitchButton />
      </View>
    </View>
  );
};

export default Settings;