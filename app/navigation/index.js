import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';
import styles from '../themes/AppStyles';
import AppColors from '../themes/AppColors';

const RootNavigator = () => {
  return (
    <NavigationContainer onReady={() => SplashScreen.hide()}>
      <SafeAreaView style={styles.root}>
        <StatusBar
          backgroundColor={AppColors.background}
          barStyle="dark-content"
        />
        <AppStackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;
