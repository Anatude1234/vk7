import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import MainAppbar from '../components/MainAppbar';
import Styles from '../Styles';

const Home = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[Styles.container, isDarkMode && Styles.darkBackground]}>
      <MainAppbar title="Home" navigation={navigation} />
      <View style={Styles.content}>
  
   
      </View>
    </View>
  );
};

export default Home;