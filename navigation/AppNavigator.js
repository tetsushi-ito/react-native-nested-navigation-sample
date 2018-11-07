import React from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View } from "react-native";
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

class TestScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeaderText}>テストスクリーン</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeaderText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: 'center',
  }
});

class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>ログイン画面</Text>
      </View>
    );
  }
}

export default createSwitchNavigator(
  {
    Loading: {
      screen: AuthLoadingScreen,
    },
    Public: createSwitchNavigator({
      Login: createStackNavigator({
        Default: {
          screen: LoginScreen,
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
              screen: TestScreen,
              navigationOptions: {
                title: 'Home',
              },
            },
          }),
          Notification: createStackNavigator({
            Default: {
              screen: TestScreen,
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