import React from 'react';
import { View } from 'react-native';
import MainAppbar from '../components/MainAppbar';
import Styles from '../Styles';
import { useTheme } from '../context/useTheme';

const Home = ({ navigation }) => {
  const { isDarkMode } = useTheme(); 

  return (
    <View style={[Styles.container, isDarkMode ? Styles.darkBackground : Styles.lightBackground]}>
      <MainAppbar title="Home" showBackAction={false} showSettingsButton={true} />
      <View style={Styles.content}>
       
      </View>
    </View>
  );
};

export default Home;