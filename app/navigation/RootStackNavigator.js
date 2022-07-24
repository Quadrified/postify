import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import AppStackNavigator from './AppStackNavigator';
import BodyCompositionReport from '../screens/FitnessAssessment/BodyCompositionReport';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      mode="modal"
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}>
      <RootStack.Screen
        name="Main"
        component={AppStackNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="BodyCompositionReport"
        component={BodyCompositionReport}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
