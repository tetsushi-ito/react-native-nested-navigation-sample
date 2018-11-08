import React from 'react';
import { createSwitchNavigator, NavigationContainer, NavigationRouteConfigMap } from 'react-navigation';

function create(initRouteName: string, routeConfigMap: NavigationRouteConfigMap): NavigationContainer {
  return createSwitchNavigator(routeConfigMap, {
    initialRouteName: initRouteName,
  });
}

export default {
  create,
};
