import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, TextStyle, View } from 'react-native';
import NavigationService from '../navigation/NavigationService';
import { NavigationActions } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeaderText as TextStyle}>HomeScreen</Text>
        <Button title="ログアウト" onPress={this._signOutAsync} />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.removeItem('userToken');

    NavigationService.dispatch(NavigationActions.navigate({
      routeName: 'Public',
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