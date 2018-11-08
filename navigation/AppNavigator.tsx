import React from 'react';
import Screens from '../screens';
import RootNavigator from './RootNavigator';
import LoadingNavigator from './LoadingNavigator';
import PublicNavigator from './PublicNavigator';
import LoginNavigator from './LoginNavigator';
import ClosedNavigator from './ClosedNavigator';
import MainNavigator from './MainNavigator';
import HomeNavigator from './HomeNavigator';
import NotificationNavigator from './NotificationNavigator';

export default RootNavigator.create('Loading', {
  Loading: LoadingNavigator.create('Screen', {
    Screen: {
      screen: Screens.AuthLoadingScreen,
    },
  }),
  Public: PublicNavigator.create('Login', {
    Login: LoginNavigator.create('Screen', {
      Screen: {
        screen: Screens.LoginScreen,
      },
    }),
  }),
  Closed: ClosedNavigator.create('Main', {
    Main: MainNavigator.create('Home', {
      Home: HomeNavigator.create('Screen', {
        Screen: {
          screen: Screens.HomeScreen,
        },
      }),
      Notification: NotificationNavigator.create('Screen', {
        Screen: {
          screen: Screens.NotificationScreen,
        },
      }),
    }),
  }),
});