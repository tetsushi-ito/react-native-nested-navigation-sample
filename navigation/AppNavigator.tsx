import React from 'react';
// @ts-ignore
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Screens from '../screens';

export default createSwitchNavigator(
  {
    Loading: {
      screen: Screens.AuthLoadingScreen,
    },
    Public: createSwitchNavigator({
      Login: createStackNavigator({
        Default: {
          screen: Screens.LoginScreen,
          navigationOptions: {
            title: 'ログイン',
          },
        },
      }),
    }),
    Closed: createSwitchNavigator({
      Main: createBottomTabNavigator(
        {
          Home: createStackNavigator({
            Default: {
              screen: Screens.HomeScreen,
              navigationOptions: {
                title: 'Home',
              },
            },
          }),
          Notification: createStackNavigator({
            Default: {
              screen: Screens.NotificationScreen,
              navigationOptions: {
                title: 'Notification',
              },
            },
          }),
        },
      ),
    }),
  },
  {
    initialRouteName: 'Loading',
  }
);