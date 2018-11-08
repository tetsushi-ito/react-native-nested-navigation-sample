import React from 'react';
import { createStackNavigator, NavigationContainer, NavigationRouteConfigMap } from 'react-navigation';

function create(initRouteName: string, routeConfigMap: NavigationRouteConfigMap): NavigationContainer {
  return createStackNavigator(routeConfigMap, {
    initialRouteName: initRouteName,
    navigationOptions: {
      title: '通知',
    },
  });
}

export default {
  create,
};
