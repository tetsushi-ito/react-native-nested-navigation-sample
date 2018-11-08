import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import {
  createBottomTabNavigator,
  NavigationBottomTabScreenOptions,
  NavigationContainer,
  NavigationRoute,
  NavigationRouteConfigMap,
  NavigationScreenConfigProps,
  NavigationScreenProp,
} from 'react-navigation';

function create(initRouteName: string, routeConfigMap: NavigationRouteConfigMap): NavigationContainer {
  return createBottomTabNavigator(routeConfigMap, {
    initialRouteName: initRouteName,
    navigationOptions: (param: NavigationScreenConfigProps & {
      navigationOptions: NavigationScreenProp<NavigationRoute>;
    }): NavigationBottomTabScreenOptions => {
      return {
        tabBarIcon: (options: { tintColor: string | null; focused: boolean; horizontal: boolean }): React.ReactElement<any> | null => {
          const routeName = param.navigation.state.routeName;
          let iconName: string;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${options.focused ? '' : '-outline'}`;
          } else if (routeName === 'Notification') {
            iconName = `ios-options`;
          } else {
            iconName = '';
          }

          const tintColor = options.tintColor || undefined;

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={options.horizontal ? 20 : 25} color={tintColor} />;
        },
        tabBarLabel: (options: { tintColor: string | null; focused: boolean }): React.ReactElement<any> | null => {
          const routeName = param.navigation.state.routeName;
          let label = '';
          if (routeName === 'Home') {
            label = 'ホーム';
          } else if (routeName === 'Notification') {
            label = '通知';
          }

          const tintColor = options.tintColor || undefined;

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Text>{label}</Text>;
        },
      };
    },
  });
}

export default {
  create,
};

