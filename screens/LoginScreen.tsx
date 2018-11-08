import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, TextStyle, View } from 'react-native';
import NavigationService from '../navigation/NavigationService';
import { NavigationActions } from 'react-navigation';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeaderText as TextStyle}>LoginScreen</Text>
        <Button title="ログイン" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');

    NavigationService.dispatch(NavigationActions.navigate({
      routeName: 'Closed',
    }));
  };
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