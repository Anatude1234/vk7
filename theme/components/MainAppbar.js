import React from 'react';
import { Appbar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ThemeSwitchButton from './ThemeSwitchButton'; 

const MainAppbar = ({ title, showBackAction, showSettingsButton }) => {
  const navigation = useNavigation();
  
  const handleBackAction = () => {
    if (showBackAction) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };
  
  const renderSettingsButton = () => {
    if (showSettingsButton) {
      return <IconButton icon="cog" onPress={() => navigation.navigate('Settings')} />;
    }
    return null;
  };
  
  const renderThemeSwitchButton = () => {
    if (title === 'Settings') {
      return <ThemeSwitchButton onPress={() => {}} />;
    }
    return null;
  };
  
  return (
    <Appbar.Header>
      {showBackAction && <Appbar.BackAction onPress={handleBackAction} />}
      <Appbar.Content title={title} />
      {renderSettingsButton()}
      {renderThemeSwitchButton()}
    </Appbar.Header>
  );
};

export default MainAppbar;