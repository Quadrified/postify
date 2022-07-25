import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
});

export default RootNavigator;
