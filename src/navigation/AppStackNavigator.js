import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Post from '../screens/Post/Post';
import Profile from '../screens/Profile/Profile';
import Search from '../screens/Search/Search';

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Post" component={Post} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Search" component={Search} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
